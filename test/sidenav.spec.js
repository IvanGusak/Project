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
  const wrapper = mount(<SideNav active={true} side={side} />);
  it("Component created ", () => {
      expect(wrapper).to.exist;
  })
  it("Prop 'active' must be declared and be a bool",() => {
    expect(wrapper.prop("active")).to.be.a("boolean");
  })
  it( "Prop 'side' must be declared and must be equal to 'string' type ",() => {
    expect(wrapper.prop("side")).to.be.a("string");
  })
  it("should render children when passed in", () => {
    const wrapper = shallow(
      <SideNav>
        <div className="unique" />
      </SideNav>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
  describe("Testing <SideNav /> component with shallow render",() => {
    const outClick = sinon.spy();
    const wrapper = shallow(<SideNav active={true} handleToggle={outClick} className={testClass}/>);
    it("after 'onClick' event  out of the SideNav borders, component should be hidden",() => {
      wrapper.childAt(0).simulate('click');
      expect(outClick.calledOnce).to.equal(true);
    })
    it("Checking if attr 'className' assigned to <div /> node",() => {
      expect(wrapper.contains(<div className={testClass} />)).to.equal(true);
    })
  })
});
