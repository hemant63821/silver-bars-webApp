import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import './RegisterOrder-Container.scss';
import CardContent from '@material-ui/core/CardContent';
import RegisterForm from '../components/Forms/RegisterForm';

class RegisterOrderDashboard extends Component {

    render() {
        return (
            <div className="grey-bg">
                <Card>
                    <CardContent>
                        <RegisterForm></RegisterForm>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default RegisterOrderDashboard; 