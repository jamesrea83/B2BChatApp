import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import User from './components/user';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/user1' component={() => <User username={'User 1'} />} />
            <Route path='/user2' component={() => <User username={'User 2'} />} />
        </Switch>

    </div>
  );
}

export default App;
