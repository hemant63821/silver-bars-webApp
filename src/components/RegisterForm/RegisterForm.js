import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Counter from '../Counter/Counter'

class RegisterForm extends Component {

    state = {
        checkValue: '',
        value: 0,
        acualQuantity: 0,
        ratePerKg: 0,
        calculatedValue: 0
    }

    decrement = () => {
        const { value } = this.state
        if (value > 0) {
            this.setState({
                value: value - 1,
                acualQuantity: value - 1
            })
        }
    }

    incrementCount = () => {
        const { value } = this.state
        if (value >= 0) {
            this.setState({
                value: value + 1,
                acualQuantity: value + 1
            })
        }
    }

    bindActualQuantity = (e) => {
        if (e.target.id === 'outlined-quantity') {
            this.setState({
                acualQuantity: e.target.value,
                value: Math.ceil(e.target.value)
            })
        }
        else if (e.target.id === 'outlined-rate') {
            this.setState({
                ratePerKg: e.target.value
            })
        }

    }

    bindInputValue = (e) => {
        console.log('check', e.target.value)
        this.setState({
            checkValue: e.target.value,
        })
    }

    calculateTotalAmount = (quantity, rate) => {

    }

    render() {
        return (
            <div className="grey-bg">
                <Card>
                    <CardContent>
                        <div className="row">
                            <div className="col-sm-6 mt-2">
                                <FormControl className='w-100'>
                                    <TextField
                                        id="outlined-secondary"
                                        label="User Id"
                                        variant="outlined"
                                        color="primary"
                                    />

                                </FormControl>
                            </div>
                            <div className="col-sm-6 mt-2">

                                <div className="row">
                                    <div className="col-sm-3">
                                        <Counter decrementCount={this.decrement} incrementCount={this.incrementCount} count={this.state.value}></Counter>
                                    </div>
                                    <div className="col-sm-9">
                                        <FormControl className='w-100'>
                                            <TextField
                                                id="outlined-quantity"
                                                label="Quantity"
                                                variant="outlined"
                                                color="primary"
                                                value={this.state.acualQuantity}
                                                type="number"
                                                onChange={(e) => this.bindActualQuantity(e)}
                                            />
                                        </FormControl>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-6 mt-3">
                                <FormControl className='w-100'>
                                    <TextField
                                        id="outlined-rate"
                                        label="Rate Per Kilogram"
                                        variant="outlined"
                                        color="primary"
                                        value={this.state.ratePerKg}
                                        type="number"
                                        onChange={(e) => this.bindActualQuantity(e)}
                                    />

                                </FormControl>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <FormControl className='w-100'>
                                    <TextField
                                        id="outlined-primary"
                                        label=""
                                        variant="outlined"
                                        color="primary"
                                    />

                                </FormControl>
                            </div>

                            <div className="col-sm-6 mt-3">
                                <FormControl className='w-100'>
                                    <TextField
                                        id="outlined-primary"
                                        label="Calculated Value"
                                        variant="outlined"
                                        color="primary"
                                        value={this.state.calculatedValue}
                                        disabled
                                    />

                                </FormControl>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default RegisterForm; 