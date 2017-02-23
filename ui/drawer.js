import React from "react";
import styles from "../styles/ui-styles.scss";

const propsTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};
const defaultProps = {
  className: "",
};

class Drawer extends React.Component {
    render() {
      
        return(
            <div className={ `${ styles.drawer } ${ this.props.className } `}>
                { this.props.children }
            </div>
        )
    }
}

Drawer.propTypes = propsTypes;
Drawer.defaultProps = defaultProps;

export { Drawer };
