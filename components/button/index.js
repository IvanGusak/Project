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
    theme: React.PropTypes.oneOf(["light", "dark"]).isRequired,
    type: React.PropTypes.oneOf(["raised", "flat", "floating"]).isRequired,
    wave: React.PropTypes.bool,
    icon: React.PropTypes.bool
}
const defaultProps = {
    className: "",
    disabled: false,
    handleClick: () => {},
    label: "",
    ripple: false,
    theme: "light",
    type: "raised",
    wave: false,
    icon: false
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
        !this.props.disabled ? this.props.handleClick() : event.preventDefault() ;
    }
    render() {
        return(
                <a 
                    href= { this.props.href } 
                    className= { `${ styles[this.props.type + "-" + this.props.theme] } ${ this.props.className }` } 
                    disabled= { this.props.disabled } 
                    data-ripple= { this.props.ripple }
                    data-wave= { this.props.wave }
                    onClick= { this.onClick }   
                    data-icon= {this.props.icon}   
                > 
                    { this.props.children ? this.props.children : this.props.label } 
                </a>         
        )
    }
} 

Button.propTypes = propsTypes;
Button.defaultProps = defaultProps;

export default Button;
