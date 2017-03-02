import React from "react";

import styles from "../styles/ui-styles.scss";

class Home extends React.Component {
    render() {
        return (
            <div >
                <div className={styles["logo"]}>
                    Welcome
                </div>
            </div> 
        )
    }
}

export { Home };