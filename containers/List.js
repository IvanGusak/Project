import React from "react";

import styles from "../styles/container-styles.scss";

import { ListHeader, ListCollapse, ListLink } from "../ui";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
        this.collapseList = this.collapseList.bind(this);     
    }
    collapseList(e){
        let target = e.target;
        if (target.getAttribute("href").match(/Components/)) {
            this.setState({
                active: !this.state.active
            })
        }
        else {
            this.setState({
                active: false
            })
        }
        if (target.getAttribute("href").match(/Components\//i)) {
            this.setState({
                active: true
            })
        }
        console.log()
    }
    render() {
        return (
            <div onClick={this.collapseList}>
                <ListHeader >
                    <ListLink activeOnlyWhenExact={true} to="/Components" label="Components" />
                    <ListCollapse active={this.state.active}>
                        <ListLink activeOnlyWhenExact={true} to="/Components/Button" label="Button" />
                        <ListLink activeOnlyWhenExact={true} to="/Components/Dialog" label="Dialog" />
                        <ListLink activeOnlyWhenExact={true} to="/Components/Checkbox" label="CheckBox" />
                        <ListLink activeOnlyWhenExact={true} to="/Components/SideBar" label="Sidebar" />
                    </ListCollapse>
                </ListHeader>
                <ListLink activeOnlyWhenExact={true} to="/Project" label="Project" />
                <ListLink activeOnlyWhenExact={true} to="/" label="Home" />
            </div>
        )
    }
}

export { List };