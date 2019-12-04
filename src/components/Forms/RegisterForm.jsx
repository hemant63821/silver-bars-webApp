import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText'
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import InputLabel from '@material-ui/core/InputLabel'
import Slide from '@material-ui/core/Slide';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const RenderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => (
        <FormControl className='w-100'>
            <TextField
                label={label}
                error={touched && Boolean(error)}
                {...input}
                {...custom}
            />
            <FormHelperText style={{ color: '#c00' }}>{touched && error}</FormHelperText>
        </FormControl>
    )


const RenderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => (
        <FormControl className='w-100'>
            <InputLabel style={{ color: error && touched ? '#c00' : '' }} >{label}</InputLabel>
            <SelectField
                label={label}
                error={touched && Boolean(error)}
                {...input}
                onChange={(event) => input.onChange(event.target.value)}
                children={children}
                {...custom}
            />
            <FormHelperText style={{ color: '#c00' }}>{touched && error}</FormHelperText>
        </FormControl>
    )

class RegistrationForm extends Component {

    submitForm = (formData) => {
        console.log({ formData })
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit(this.submitForm)}>

                    <div className="row">
                        <div className="col-sm-6 mt-2">
                            <Field
                                name="userId"
                                component={RenderTextField}
                                label="Enter User Id"
                            />
                        </div>
                        <div className="col-sm-6 mt-2">
                            <Field
                                name="valueKg"
                                component={RenderTextField}
                                label="Enter Mobiel Number"
                            // normalize={onlyNumber}
                            />
                        </div>
                        <div className="col-sm-6 mt-2">
                            <Field
                                name="amount"
                                component={RenderSelectField}
                                label="Select City"
                            // onChange={this.changeCity}
                            >

                            </Field>
                        </div>

                        <div className="col-sm-6 mt-2">
                            <Field
                                name="type"
                                component={RenderSelectField}
                                label="Select Type"
                            >
                                <MenuItem value="BUY"> BUY </MenuItem>
                                <MenuItem value="SELL"> SELL </MenuItem>
                            </Field>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'add-silver-form',
    validate
})(RegistrationForm)