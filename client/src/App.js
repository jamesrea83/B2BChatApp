import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import User1 from './components/user1';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/user1' component={User1} />
        </Switch>

    </div>
  );
}

export default App;
