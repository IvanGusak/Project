import React from "react";

import Button from "../button/index";
import styles from "./dialog.scss";

const propsTypes = {
    actionButtons: React.PropTypes.array,
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    topButtons: React.PropTypes.array,
}
const defaultProps = { 
    actionButtons: [],
    active: false,
    className: "",
    title: "",
    topButtons: [],
}

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.topButtons = this.props.topButtons.map((button,id) => {
            const className = button.className;
            return (
                <Button 
                    key= { id } { ...button } 
                    className= { `${ styles["title-button"] } ${ button.className }` } 
                /> 
            )
        });
        this.actionButtons = this.props.actionButtons.map((button,id) => {
            const className = button.className;
            return (
                <Button 
                    key= { id } { ...button } 
                    className= { `${ styles["action-button"] } ${ button.className }` } 
                /> 
            )
        });
    }
    render() {
        return (
            <div className= { `${ this.props.active ? styles.active : styles.hidden } ${ this.props.className }` } >
                <div 
                    className= { styles.overlay }
                    onClick= { this.props.handleToggle }
                />
                <div className= { styles.dialog } >
                    <div className= { styles.title } > 
                        { this.props.title } 
                        { this.topButtons }
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