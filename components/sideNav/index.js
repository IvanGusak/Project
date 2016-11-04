import React from "react";

import styles from "./sideNav.scss";

const propsTypes = {
  side: React.PropTypes.oneOf(["left", "right"]).isRequired,
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  handleToggle: React.PropTypes.func
};
const defaultProps = {
  side: "left",
  active: false,
  callback: () => {},
  className: ""
};

class SideNav extends React.Component {
  constructor(...arg){
    super(...arg);
  };
  render(){
    return(
      <div className={ this.props.active ? styles.active : styles.hidden }>
        <div 
          className={ styles.backSide } 
          onClick={ this.props.handleToggle }
        />
        <div 
          className={ styles.sideMenu } 
          data-side={ this.props.side }>
            <div className={ this.props.className }>
              { this.props.children }
            </div>
        </div>
      </div>
    )
  };
};

SideNav.propTypes = propsTypes;
SideNav.defaultProps = defaultProps;

export default SideNav;
