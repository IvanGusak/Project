import React from "react";
import ReactDOM from "react-dom";

import SideNav from "./components/sidenav/index";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() { 
        this.setState({ active: !this.state.active })
    };
    render(){
        return(
            <div>
                <button 
                    onClick={ this.handleClick } 
                    className={ this.state.active ? "button-hidden" : "button-active" }
                >
                        Toggle
                </button>
                <SideNav 
                    active={ this.state.active } 
                    side="left"  
                    handleToggle={ this.handleClick } 
                    className="custom"
                >   
                        <h3>You can attach here any element you want.</h3>
                </SideNav>
            </div>)
    };
};

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
