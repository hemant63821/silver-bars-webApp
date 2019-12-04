import React, { Component } from "react";
import SilverCard from '../components/SilverCard/SilverCard'

class LiveOrders extends Component {

    render() {
        return (
            <div className="grey-bg">
                <div className="row">
                    <div className="col-sm-4 mb-4">
                        <SilverCard></SilverCard>
                    </div>
                    <div className="col-sm-4">
                        <SilverCard></SilverCard>
                    </div>
                    <div className="col-sm-4">
                        <SilverCard></SilverCard>
                    </div>
                    <div className="col-sm-4">
                        <SilverCard></SilverCard>
                    </div>
                    <div className="col-sm-4">
                        <SilverCard></SilverCard>
                    </div>
                    <div className="col-sm-4">
                        <SilverCard></SilverCard>
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveOrders; 