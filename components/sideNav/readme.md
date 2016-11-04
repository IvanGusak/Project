# \<SideNav /> component 
codepen example : http://codepen.io/TestPage/pen/rWByJL
Some example how to use component:

```javascript
import React from "react";
import ReactDOM from "react-dom";

import SideNav from "./components/sidenav/sidenav";

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            active: false,
        }
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick (){ 
        this.setState({ active: !this.state.active });
    };
    render(){
        return(
            <div>
                <button 
                    onClick={ this.handleClick } 
                    className={ this.state.active ? "button-hidden" : "button-active" }>
                        Toggle
                </button>
                <SideNav 
                    active={ this.state.active } 
                    side="left"  
                    handleToggle={ this.handleClick } 
                    className="custom">   
                        <h3>You can attach here any element you want.</h3>
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
    active    |     Boolean   |    false   |                     reveal(if true) or hide(false) sideBar                              | 
     side     |     String    |   "left"   |  It can be defined only like "left" or "right". It"s helps to choose side of the screen.| 
   className  |     String    |     ""     |              Sets a class to give customized styles to the sideBar.                     | 
  handleToggle|    function   |  () => {}  |             Callback function to be invoked when the outside area is clicked.           | 
