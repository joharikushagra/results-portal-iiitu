import React from 'react';
import HomePage from './components/pages/home-page';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/pages/login';
import ForgotPwd from './components/pages/forgot-pwd';
import ResultPage from './components/pages/result-page';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route path="/login/forgot" component={ForgotPwd} />
        <Route path="/result/:roll/:sem" component={ResultPage} />
      </Switch>
    </Router>
  );
}

export default App;
