# \<SideNav /> component 

Some example how to use component:

```javascript
import React from "react";
import ReactDOM from "react-dom";

import SideNav from "./components/sidenav/index";
import Button from "./components/button/index";

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            active: false
        }
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick (){ 
        this.setState({ active: !this.state.active });
    };
    render(){
        return(
            <div>
                <Button 
                    label= "Toggle"
                    handleClick={ this.handleClick } 
                    ripple
                    wave
                    theme="dark"
                />
                <SideNav 
                    active= { this.state.active } 
                    side="left"  
                    handleToggle= { this.handleClick } 
                >  
                        <h3>Your elements.</h3>
                </SideNav>           
            </div>)
    };
};

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
```


## Properties : 

     Name     |      Type     |   Default  |                                    Description                                          |          
------------- | ------------- | ---------- | ----------------------------------------------------------------------------------------| 
    active    |     Boolean   |    false   | reveal(if true) or hide(false) sideBar                                                  | 
     side     |     String    |   "left"   |  It can be defined only like "left" or "right". It"s helps to choose side of the screen.| 
   className  |     String    |     ""     |  Sets a class to give customized styles to the sideBar.                                 | 
  handleToggle|     Function  |  () => {}  |  Callback function to be invoked when the outside area is clicked.                      |
  
