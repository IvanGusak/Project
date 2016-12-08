import React from "react";
import ReactDOM from "react-dom";

import Examples from "./components/examples";

import Button from "./components/button/index";
import SideNav from "./components/sideNav/index";

class Main extends React.Component {
    constructor() {
        super();
        this.callTest = this.callTest.bind(this);
        this.state = {
            active: false,
            checked: false
        }
    }
    callTest = (type) => {  
        const name = type + "_Main" ;
        let component = Examples[name];
        ReactDOM.render(
            React.createElement(component, null),
            document.getElementById("example")
        );
        this.handleToggle();
    }
    check = () => {
        this.setState({ 
            checked: !this.state.checked
         })
    }
    handleToggle = () => {
        this.setState({ 
            active: !this.state.active
         })
    }

    render(){
        return(
            <div className="fontScreen">
                <Button 
                    label= "Menu"
                    handleClick= { this.handleToggle }
                    wave
                    ripple 
                    theme="dark"   
                /> 
                <SideNav
                    active= { this.state.active }
                    className="aside"
                    handleToggle= { this.handleToggle  }
                >   
                    <Button 
                        label="Dialog"
                        className="button" 
                        type="flat" 
                        handleClick= { this.callTest.bind(Button,"Dialog") }  
                    />
                    <Button 
                        label="Button"
                        className="button" 
                        type="flat"  
                        handleClick= { this.callTest.bind(Button,"Button") }  
                    />
                    <Button 
                        label="Checkbox"
                        className="button" 
                        type="flat"  
                        handleClick= { this.callTest.bind(Button,"Checkbox") }  
                    />
                    <Button 
                        label="SideNav"
                        className="button" 
                        type="flat"  
                        handleClick= { this.callTest.bind(Button,"SideNav") }  
                    />
                </SideNav>
            </div>)
    };
};

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
