import React from "react";

import styles from "../styles/ui-styles.scss";

import { Link } from "react-router";

class AppBar extends React.Component{
    render() {

        return(
            <header className={ `${ styles["app-bar"] }` }>
                <hr className={styles["underscore"]}/>
                <h1><Link to="/">Project</Link></h1>
                <p>Demo published on gh-pages</p> 
                <span>Created by Ivan Gusak</span> 
                <hr className={styles["underscore"]}/>
            </header>
        )
    }
}

export { AppBar };
