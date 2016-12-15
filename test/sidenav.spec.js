import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { shallow, mount} from "enzyme";
import sinon from "sinon";
import "ignore-styles";

import SideNav from "../components/sidenav/index";

describe("<SideNav /> component test suit",() => {
  const side = "right";
  const testClass = "custom";
  const outClick = sinon.spy();
  let wrapper = shallow(<SideNav active={true} side={side} />);
  it("Component created ", () => {
      expect(wrapper).to.exist;
  })
  it("should render children when passed in", () => {
    const wrapper = shallow(
      <SideNav>
        <div className="unique" />
      </SideNav>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
  it("Checking callback function",() => {
    wrapper = shallow(<SideNav active={true} handleToggle={outClick} className={testClass}/>);
    wrapper.childAt(0).simulate('click');
    expect(outClick.calledOnce).to.equal(true);
  })
  it("Checking if attr 'className' assigned to <div /> node",() => {
    expect(wrapper.contains(<div className={testClass} />)).to.equal(true);
  }) 
});
