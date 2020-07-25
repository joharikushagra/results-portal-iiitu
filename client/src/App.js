import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/pages/home/home-page';
import Login from './components/pages/login/login';
import ForgotPwd from './components/pages/forgot-pwd/forgot-pwd';
import ResultPage from './components/pages/result/result-page';
import PrevResults from './components/pages/prev-results';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route path="/login/forgot" component={ForgotPwd} />
        <Route path="/result/:sem/:roll" component={ResultPage} />
        <Route path="/result/prev" component={PrevResults} />
      </Switch>
    </Router>
  );
}

export default App;
