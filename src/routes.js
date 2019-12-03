import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Header from './Layout/header/Header'
import Footer from './Layout/footer/Footer'
import RegisterOrder from './containers/RegisterOrder-Container.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import SideBar from './components/SideBar/SideBar'
import LiveOrders from './containers/LiveOrder-Container.jsx'

const wrappedRoutes = () => (
    <Fragment>
        <SideBar>  </SideBar>
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