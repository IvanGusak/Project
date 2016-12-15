# \<Button /> component 

Some example how to use component:

```javascript
import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/button/index";

class Main extends React.Component {
    render(){
        return(
            <div className="fontScreen">
                <Button type="raised" theme="light"> Button </Button>
                <Button type="raised" theme="dark"> Button </Button>
                <Button href="##" theme="light" disabled > Button </Button>  
                <Button type="flat" theme="light" > Button </Button>
                <Button type="flat" theme="light" disabled > Button </Button>
                <Button type="floating" theme="dark">
                    <i className="material-icons">add</i>
                </Button>
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
 type         |     String    |  "raised"  |  Selects buttons with appearance as "raised" "flat" or "floating" style.                | 
 href         |     String    |     ""     |  Creates a link for the button.                                                         | 
 theme        |     String    |  "light"   |  Selects "light" or "dark" theme for dark or light background.                          | 
 handleClick  |    Function   |  () => {}  |  Callback function to be invoked when the <Button /> area is clicked.                   | 
 label        |     String    |     ""     |  Set a button's name.                                                                   |
 className    |     String    |     ""     |  Set a class to style the Component.                                                    |
 ripple       |     boolean   |    true    |  If true, component will have a ripple effect on click.                                 |
 mini         |     boolean   |    false   |  If true, component will have mini theme.                                               |
 wave         |     boolean   |    true    |  If true, component will have a wave effect on click. Not allowed for "floating" type.  |
 disabled     |     boolean   |    false   |  If true, component will ignore all action on it.                                       |
