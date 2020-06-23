import * as React from 'react';
import apps from './apps.js';
import {  getRoute } from '@guildeducationinc/guild-admin-utils';
import { AuthContext } from '@guildeducationinc/guild-auth';
const SubApp = () => {
  const authContext = React.useContext(AuthContext)

  return (<>
    {
      apps.map(App => {
        return <App key={getRoute(App)} auth={authContext} />
      })
    }
  </>)
}

export default SubApp;
