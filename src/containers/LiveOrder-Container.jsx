import React, { Component } from "react";
import SilverCard from '../components/SilverCard/SilverCard'
import { getAllSilvers, removeSilverById } from '../redux/actions/allSilverBar-Action'
import { connect } from 'react-redux';

class LiveOrders extends Component {

    componentDidMount() {
        this.props.getAllSilvers()
    }

    removeSilverData = (id) => {
        console.log('check id', id)
        this.props.removeSilverById(id, this.props.silvers)
        // this.forceUpdate();
        // this.props.getAllSilvers()
    }

    render() {
        console.log('check all silvers', this.props.silvers)
        return (
            <div className="grey-bg">
                <div className="row">
                    {
                        this.props.silvers.length ? this.props.silvers.map((itr) => {
                            return (
                                <div className="col-sm-4 mb-4" key={itr.id}>
                                    <SilverCard userId={itr.userId} id={itr.id} onclick={this.removeSilverData}></SilverCard>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    silvers: state.allSilvers.silverData ? state.allSilvers.silverData : []
})

export default connect(mapStateToProps, { getAllSilvers, removeSilverById })(LiveOrders);