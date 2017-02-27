import React from "react";

import { Checkbox } from "../components";
import { CheckBoxDescription } from "./";

import styles from "./styles/styles.scss";

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
            <div className={styles["container"]}> 
                <h2>{ CheckBoxDescription.header }</h2>
                <hr/>
                <pre><code>{ CheckBoxDescription.code }</code></pre>
                <h3>Demo</h3>
                <hr/>
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
                <h3>Properties: </h3>
                <hr/> 
                { CheckBoxDescription.props }
            </div>
        )
    };
};

export { CheckboxPage };