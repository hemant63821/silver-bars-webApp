import React, { Component } from 'react';
import './style.scss';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import history from './history';
import Store from './Store';
import Routes from './routes'
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { storeLoginData, storeUsers } from './utility/localStorage'
import { users, loginData } from './localData'

console.log('check', loginData)
storeLoginData(loginData);
storeUsers(users);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={Store}>
          <Routes></Routes>
        </Provider>
      </Router>
    );
  }
}

export default App;
