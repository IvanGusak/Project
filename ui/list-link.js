import React from "react";
import { Link, Route } from "react-router-dom";

import styles from "../styles/ui-styles.scss";

const propsTypes = {
    activeOnlyWhenExact: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    to: React.PropTypes.string
};
const defaultProps = {
    activeOnlyWhenExact: false,
    className: "",
    label: "",
    to: "/"
};


class ListLink extends React.Component {
    render() {
        return (
            <Route path={ this.props.to } exact={ this.props.activeOnlyWhenExact } children={({ match }) => (
                <Link
                    onClick={this.handleClick}
                    className={`
                            ${ match ? styles["active-item"] : styles["non-active-item"]} 
                            ${ styles["list-item"]}
                            ${ this.props.className}
                        `}
                    to={this.props.to}
                >
                    {this.props.label}
                </Link>
            )} />
        )
    }
}

ListLink.propTypes = propsTypes;
ListLink.defaultProps = defaultProps;

export { ListLink };
