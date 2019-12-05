import React, { PureComponent } from "react";
import SilverCard from '../components/SilverCard/SilverCard'
import { getAllSilvers, removeSilverById } from '../redux/actions/allSilverBar-Action'
import { connect } from 'react-redux';
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog.jsx'
import _ from 'lodash'

class LiveOrders extends PureComponent {

    componentDidMount() {
        // this.props.getAllSilvers()
    }

    state = {
        openDialogBox: false,
        selectedId: null,
    }

    openDialog = (id) => {
        this.setState({
            openDialogBox: true,
            selectedId: id
        })
    }

    closeDialogBox = () => {
        this.setState({
            openDialogBox: false,
            selectedId: null
        })
    }

    removeSilverData = () => {
        const { selectedId } = this.state
        this.props.removeSilverById(selectedId, this.props.silvers)
        this.setState({
            openDialogBox: false,
            selectedId: null
        })
    }


    render() {
        console.log('check all silvers and check loop', this.props.silvers)
        return (
            <div className="grey-bg">

                {
                    this.state.openDialogBox ? (<ConfirmDialog open={this.state.openDialogBox} handleClose={this.closeDialogBox} onDelete={this.removeSilverData}></ConfirmDialog>) : null
                }
                <div className="row">
                    {
                        this.props.silvers.length ? this.props.silvers.map((itr) => {
                            return (
                                <div className="col-sm-4 mb-4" key={itr.id}>
                                    <SilverCard userId={itr.userId} id={itr.id} quantity={itr.orderQuantity} rate={itr.pricePerKg} onclick={this.openDialog} type={itr.type} totalAmount={itr.totalAmount}></SilverCard>
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
    silvers: state.allSilvers.silverData ? state.allSilvers.silverData : [],
})

export default connect(mapStateToProps, { removeSilverById })(LiveOrders);