import React from "react";
import styles from "../styles/ui-styles.scss";
import { Link } from "react-router";

class AppBar extends React.Component{
    render() {

        return(
            <header className={ `${ styles["app-bar"] }` }>
                <Link className={`${ styles["logo"] } `} to='/'>React JS</Link>  
            </header>
        )
    }
}

export { AppBar };
