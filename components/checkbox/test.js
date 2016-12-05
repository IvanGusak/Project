import React from "react";
import ReactDOM from "react-dom";

import Checkbox from "./components/checkbox/index";

class Main extends React.Component {
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
                <span>Disabled checked</span>
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

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
