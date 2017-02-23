import React from "react";

import { Checkbox } from "../components";

class CheckboxPage extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
    }
    check = () => {
        this.setState({ 
            checked: !this.state.checked
         })
    }
    render(){
        return(
            <div>
                
                <Checkbox 
                    theme="light" 
                    checked= { true }
                />
                <span>Checked</span>
                <Checkbox 
                    theme="light" 
                    checked= { false }
                /> 
                <span>Unchecked</span>
                <Checkbox 
                    theme="light" 
                    checked= { true }
                    disabled
                /> 
                <span>Disabled checked</span>
                <Checkbox 
                    theme="light" 
                    checked= { false }
                    disabled
                /> 
                <span>Disabled unchecked</span>
                <Checkbox 
                    theme="light" 
                    handleClick= { this.check }  
                    checked= { this.state.checked }
                /> 
                <span>CheckBox</span>
            </div>
        )
    };
};

export { CheckboxPage };