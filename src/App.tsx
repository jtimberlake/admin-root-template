import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './layout/Navigation';
import { Main } from './layout/Main';
import SubApp from './SubApp'; // This file is auto-generated
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const App: React.SFC<any> = () => {
    return (
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
        <main className='main'>
          <SubApp />
        </main>
      </Router>
    );
}

export default App;
