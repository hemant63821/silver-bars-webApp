import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logIn from './components/login/login'
import Header from './Layout/header/Header'
import Footer from './Layout/footer/Footer'
import UserDashboard from './containers/UserDashboard-Container'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import ModelCard from './components/modelCard/ModelCard'
import Users from './components/Users/Users'

const wrappedRoutes = () => (
    <Fragment>
        <Header></Header>
        <div className="App" >
            <Route exact path="/users" component={UserDashboard} />
            {/* <Route path="*" component={ModelCard} /> */}
            {/* <Redirect to="/login"></Redirect> */}
        </div>
        <Footer></Footer>
    </Fragment>
);



const Router = () => (
    <main>
        <Switch>
            <Route exact path="/" component={logIn} />
            <Route exact path="/login" component={logIn} />
            <PrivateRoute path="/" component={wrappedRoutes} />
        </Switch>
    </main>
);

export default Router;