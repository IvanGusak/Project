import React from "react";

import styles from "../styles/container-styles.scss";

class OutputBox extends React.Component {
    constructor() {
        super();
        this.state = {
            class: ""
        }
        this.fade = "disappear"
    }
    componentDidUpdate (prevProps, prevState) {
        if(prevProps.children.type !== this.props.children.type) {
            console.log("preUpdates");
            setTimeout(() => this.fade = "appear", 1000 )
            this.fade = "appear";
        }  
    }
    componentWillUpdate (nextProps, nextState) {
        if(nextProps.children.type !== this.props.children.type) {
            console.log("nextUpdates");
            this.fade = "disappear";
        } 
    }
    
    
    render() {
        return (
            <div className= {`{ ${styles["output-box"]} ${ styles[this.fade] }`}>
                { this.props.children }
            </div>
        )
    }
}

export { OutputBox };