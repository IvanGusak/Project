import React from "react";
import { Link } from "react-router"; 

import styles from "../styles/ui-styles.scss";

class NotFound extends React.Component {
    render () {
        return (
            <div className={styles["not-found"]}>
                Page not found. Back to  <Link to='/'>main</Link>
            </div>
        )
    }
}

export { NotFound };