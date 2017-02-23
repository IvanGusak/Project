import React from "react";

import styles from "../styles/ui-styles.scss";

const propTypes = {
    children: React.PropTypes.node,
    onClick: React.PropTypes.func
}

const defaultProp = {
    onclick: () => {}
}

class ListHeader extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} className={styles["list-header"]}>
                { this.props.children }
            </div>
        )
    }
}

ListHeader.propTypes = propTypes;
ListHeader.defaultProp = defaultProp;

export { ListHeader };
