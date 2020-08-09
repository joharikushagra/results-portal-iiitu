import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './components/pages/home/home-page';
import Login from './components/pages/login/login';
import ForgotPwd from './components/pages/forgot-pwd/forgot-pwd';
import ResultPage from './components/pages/result/result-page';
import PrevResults from './components/pages/prev-results';
import PrivateRoute from './hoc/PrivateRoute';
import UnPrivateRoute from './hoc/UnPrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <UnPrivateRoute exact path="/login" component={Login} />
        <UnPrivateRoute path="/login/forgot" component={ForgotPwd} />
        <PrivateRoute path="/result/:sem/:roll" component={ResultPage} />
        <PrivateRoute path="/result/prev" component={PrevResults} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
