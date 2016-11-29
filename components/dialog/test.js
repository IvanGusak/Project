import React from "react";
import ReactDOM from "react-dom";

import Dialog from "./components/dialog/index";
import Button from "./components/button/index";
import SideNav from "./components/sideNav/index";

class Main extends React.Component {
    state = {
        active: false
    }
    handleClick=()=> {
        this.setState({ 
            active: !this.state.active
         })
    }
    actionButtons = [
        { 
            handleClick: this.handleClick, 
            label: "Cancel", type: "flat", 
            wave: false 
        },
        { 
            handleClick: this.handleClick, 
            label: "Ok", 
            type: "flat", 
            wave: false 
        }
    ];
    topButtons = [
        {  
            className: "top-button",  
            label: "\u2716", 
            type: "floating", 
            theme: "dark", 
            icon: true, 
            ripple: true },  
    ];
    render(){
        return(
            <div className="fontScreen">
                <Button 
                    label= "switch"
                    handleClick= { this.handleClick }
                    wave
                    ripple     
                /> 
                <Dialog 
                    active= { this.state.active }
                    topButtons= { this.topButtons }
                    actionButtons= { this.actionButtons }
                    handleToggle= { this.handleClick } 
                > 
                    Some another text
                </Dialog>
            </div>)
    };
};

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);