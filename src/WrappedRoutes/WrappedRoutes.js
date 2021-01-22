import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import LiveOrders from '../containers/LiveOrder-Container.jsx';
import RegisterOrder from '../containers/RegisterOrder-Container.jsx';
import TestCodeContainer from '../containers/testCode-container.jsx';

const WrappedRoutes = () => (
    <Fragment>
        <Route exact path="/register" component={RegisterOrder} />
        <Route exact path="/liveOrders" component={LiveOrders} />
        <Route exact path="/test" component={TestCodeContainer} />
    </Fragment>
)

export default WrappedRoutes;