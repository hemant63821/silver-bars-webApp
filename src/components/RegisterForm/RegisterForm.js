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
        acualQuantity: 0
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
        this.setState({
            acualQuantity: e.target.value,
            value: Math.ceil(e.target.value)
        })
    }

    bindInputValue = (e) => {
        console.log('check', e.target.value)
        this.setState({
            checkValue: e.target.value,

        })
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
                                        label="Outlined secondary"
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
                                                id="outlined-secondary"
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
                            <div className="col-sm-6 mt-2">
                                <FormControl className='w-100'>
                                    <TextField
                                        id="outlined-primary"
                                        label="User Id"
                                        variant="outlined"
                                        color="primary"
                                    />

                                </FormControl>
                            </div>
                            <div className="col-sm-6 mt-2">
                                <FormControl className='w-100'>
                                    <TextField
                                        id="outlined-primary"
                                        label=""
                                        variant="outlined"
                                        color="primary"
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