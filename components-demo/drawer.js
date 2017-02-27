import React from "react";

import { SideNav, Button } from "../components";
import { SideNavDescription } from "./"

import styles from "./styles/styles.scss";

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
            <div className={styles["container"]}>
                <h2>{ SideNavDescription.header }</h2>
                <hr/>
                <pre><code>{ SideNavDescription.code }</code></pre>
                <h3>Demo</h3>
                <hr/>
                <Button 
                    handleClick={ this.handleClick } 
                    className={ this.state.active ? "button-hidden" : "button-active" }
                    ripple
                    theme="dark"
                >
                        Click Me
                </Button>
                <SideNav 
                    active={ this.state.active } 
                    side="left"  
                    handleToggle={ this.handleClick } 
                    className="custom">   
                        <h3>You can attach here any element you want.</h3>
                </SideNav>
                <h3>Properties: </h3>
                <hr/> 
                { SideNavDescription.props }
            </div>)
    };
};

export { SideNavPage };
