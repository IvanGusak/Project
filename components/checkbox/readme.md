# \<Checkbox /> component 

Some example how to use component:

```javascript
import React from "react";
import ReactDOM from "react-dom";

import Checkbox from "./components/checkbox/index";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
    }
    check = () => {
        this.setState({ 
            checked: !this.state.checked
         })
    }
    render(){
        return(
            <div>
                
                <Checkbox 
                    theme="light" 
                    checked= { true }
                />
                <span>Checked</span>
                <Checkbox 
                    theme="light" 
                    checked= { false }
                /> 
                <span>Unchecked</span>
                <Checkbox 
                    theme="light" 
                    checked= { true }
                    disabled
                /> 
                <span>Disabled checked</span>
                <Checkbox 
                    theme="light" 
                    checked= { false }
                    disabled
                /> 
                <span>Disabled checked</span>
                <Checkbox 
                    theme="light" 
                    handleClick= { this.check }  
                    checked= { this.state.checked }
                /> 
                <span>CheckBox</span>
            </div>
        )
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
 className    |     String    |  ""        |  Sets a class to give customized styles to the checkbox.                                | 
 checked      |     boolean   |  false     |  Checkbox state, can be true or false.                                                  | 
 disabled     |     boolean   |  false     |  If true, component will ignore all action on it.                                       | 
 handleClick  |     Function  |  () => {}  |  Callback function to be invoked when the <Button /> area is clicked.                   | 
 theme        |     String    |  "light"   |  Selects "light" or "dark" theme for dark or light background.                          |
 

