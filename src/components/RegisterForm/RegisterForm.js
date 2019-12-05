import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Counter from '../Counter/Counter'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'

class RegisterForm extends Component {
    state = {
        checkValue: '',
        value: 0,
        acualQuantity: 0,
        ratePerKg: 0,
        calculatedValue: 0,
        type: 'BUY',
        userId: ''
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
        console.log('check id', e.target.id, e.target.value)
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

        else if (e.target.id === 'outlined-userId') {
            this.setState({
                userId: e.target.value
            })
        }

        else if (e.target.id === 'outlined-age-native-simple') {
            console.log('check id', e.target.id, e.target.value)
            this.setState({
                type: e.target.value
            })
        }
    }

    bindInputValue = (e) => {
        console.log('check', e.target.value)
        this.setState({
            checkValue: e.target.value,

        })
    }

    calculateTotalAmount = () => {
        const { acualQuantity, ratePerKg } = this.state
        if (acualQuantity && ratePerKg) {
            return acualQuantity * ratePerKg
        }
        else {
            return 0
        }
    }

    resetState = () => {
        this.setState({
            checkValue: '',
            value: 0,
            acualQuantity: 0,
            ratePerKg: 0,
            calculatedValue: 0,
            type: 'BUY'
        })
    }

    saveInventory = () => {
        const { userId, value, acualQuantity, ratePerKg, calculatedValue, type } = this.state
        const payload = {
            userId: userId,
            acualQuantity: acualQuantity,
            ratePerKg: ratePerKg,
            calculatedValue: calculatedValue,
            type: type,
        }

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
                                        id="outlined-userId"
                                        label="User Id"
                                        variant="outlined"
                                        color="primary"
                                        value={this.state.userId}
                                        onChange={(e) => this.bindActualQuantity(e)}
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
                                <FormControl variant="outlined" className="w-100">
                                    <InputLabel id="outlined-age-native-simple">
                                        Select Type
                                      </InputLabel>
                                    <Select
                                        native
                                        value={this.state.type}
                                        onChange={(e) => this.bindActualQuantity(e)}
                                        inputProps={{
                                            name: 'age',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option value="BUY">BUY</option>
                                        <option value="SELL">SELL</option>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="col-sm-6 mt-3">
                                <FormControl className='w-100'>
                                    <TextField
                                        id="outlined-primary"
                                        label="Calculated Value"
                                        variant="outlined"
                                        color="primary"
                                        value={this.calculateTotalAmount()}
                                        disabled
                                    />

                                </FormControl>
                            </div>
                        </div>
                    </CardContent>
                    <div className="row text-center mt-3 mb-4">
                        <div className="col">
                            <Button color="primary" variant="outlined" onClick={this.resetState}>
                                Cancel
                        </Button>
                            <Button color="primary" className="ml-2" variant="outlined" onClick={this.saveInventory}>
                                Save
                        </Button>
                        </div>
                    </div>
                </Card>
            </div >
        )
    }
}

export default RegisterForm; 