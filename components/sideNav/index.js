import React from "react";
import ReactDOM from "react-dom";

import styles from "./sideNav.scss";

const propsTypes = {
  side: React.PropTypes.oneOf(["left", "right"]).isRequired,
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  handleToggle: React.PropTypes.func,
};
const defaultProps = {
  side: "left",
  active: false,
  handleToggle: () => {},
  className: "",
};

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            prePointX: 0,
            currPointX: 0,
            menuOffSetX: 0,
            translateX: undefined,
            timerId: 0,
            id: Math.random()*10,
            side: (this.props.side == "left") ? -1 : 1
        }
        this.touchStart = this.touchStart.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.translateTo = this.translateTo.bind(this);
        this.menuStyle = {
            WebkitTransition: "0.3s ease-out",
            WebkitTransform: "translateX(" + 100*this.state.side + "%)" 
        }
    }
    componentDidMount() {
        this.node = document.getElementById(this.state.id);
        this.menuRect = this.node.getBoundingClientRect();
        this.setState({
            menuOffSetX: this.menuRect["left"],
        })
        window.addEventListener("touchstart",this.touchStart);
        window.addEventListener("touchmove",this.touchMove);
        window.addEventListener("touchend",this.touchEnd);
        
    }   
    componentWillUnmount () {
        window.removeEventListener("touchstart",this.touchStart);
        window.removeEventListener("touchmove",this.touchMove);
        window.removeEventListener("touchend",this.touchEnd); 
    }
    
    componentWillReceiveProps(nextProps) {
        const translateTo = (nextProps.active != this.state.active) ? (nextProps.active) ? 0 : 100*this.state.side : "";
        this.setState({
            active: nextProps.active
        })
        this.translateTo("0.3s ease-out",translateTo);
    }
    translateTo(transition,translateTo) {
        this.menuStyle = {
            WebkitTransition: transition,
            WebkitTransform: "translateX(" + translateTo  + "%)"
        }     
    }
    handleMove() {
        const bodyRect = document.body.getBoundingClientRect();
        const width = this.menuRect.width;
        const limit = (this.props.side == "right") ? (bodyRect.right + 8) : width;
        const rightCond = (this.props.side == "right") ? 0 : -100;
        const leftCond = (this.props.side == "right") ? 100 : 0;
        const step = this.state.currPointX - this.state.prePointX;
        const dist = (this.state.menuOffSetX + step) - (limit - width);
        const translateTo = (dist/width*100).toFixed(1); 
        const translateLimit = (translateTo > rightCond && translateTo < leftCond);
        if((step > 0.5 || step < -0.5) && translateLimit) {
            this.translateTo("none",translateTo);    
            this.setState({
                translateX: +translateTo
            })     
        }
        this.setState({
            prePointX: this.state.currPointX,
        })
    }
    touchStart(e) {
        const touchObj = e.changedTouches[0];
        const prePointX = touchObj.clientX;
        const timerId = setInterval(this.handleMove,4); 
        const touchAreaWidth = (prePointX - this.menuRect[this.props.side])*(-1);
        if(touchAreaWidth < this.menuRect.width*2) {
            this.setState({
                prePointX: parseInt(prePointX),
                currPointX: parseInt(prePointX),
                timerId: timerId
            })
        }
    }
    touchMove(e) {
        const menu = document.getElementById(this.state.id);
        const menuRect = menu.getBoundingClientRect();
        const touchObj = e.changedTouches[0]; 
        const menuOffSetX = menuRect["left"];
        const side = (-1)*this.state.side;
        const touchAreaWidth = (this.state.currPointX - this.menuRect[this.props.side])*side;
        if(touchAreaWidth < this.menuRect.width*2) {
            this.setState({
                currPointX: parseInt(touchObj.clientX),
                menuOffSetX: parseInt(menuOffSetX)
            })
        }
    }
    touchEnd(e) {
        let translateTo = 0;
        clearInterval(this.state.timerId);
        if(this.state.translateX*this.state.side < 50 ) {
            setTimeout(this.translateTo("0.3s ease-out",translateTo),1);
            if(this.state.active == false) {
                setTimeout(this.props.handleToggle,3);
            } 
            this.setState({
                active: true,
                translateX: undefined
            })           
        }
        if(this.state.translateX*this.state.side >= 50 ) {
            translateTo = 100*this.state.side;
            setTimeout(this.translateTo("0.3s ease-out",translateTo),1);
            if(this.state.active == true) {
                setTimeout(this.props.handleToggle,3);
                
            }
            this.setState({
                active: false,
                translateX: undefined
            })
        }
    }
    render(){
        return(
        <div className= { ( this.props.active ) ? styles.opened : styles.closed } >
            <div 
                className= { styles.backSide } 
                onClick= { this.props.handleToggle }
            />
            <div 
                id= { this.state.id }
                style= { this.menuStyle }
                className= { `${ styles.sideMenu } ${ this.props.className }` } 
                data-side= { this.props.side }    
            >
                { this.props.children }
            </div>
        </div>
        )
    };
};

SideNav.propTypes = propsTypes;
SideNav.defaultProps = defaultProps;

export default SideNav;
