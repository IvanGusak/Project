import React from "react";

import styles from "./button.scss";

const propsTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    handleClick: React.PropTypes.func,
    href: React.PropTypes.string,
    label:React.PropTypes.string,
    ripple: React.PropTypes.bool,
    theme: React.PropTypes.string,
    type: React.PropTypes.string,
    wave: React.PropTypes.bool
}
const defaultProps = {
    className: "",
    disabled: false,
    handleClick: () => {},
    label: "",
    ripple: true,
    theme: "light",
    type: "raised",
    wave: true
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
        !this.props.disabled ? this.props.handleClick() : event.preventDefault() ;
    }
    className = this.props.type + "-" + this.props.theme;
    label = this.props.children ? this.props.children : this.props.label;
    render() {
        return(
                <a 
                    href= { this.props.href } 
                    className= { `${ styles[this.className] } ${ this.props.className }` } 
                    disabled= { this.props.disabled } 
                    data-ripple= { this.props.ripple }
                    data-theme= { this.props.theme }
                    data-wave= { this.props.wave }
                    onClick= { this.onClick }      
                > 
                    { this.label }
                </a>         
        )
    }
} 

Button.propTypes = propsTypes;
Button.defaultProps = defaultProps;

export default Button;
