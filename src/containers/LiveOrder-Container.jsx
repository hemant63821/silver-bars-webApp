import React, { PureComponent } from "react";
import SilverCard from '../components/SilverCard/SilverCard'
import { getAllSilvers, removeSilverById } from '../redux/actions/allSilverBar-Action'
import { connect } from 'react-redux';
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog.jsx'
import MySnackBar from '../utility/SnackBar';
import _ from 'lodash'

class LiveOrders extends PureComponent {

    componentDidMount() {
        this.props.getAllSilvers()
    }

    // componentDidUpdate(prevProps) {
    //     if (_.isEqual(prevProps.silvers, this.props.silvers)) {
    //         this.setState({
    //             inventortSaved: true
    //         })
    //     }
    // }

    state = {
        openDialogBox: false,
        selectedId: null,
        inventortSaved: false
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
                {/* 
                {
                    this.state.inventortSaved === true ? (
                        <MySnackBar
                            type='success'
                            open={this.state.inventortSaved}
                            autoHideDuration={500}
                            onClose={() => {
                                this.setState({ inventortSaved: false })
                            }}
                            message='Inventory Added SuccessFully'>
                        </MySnackBar>
                    ) : null
                } */}

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

export default connect(mapStateToProps, { getAllSilvers, removeSilverById })(LiveOrders);