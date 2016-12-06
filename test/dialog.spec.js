import React from "react";
import ReactDOM from "react-dom";
import { mount, shallow } from "enzyme";
import chai, { expect } from "chai"; 
import chaiEnzyme  from "chai-enzyme";
import sinon from "sinon";
import ReactTestUtils from "react-addons-test-utils"; 

import Button from "../components/button/index";
import Dialog from "../components/dialog/index";
import styles from "../components/dialog/dialog";

chai.use(chaiEnzyme());

describe("<Dialog /> component test suit",() => {
  const outClick = sinon.spy();
  const actionButtons = [
        { 
            className: "test",
            label: "Cancel", type: "flat", 
            wave: false 
        }
  ];
  let state = false;
  
  it("works", () => {
    const wrapper = mount(<Dialog />)
    expect(wrapper).to.exist;
  });
  it("<Dialog /> Component is checked for correct render inside",() => {
    const wrapper = mount(<Dialog actionButtons= { actionButtons } />)
    expect(wrapper.find("a")).to.have.className("test");
  })
  it("Component was checked for correct callBack function work ",() => {
    const outClick = sinon.spy();   
    const wrapper = mount(<Dialog active= { state } handleToggle={ outClick } />);
    const node = wrapper.find("div").at(1);
    node.simulate("click");
    expect(outClick.calledOnce).to.be.equal(true); 
  })
  it("testing  props",() => {
    const child = <p></p>;
    const wrapper = mount(
        <Dialog className= "test" title= "title">
          { child }
        </Dialog>
    );

    expect(wrapper).to.have.props({ active: false });
    expect(wrapper).to.have.props({ className: "test" });
    expect(wrapper).to.have.props({ children: child });
    expect(wrapper).to.have.props({ title: "title" });
  })
});