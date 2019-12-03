import React, { Component } from "react";
import './UserDashboard-Container.scss'
import Users from '../components/Users/Users'

class UserDashboard extends Component {

    render() {
        return (
            <div className="page-content grey-bg">
                <div className="modelContainer">
                    <Users></Users>
                </div>
            </div>
        )
    }
}

export default UserDashboard;