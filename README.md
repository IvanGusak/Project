# **React js** components examples  

### Inspired by the React.js tutorials, these examples shows basic ways of usage React.
## Content with description
*  Button component   => [Button](https://github.com/IvanGusak/Project/tree/master/components/button)
*  SideNav component => [SideNav](https://github.com/IvanGusak/Project/tree/master/components/sideNav)
*  Checkbox component => [Checkbox](https://github.com/IvanGusak/Project/tree/master/components/checkbox)
*  Dialog component => [Dialog](https://github.com/IvanGusak/Project/tree/master/components/dialog)

## Usage
### simple example based on Button component 
```javascript
import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/button/index";

class Main extends React.Component {
    render(){
        return(
                <Button 
                    label= "Menu"
                    wave
                    ripple 
                    theme="dark"   
                /> 
        )        
    };
};

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);

```
