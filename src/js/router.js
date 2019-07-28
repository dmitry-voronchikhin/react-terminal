import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Pay from './pay'
import Home from './home'

/*function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pay" component={Pay}></Route>
      </Switch>
    </Router>
  );
}

export default App;*/

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route strict path="/pay" component={Pay}></Route>
      </Switch>
    );
  }
}