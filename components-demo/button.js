import React from "react";

import { Button } from "../components";

class ButtonPage extends React.Component {
    render(){
        return(
            <div>
                <Button theme="light" type="raised"  wave ripple> Button </Button>
                <Button type="raised" theme="dark" wave ripple> Button </Button>
                <Button theme="light" disabled wave ripple> Button </Button>  
                <Button type="flat" theme="light" wave ripple> Button </Button>
                <Button type="flat" theme="light" disabled wave ripple> Button </Button>
                <Button href="##" type="floating"  theme="light" ripple>
                    <i className="material-icons">add</i>
                </Button>
            </div>)
    };
};

export { ButtonPage };