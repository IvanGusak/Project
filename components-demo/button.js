import React from "react";

import { Button } from "../components";
import { ButtonDescription } from "./"

import styles from "./styles/styles.scss";

class ButtonPage extends React.Component {
    render(){
        return(
            <div className={styles["container"]}>
                <h2>{ ButtonDescription.header }</h2>
                <hr/>
                <pre><code>{ ButtonDescription.code }</code></pre>
                <h3>Demo</h3>
                <hr/>
                <Button theme="light" type="raised"  wave ripple> Button </Button>
                <Button type="raised" theme="dark" wave ripple> Button </Button>
                <Button theme="light" disabled wave ripple> Button </Button>  
                <Button type="flat" theme="light" wave ripple> Button </Button>
                <Button type="flat" theme="light" disabled wave ripple> Button </Button>
                <Button type="floating"  theme="light" ripple>
                    <i className="material-icons">add</i>
                </Button>
                <h3>Properties: </h3>
                <hr/> 
                { ButtonDescription.props }  
            </div>)
    };
};

export { ButtonPage };