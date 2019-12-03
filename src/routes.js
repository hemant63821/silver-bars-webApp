import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Header from './Layout/header/Header'
import Footer from './Layout/footer/Footer'
import UserDashboard from './containers/OrderDashboard-Container'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import SideBar from './components/SideBar/SideBar'

const wrappedRoutes = () => (
    <Fragment>
        <div className="App" >
            <Route exact path="/users" component={UserDashboard} />
        </div>
        {/* <Side */}
        <SideBar></SideBar>
        <Footer></Footer>
    </Fragment>
);



const Router = () => (
    <main>
        <Switch>
            <PrivateRoute path="/" component={wrappedRoutes} />
        </Switch>
    </main>
);

export default Router;