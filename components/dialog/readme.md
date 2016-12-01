# \<Dialog /> component 

Some example how to use component:

```javascript
import React from "react";
import ReactDOM from "react-dom";

import Dialog from "./components/dialog/index";
import Button from "./components/button/index";
import SideNav from "./components/sideNav/index";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }
    
    handleClick=()=> {
        this.setState({ 
            active: !this.state.active
         })
    }
    actionButtons = [
        { 
            className: "test",
            handleClick: this.handleClick, 
            label: "Cancel", type: "flat", 
            wave: false 
        },
        { 
            handleClick: this.handleClick, 
            label: "Ok", 
            type: "flat", 
            wave: false 
        }
    ];
    topButtons = [
        {  
            className: "top-button",
            label: "\u2716", 
            type: "floating", 
            theme: "dark", 
            handleClick: this.handleClick, 
            icon: true, 
            ripple: true },  
    ];
    render(){
        return(
            <div className="fontScreen">
                <Button 
                    label= "switch"
                    handleClick= { this.handleClick }
                    wave
                    ripple     
                /> 
                <Dialog 
                    active= { this.state.active }
                    title="Title"
                    topButtons= { this.topButtons }
                    actionButtons= { this.actionButtons }
                    handleToggle= { this.handleClick } 
                > 
                    Some  content
                </Dialog>
            </div>)
    };
};

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
```
## Properties : 

     Name     |      Type     |   Default  |                                    Description                                                              |          
------------- | ------------- | ---------- | ----------------------------------------------------------------------------------------------------------- | 
 actionButtons|     Array     |     []     |  An array of object, that transfers properties to the <Button />  and shows buttons on the top of component.| 
 active       |     Boolean   |    false   |  If true, <Dialog /> component will be revealed.                                                            | 
 className    |     String    |     ""     |  Sets a class to give customized styles to the dialog.                                                      | 
 title        |     String    |     ""     |  Sets string to the Title part of component.                                                                |
 topButtons   |     Array     |     []     |  An array of object, that transfers properties to the <Button />  and shows buttons on the top of component.|                                                    |
 
