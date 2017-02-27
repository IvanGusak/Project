import React from "react";
import { Link } from "react-router"; 

import styles from "../styles/ui-styles.scss";

class NotFound extends React.Component {
    render () {
        return (
            <div className={styles["not-found"]}>
                <h1>404</h1>
                <h3>PAGE NOT FOUND. Back to the <Link to='/'>Home</Link></h3>                 
            </div>
        )
    }
}

export { NotFound };