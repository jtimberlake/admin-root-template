#!/usr/bin/env node

const Mustache = require('mustache');
const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');
// import process from 'process';

// This is the relative path that the admin bundles will be sync to via the aws CLI in the AWS code build step 
const bundlePath = path.join(__dirname, '../..', './bundles');

/**
 * Make the file name a valid JS variable
 */
const normalizeFileName = (fileName) => {
  return fileName.replace(/-/g, '_')
}
async function walk(dir, fileList = []) {
  const files = await fs.readdir(dir)
  for (const file of files) {
    const stat = await fs.stat(path.join(dir, file))
    if (stat.isDirectory()) fileList = await walk(path.join(dir, file), fileList)
    else fileList.push(path.join(dir, file))
  }
  return fileList
}

const isCss = (fileExt) => fileExt === '.css';
const isJs = (fileExt) => fileExt === '.js';

const hash = (string) => crypto.createHash('sha256').update(string, 'utf8').digest('hex').substr(0, 4);

walk(bundlePath).then(files => {
    const [css, bundles] = files.reduce((acc, file) => {
      const cssAcc = acc[0]
      const bundleAcc = acc[1]
      const extension = path.extname(file);
      if (isCss(extension)) {
        cssAcc.push(file)
      } else if (isJs(extension)) {
        bundleAcc.push(file)
      }
      return acc;
    }, [[], []]);

    const view = {
      bundles: bundles.map(bundle => {
        return {
          /**
           * We want to hash the files in the unlikely case that there are two names that are the same. This will prevent variable name conflicts when the `app.js` file
           * is written to disk.
           */
          name: `${normalizeFileName(path.parse(bundle).name)}_${hash(bundle)}`,
          path: bundle
        }
      }),
      css
    }

    const template = fs.readFileSync(path.resolve(__dirname, './app.js.mustache')).toString();
    const output = Mustache.render(template, view);
    fs.writeFile(path.join(__dirname, '../../src', 'apps.js'), output)
  })

