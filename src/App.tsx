import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from './layout/Navigation';
import { Main } from './layout/Main';
import SubApp from './SubApp'; // This file is auto-generated
import { AuthProvider } from '@guildeducationinc/guild-auth';

const App: React.SFC = () => {
    return (
      <BrowserRouter>
        <AuthProvider
          audience={process.env.AUTH0_AUDIENCE}
          domain={process.env.AUTH0_DOMAIN}
          client_id={process.env.AUTH0_CLIENT_ID}
          redirect_uri={window.location.origin}
        >
          <Navigation />
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
          <main className='main'>
            <SubApp />
          </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
