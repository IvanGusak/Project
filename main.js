import React from "react";
import ReactDOM from "react-dom";

import { App } from "./containers";
import { Triangle } from "./triangles-demo";
import { Signature } from "./signature-demo";
import { AppBar, NotFound, Home } from "./ui";
import { 
    MainPage, 
    ButtonPage, 
    SideNavPage,
    CheckboxPage,
    DialogPage
} from "./components-demo";
import { 
    Router, 
    Route, 
    IndexRoute,
    IndexRedirect, 
    browserHistory, 
    hashHistory 
} from "react-router";

ReactDOM.render(
    <Router history={ hashHistory } >
        <Route path="/" component={ App }> 
            <IndexRedirect to="/Project" />
            <IndexRoute component={ Home } />
            <Route path="/Components" component={ MainPage } />
            <Route path="/Components/Button" component={ ButtonPage } />
            <Route path="/Components/Checkbox" component={ CheckboxPage } />
            <Route path="/Components/SideBar" component={ SideNavPage } />
            <Route path="/Components/Dialog" component={ DialogPage } />  
            <Route path="/Triangle" component={ Triangle } />
            <Route path="/Signature" component={ Signature } />
        </Route>
        <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById("root")
);
