import React from "react";

import styles from "./checkbox.scss";

const propsTypes = {
    className: React.PropTypes.string,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    handleClick: React.PropTypes.func,
    theme: React.PropTypes.oneOf(["light", "dark"]).isRequired,
};
const defaultProps = {
    className: "",
    checked: false,
    disabled: false,
    handleClick: () => {},
    theme: "light", 
};

class Checkbox extends React.Component {
    render() {
        return(
            <div 
                className= { `${ styles[this.props.theme] } ${ this.props.className } `} 
                data-checked= { this.props.checked}
                disabled= { this.props.disabled }
                onClick= { this.props.handleClick }
            >
                <i className="material-icons">check</i>
            </div>
        );
    }
}

Checkbox.propTypes = propsTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
