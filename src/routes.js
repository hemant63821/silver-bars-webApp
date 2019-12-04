import React from 'react';
import { Switch } from 'react-router-dom';
import Footer from './Layout/footer/Footer'
import SideBar from './components/SideBar/SideBar'

const Router = () => (
    <main>
        <Switch>
            <SideBar></SideBar>
        </Switch>
        <Footer></Footer>
    </main>
);

export default Router;