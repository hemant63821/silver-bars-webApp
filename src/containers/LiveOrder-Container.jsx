import React, { Component } from "react";
import SilverCard from '../components/SilverCard/SilverCard'
import { getAllSilvers } from '../redux/actions/allSilverBar-Action'
import { connect } from 'react-redux';

class LiveOrders extends Component {

    componentDidMount() {
        this.props.getAllSilvers()
    }

    render() {
        console.log('check all silvers', this.props.silvers)
        return (
            <div className="grey-bg">
                <div className="row">
                    {
                        this.props.silvers.length ? this.props.silvers.map((itr, key) => {
                            return (
                                <div className="col-sm-4 mb-4" key={itr.id}>
                                    <SilverCard></SilverCard>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    silvers: state.allSilvers.silverData ? state.allSilvers.silverData : []
})

export default connect(mapStateToProps, { getAllSilvers })(LiveOrders);