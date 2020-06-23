import * as React from 'react';
import { TabLink, CoBrand, NavBarTabs , Brand, NavBar, UserActions } from "@guildeducationinc/recess/components/Navigation";
import { Link } from 'react-router-dom';
import apps from '../apps.js';
import { getLabel, getRoute } from '@guildeducationinc/guild-admin-utils';
import Button from '@guildeducationinc/recess/components/Button';
import { AuthContext } from '@guildeducationinc/guild-auth';

export const Navigation = () => {
  const authContext = React.useContext(AuthContext)

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
      <UserActions
      testid='useractions'
      loggedInTitle='Test User'
      loggedinActions={[
        {
          type: 'customLink',
          name: 'Sign out',
          Component: Button,
          onClick: authContext.logout,
          appearance: 'outline',
        },
      ]}
      primaryTitle='Sign in'
      hideSecondaryAction
      onPrimaryClick={authContext.loginWithRedirect}
      loggedIn={!!authContext.user}
    />
    </NavBar>
  )
}