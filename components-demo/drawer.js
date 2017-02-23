import React from "react";

import { SideNav, Button } from "../components";

class SideNavPage extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() { 
        this.setState({ 
            active: !this.state.active 
        });
    };
    render(){
        return(
            <div>
                <Button 
                    handleClick={ this.handleClick } 
                    className={ this.state.active ? "button-hidden" : "button-active" }
                    ripple
                >
                        Toggle
                </Button>
                <SideNav 
                    active={ this.state.active } 
                    side="left"  
                    handleToggle={ this.handleClick } 
                    className="custom">   
                        <h3>You can attach here any element you want.</h3>
                </SideNav>
            </div>)
    };
};

export { SideNavPage };
