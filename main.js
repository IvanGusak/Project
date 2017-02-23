import React from "react";
import ReactDOM from "react-dom";

import { App } from "./containers";
import { AppBar, NotFound } from "./ui";
import { 
    MainPage, 
    ButtonPage, 
    SideNavPage,
    CheckboxPage,
    DialogPage
} from "./components-demo";

import { Router, Route, IndexRoute, browserHistory } from "react-router";
ReactDOM.render(
    <Router history={ browserHistory} >
        <Route path="/Project" component={ App }> 
            <Route path="/Project/Components" component={ MainPage } />
            <Route path="/Project/Components/Button" component={ ButtonPage } />
            <Route path="/Project/Components/Checkbox" component={ CheckboxPage } />
            <Route path="/Project/Components/SideBar" component={ SideNavPage } />
            <Route path="/Project/Components/Dialog" component={ DialogPage } />  
        </Route>
        <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById("root")
);
