import * as React from 'react';
import { NavBar } from '@guildeducationinc/recess/components/NavBar';
import { Brand } from '@guildeducationinc/recess/components/NavBar/Brand';
import { NavbarTabs  } from '@guildeducationinc/recess/components/NavBar/NavbarTabs';
import { CoBrand } from "@guildeducationinc/recess/components/CoBrand";
import { TabLink } from "@guildeducationinc/recess/components/TabNavigation/TabLink";
import { Link } from 'react-router-dom';
import apps from '../apps.js';
import { getLabel, getRoute } from '@guildeducationinc/guild-admin-utils';

export const Navigation = () => {

  return (
    <NavBar >
        <Brand href='/'>
      <CoBrand />
    </Brand>
      <NavbarTabs >
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
      </NavbarTabs>
    </NavBar>
  )
}