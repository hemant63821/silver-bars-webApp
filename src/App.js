import React, { Component } from 'react';
import './style.scss';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import history from './history';
import Store from './Store';
import Routes from './routes'
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { storeSilverData } from './utility/localStorage'
import { silverDefaultData } from './localData'


// storeSilverData(silverDefaultData);
history.push('/register')
class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Provider store={Store}>
          <div className="App" >
            <Routes></Routes>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
