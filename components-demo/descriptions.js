import React from "react";

import { Link } from "react-router";

import styles from "../styles/ui-styles.scss";

const MainDescription = {
    header: `simple example based on Button component`,
    code: ` 
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
);`,
}

const ButtonDescription = {
    header: <p>Some example how to use {`<Button />`} component:</p>,
    code: ` 
    import React from "react";
    import ReactDOM from "react-dom";

    import Button from "./components/button/index";

    class Main extends React.Component {
        render(){
            return(
                <div className="fontScreen"/>
                    <Button type="raised" theme="light"/> Button </Button/>
                    <Button type="raised" theme="dark"/> Button </Button/>
                    <Button href="##" theme="light" disabled /> Button </Button/>  
                    <Button type="flat" theme="light" /> Button </Button/>
                    <Button type="flat" theme="light" disabled /> Button </Button/>
                    <Button type="floating" theme="dark"/>
                        <i className="material-icons"/>add</i/>
                    </Button/>
                </div/>)
        };
    };

    ReactDOM.render(
        <Main />,
        document.getElementById("root")
    );`,
    props: 
        <table className={styles["table"]}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>      
                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>"raised"</td>
                    <td>Selects buttons with appearance as "raised" "flat" or "floating" style.</td>
                </tr> 
                <tr>
                    <td>href</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Creates a link for the button.</td>
                </tr>
                <tr>
                    <td>theme</td>
                    <td>String</td>
                    <td>"light"</td>
                    <td>Selects "light" or "dark" theme for dark or light background.</td>
                </tr>
                <tr>
                    <td>handleClick</td>
                    <td>Function </td>
                    <td>() => {}</td>
                    <td>Callback function to be invoked when the {`<Button />`} area is clicked.</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td> String </td>
                    <td> ""  </td>
                    <td>Set a button's name.</td>
                </tr>
                <tr>
                    <td>className</td>
                    <td> String  </td>
                    <td> ""   </td>
                    <td>Set a class to style the Component.</td>
                </tr>
                <tr>
                    <td>ripple </td>
                    <td> boolean </td>
                    <td>true  </td>
                    <td>If true, component will have a ripple effect on click.</td>
                </tr>
                <tr>
                    <td> mini </td>
                    <td> boolean </td>
                    <td>false </td>
                    <td>If true, component will have mini theme.</td>
                </tr>
                <tr>
                    <td> wave </td>
                    <td> boolean </td>
                    <td>true  </td>
                    <td>If true, component will have a wave effect on click. Not allowed for "floating" type.</td>
                </tr>
                <tr>
                    <td> disabled</td>
                    <td> boolean </td>
                    <td>false </td>
                    <td>If true, component will ignore all action on it.</td>
                </tr>
            </tbody>
        </table>
    }

const CheckBoxDescription = {
    header: <p>{`<Checkbox />`} component</p>,
    code: `
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
            check = () =/> {
                this.setState({ 
                    checked: !this.state.checked
                })
            }
            render(){
                return(
                    <div/>

                        <Checkbox 
                            theme="light" 
                            checked= { true }
                        />
                        <span/>Checked</span/>
                        <Checkbox 
                            theme="light" 
                            checked= { false }
                        /> 
                        <span/>Unchecked</span/>
                        <Checkbox 
                            theme="light" 
                            checked= { true }
                            disabled
                        /> 
                        <span/>Disabled checked</span/>
                        <Checkbox 
                            theme="light" 
                            checked= { false }
                            disabled
                        /> 
                        <span/>Disabled checked</span/>
                        <Checkbox 
                            theme="light" 
                            handleClick= { this.check }  
                            checked= { this.state.checked }
                        /> 
                        <span/>CheckBox</span/>
                    </div/>
                )
            };
        };

        ReactDOM.render(
            <Main />,
            document.getElementById("root")
        );`,
    props:
        <table className={styles["table"]}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>       
                <tr>
                    <td>className</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Sets a class to give customized styles to the checkbox.</td>
                </tr> 
                <tr>
                    <td>checked</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Checkbox state, can be true or false.</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>If true, component will ignore all action on it.</td>
                </tr>
                <tr>
                    <td>handleClick</td>
                    <td>Function</td>
                    <td>() => {}</td>
                    <td>Callback function to be invoked when the {`<Button />`} area is clicked.</td>
                </tr>
                <tr>
                    <td>theme</td>
                    <td>String</td>
                    <td>"light"</td>
                    <td>Selects "light" or "dark" theme for dark or light background.</td>
                </tr>
            </tbody>
        </table>
}
const DialogDescription = {
    header: <p>{`<Dialog />`} component:</p>,
    code: 
        `import React from "react";
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

            handleClick=()=/> {
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
                    <div className="fontScreen"/>
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
                        /> 
                            Some  content
                        </Dialog/>
                    </div/>)
            };
        };

        ReactDOM.render(
            <Main />,
            document.getElementById("root")
        );`,
    props: 
        <table className={styles["table"]}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>        
                <tr>
                    <td>actionButtons</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td> An array of object, that transfers properties to the {`<Button />`}  and shows buttons on the top of component.</td>
                </tr>
                <tr>
                    <td>active</td>
                    <td>Boolean  </td>
                    <td>  false  </td>
                    <td>If true, {`<Dialog />`} component will be revealed. </td>
                </tr>
                <tr>
                    <td>className</td>
                    <td>String   </td>
                    <td>   ""    </td>
                    <td>Sets a class to give customized styles to the dialog.</td>
                </tr> 
                <tr>
                    <td>title       </td>
                    <td>   String   </td>
                    <td>   ""    </td>
                    <td>Sets string to the Title part of component.</td>
                </tr> 
                <tr>
                    <td>topButtons  </td>
                    <td>   Array    </td>
                    <td>   []    </td>
                    <td>An array of object, that transfers properties to the {`<Button />`}  and shows buttons on the top of component.</td>
                </tr>                           
                <tr>
                    <td>handleToggle</td>
                    <td>   function </td>
                    <td> () => {}</td>
                    <td>Callback function to be invoked when the overlay area is clicked.</td>
                </tr>
            </tbody>
        </table>
}

const SideNavDescription = {
    header: <p>{`<SideNav />`} component</p>,
    code: 
        `import React from "react";
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
        );`,
    props: 
        <table className={styles["table"]}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th> Type</th>
                    <th> Default</th>
                    <th> Description</th>
                </tr>          
                <tr>
                    <td>active</td>
                    <td>Boolean  </td>
                    <td>   false  </td>
                    <td>reveal(if true) or hide(false) SideNar.</td>
                </tr>
                <tr>
                    <td>side    </td>
                    <td>    String   </td>
                    <td>  "left"  </td>
                    <td> It can be defined only like "left" or "right". It"s helps to choose side of the screen.</td>
                </tr> 
                <tr>
                    <td>className </td>
                    <td>    String   </td>
                    <td>    ""    </td>
                    <td> Sets a class to give customized styles to the sideBar.</td>
                </tr>
                <tr>
                    <td>handleToggle</td>
                    <td>   Function </td>
                    <td> () => {} </td>
                    <td> Callback function to be invoked when the outside area is clicked.</td>
                </tr>
            </tbody>
        </table>
}

export { 
    ButtonDescription, 
    CheckBoxDescription, 
    SideNavDescription, 
    DialogDescription,
    MainDescription
  }