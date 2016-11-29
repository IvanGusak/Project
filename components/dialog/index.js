import React from "react";

import Button from "../button/index";
import styles from "./dialog.scss";

const propsTypes = {
    actionButtons: React.PropTypes.array,
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    content: React.PropTypes.string,
    handleToggle: React.PropTypes.func,
    title: React.PropTypes.string,
    topButtons: React.PropTypes.array,
    type: React.PropTypes.string
}
const defaultProps = { 
    actionButtons: [],
    active: true,
    className: "",
    content: "",
    handleToggle: () => {},
    title: "",
    topButtons: [],
    type: "bottom",
}

class Dialog extends React.Component {
    topButtons = this.props.topButtons.map((button,id) => {
        const className = button.className;
        return (
            <Button 
                key= { id } { ...button } 
                className= { `${styles["title-button"]} `} 
            /> 
        )
    });
    actionButtons = this.props.actionButtons.map((button,id) => {
        const className = button.className;
        return (
            <Button 
                key= { id } { ...button } 
                className= { `${styles["action-button"]} `} 
            /> 
        )
    });
    render() {
        return (
            <div className= { `${ this.props.active ? styles.active : styles.hidden } ${ this.props.className }` } >
                <div 
                    className= { styles.overlay } 
                    onClick= { this.props.handleToggle } 
                />
                <div className= { styles.dialog } >
                    <div className= { this.props.title ? styles.title : "" } > 
                        { this.props.title } { this.topButtons }
                    </div>
                    <div className= { styles.content } > 
                        { this.props.children } 
                    </div>
                    <div className= { styles.action } >
                        { this.actionButtons }
                    </div>  
                </div>
            </div>            
        )
    }
}

Dialog.propTypes = propsTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;