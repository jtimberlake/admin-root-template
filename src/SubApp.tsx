import * as React from 'react';
import apps from './apps.js';
import {  getRoute } from '@guildeducationinc/guild-admin-utils';
import { AuthContext } from '@guildeducationinc/guild-auth';
import { ProtectedComponent, useAuthAndLogin } from '@guildeducationinc/guild-auth';
import { Loading } from '@guildeducationinc/recess/components/Loading';
import { getRoles } from '@guildeducationinc/guild-admin-utils';
import { ErrorPage } from '@guildeducationinc/recess/components/ErrorPage';

const SubApp = () => {
  const authContext = React.useContext(AuthContext)
  const { loading, authError, hasAuthError } = useAuthAndLogin();

  if (loading) {
    return (
      <div>
        <Loading showChildrenWhileLoading={true} overlay={true} loaded={false} />
      </div>
    )
  }
  if (!loading && hasAuthError) {
    return <ErrorPage message={authError} />;
  }
  return (<>
    {
      apps.map(App => {
        const roles = getRoles(App)
        if (roles.length === 0) {
          return (
            <App key={getRoute(App)} auth={authContext} />

          )
          } else {
            return (
              <ProtectedComponent roles={roles} fallback={<ErrorPage message='Not found' />} loader={<Loading />}>
                <App key={getRoute(App)} auth={authContext} />
              </ProtectedComponent>
            )
          }
      })
    }
    </>
  )
}

export default SubApp;
