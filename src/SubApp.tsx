import * as React from 'react';
import apps from './apps.js';
import {  getRoute } from '@guildeducationinc/guild-admin-utils';

const SubApp = () => {
  return (<>
    {
      apps.map(App => {
        return <App key={getRoute(App)} externalRouter={true} />
      })
    }
  </>)
}

export default SubApp;
