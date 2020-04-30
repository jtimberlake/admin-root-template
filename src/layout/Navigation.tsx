import * as React from 'react';
import { TabLink, CoBrand, NavBarTabs , Brand, NavBar} from "@guildeducationinc/recess/components/Navigation";
import { Link } from 'react-router-dom';
import apps from '../apps.js';
import { getLabel, getRoute } from '@guildeducationinc/guild-admin-utils';

export const Navigation = () => {

  return (
    <NavBar >
        <Brand href='/'>
      <CoBrand />
    </Brand>
      <NavBarTabs >
        {
          apps.map(App => {
            const label = getLabel(App);
            const route = getRoute(App);
            return (
              <TabLink  Component={Link} key={label} to={route}>{ label }</TabLink>
            )
          }
          )
        }
      </NavBarTabs>
    </NavBar>
  )
}