import React from "react";
import styles from "./styles/styles.scss";

import { Link } from "react-router";

import { 
    MainDescription,
    ButtonDescription,
    CheckBoxDescription,
    DialogDescription,
    SideNavDescription
 } from "./";

let output;

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            header: MainDescription.header,
            code: MainDescription.code,
            props: ""
        }
        this.renderDescription = this.renderDescription.bind(this);
    }
    renderDescription(e) {
        let target = e.target;
        let value = target.innerText;
        let output = "";
        switch(value){
            case "Button": output = ButtonDescription; break;
            case "SideNav": output = SideNavDescription; break;
            case "CheckBox": output = CheckBoxDescription; break;
            case "Dialog": output = DialogDescription; break;
        }
        this.setState({
            header: output.header,
            code: output.code,
            props: output.props
        })
    }
    render() {
        return (
            <div className={ styles["container"] }>
                <h1><b>React js components</b></h1>
                <hr/>
                <h3>Inspired by the React.js tutorials, these examples shows basic ways of usage React.</h3>
                <hr/>
                <h2>Content with description</h2>
                <ul>
                    <li>Button component =><a className={styles["link"]} onClick={this.renderDescription}>Button</a></li>
                    <li>SideNav component =><a className={styles["link"]} onClick={this.renderDescription}>SideNav</a></li>
                    <li>Checkbox component =><a className={styles["link"]} onClick={this.renderDescription}>CheckBox</a></li>
                    <li>Dialog component =><a className={styles["link"]} onClick={this.renderDescription}>Dialog</a></li>
                </ul>
                <h2>Usage</h2> 
                <hr/>             
                <div>
                    <h3>{ this.state.header }</h3> 
                    <pre>{ this.state.code }</pre>
                    { this.state.props ? <h2>Properties</h2> : "" }
                    { this.state.props }
                </div>
                {this.props.children}
            </div>
        )
    }
}

export { MainPage };