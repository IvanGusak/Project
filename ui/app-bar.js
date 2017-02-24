import React from "react";
import styles from "../styles/ui-styles.scss";
import { Link } from "react-router";

class AppBar extends React.Component{
    render() {

        return(
            <header className={ `${ styles["app-bar"] }` }>
                <a href="/Project/" className={`${ styles["logo"] } `} >React JS</a>  
            </header>
        )
    }
}

export { AppBar };
