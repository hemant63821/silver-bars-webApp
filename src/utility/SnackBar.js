import React, { Component } from "react";
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

const colorType = {
    default: "#000000",
    error: "#d32f2f",
    success: "#43a047",
    warning: "#ffa000",
    info: "#1976d2"
}

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
    default: InfoIcon
};

class MySnackBar extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.state = {
            type: (typeof (props.type) !== 'string' || props.type === null) ? "default" : props.type,
            verticalOrigin: (typeof (props.verticalOrigin) !== 'string' || props.verticalOrigin === null) ? "top" : props.verticalOrigin,
            horizontalOrigin: (typeof (props.horizontalOrigin) !== 'string' || props.horizontalOrigin === null) ? "right" : props.horizontalOrigin,
            open: props.open,
            message: props.message,
            showIcon: props.showIcon !== null ? props.showIcon : false,
            autoHideDuration: (typeof (props.autoHideDuration) !== 'number' || props.type === null) ? 5000 : props.autoHideDuration
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            type: (typeof (props.type) !== 'string' || props.type === null) ? "default" : props.type,
            verticalOrigin: (typeof (props.verticalOrigin) !== 'string' || props.verticalOrigin === null) ? "top" : props.verticalOrigin,
            horizontalOrigin: (typeof (props.horizontalOrigin) !== 'string' || props.horizontalOrigin === null) ? "right" : props.horizontalOrigin,
            open: props.open,
            message: props.message,
            showIcon: props.showIcon !== null ? props.showIcon : false,
            autoHideDuration: (typeof (props.autoHideDuration) !== 'number' || props.type === null) ? 5000 : props.autoHideDuration
        });
    }

    onClose() {
        const { onClose = b => b } = this.props;

        this.setState({ open: false }, () => onClose())
    }


    render() {
        const type = this.state.type;
        const message = this.state.message
        const hideDuration = this.state.autoHideDuration
        const Icon = variantIcon[type];
        return (

            <Snackbar
                open={this.state.open}
                autoHideDuration={hideDuration}
                anchorOrigin={{ vertical: this.state.verticalOrigin, horizontal: this.state.horizontalOrigin }}
                onClose={() => {
                    // this.handleClose()
                    // console.log("inside onClose")
                    this.onClose(false)
                    //TODO: function callback to Caller Component

                }}>
                <SnackbarContent
                    className={type}
                    style={{ backgroundColor: colorType[type], width: 'fit-content' }}
                    message={
                        <span id="client-snackbar"
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                            <Icon
                                style={{ marginRight: "5px", opacity: .9 }}
                            />

                            {message !== '' ? message : "Message not available"}
                        </span>
                    }>


                </SnackbarContent>
            </Snackbar>


        );
    }
}



MySnackBar.propTypes = {
    type: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'info']).isRequired,
    showIcon: PropTypes.bool, // bool to show Icon with text based on above 'type'
    open: PropTypes.bool.isRequired,
    autoHideDuration: PropTypes.number, // autoHideDuration byDefault 5000 miliSecond
    verticalOrigin: PropTypes.oneOf(['top', 'bottom']),
    horizontalOrigin: PropTypes.oneOf(['left', 'center', 'right']),
    onClose: PropTypes.func,
    message: PropTypes.string.isRequired
};


export default MySnackBar;