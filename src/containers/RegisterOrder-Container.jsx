import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import './RegisterOrder-Container.scss';
import CardContent from '@material-ui/core/CardContent';
import RegisterForm from '../components/RegisterForm/RegisterForm'
import Counter from '../components/Counter/Counter'

class RegisterOrderDashboard extends Component {

    render() {
        return (
            <div className="grey-bg">
                {/* <Card>
                    <CardContent> */}
                {/* </CardContent>
                </Card> */}
                <RegisterForm></RegisterForm>
            </div>
        )
    }
}

export default RegisterOrderDashboard; 