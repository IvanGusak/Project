import React from "react";

import common from "../config/_common.scss";
import styles from "../styles/container-styles.scss";

import { Link } from "react-router";
import { List, Footer } from "./";
import { Drawer, AppBar } from "../ui";
import { Button } from "../components";

class App extends React.Component {
	render() {
		return (
			<div className={ common["fullScreen"] }>
				<div className={ styles["main"] } >
					<Drawer>
						<AppBar/>
						<List/>
					</Drawer>
					<div className={ styles["output-box"] }>
						{this.props.children}
					</div>
					<Footer/>
				</div>	
			</div>
		)
	}
}

export { App };