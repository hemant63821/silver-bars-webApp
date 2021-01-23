import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
// import './RegisterOrder-Container.scss';

class TestCodeContainer extends Component {

    state = {
        characterCount: 0
    }

    calculateKeyLength = (e) => {
        this.setState({
            characterCount: e.target.value.length
        })
    }
    render() {
        return (
            <div className="grey-bg">
                {
                    console.log("check length", this.state.characterCount)
                }
                <TextField id="outlined-basic" label="Input" variant="outlined" onKeyUp={(e) => this.calculateKeyLength(e)} />
            </div>
        )
    }
}

export default TestCodeContainer; 