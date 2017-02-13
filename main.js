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
    text = (
        `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
        in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked 
        up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, discovered 
        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
        "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written 
        in 45 BC. This book is a treatise on the theory of ethics, 
        very popular during the Renaissance. The first line of Lorem Ipsum, 
        "Lorem ipsum dolor sit amet..", comes from 
        a line in section 1.10.32.`
    )
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
                    { this.text }
                </Dialog>
            </div>)
    };
};

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);


