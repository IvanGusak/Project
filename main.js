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

import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";
ReactDOM.render(
    <Router history={ hashHistory } >
        <Route path="/" component={ App }> 
            <Route path="/Components" component={ MainPage } />
            <Route path="/Components/Button" component={ ButtonPage } />
            <Route path="/Components/Checkbox" component={ CheckboxPage } />
            <Route path="/Components/SideBar" component={ SideNavPage } />
            <Route path="/Components/Dialog" component={ DialogPage } />  
        </Route>
        <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById("root")
);
