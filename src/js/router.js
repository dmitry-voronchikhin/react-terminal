import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Pay from './pay'
import Home from './home'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/pay" component={Pay}></Route>
    </Switch>
  );
}

export default App;