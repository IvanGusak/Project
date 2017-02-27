import React from "react";

import styles from "../styles/ui-styles.scss";

const propTypes = {
    active: React.PropTypes.bool,
    children: React.PropTypes.node
}

const defaultProp = {
    ///active: false
}

class ListCollapse extends React.Component {
    render() {
        return (
            <div 
                className= {`${this.props.active ? styles["list-collapse"] : styles["list-expand"]}`}
            >
                { this.props.children }
            </div>
        )
    }
}

ListCollapse.propTypes = propTypes;
ListCollapse.defaultProp = defaultProp;

export { ListCollapse };
