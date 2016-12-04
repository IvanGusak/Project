import "ignore-styles";
import React from "react";
import { mount, shallow } from "enzyme";
import chai, { expect } from "chai"; 
import chaiEnzyme  from "chai-enzyme";
import sinon from "sinon";

import Button from "../components/button/index";
import styles from "../components/button/button";

chai.use(chaiEnzyme());

describe("<Button /> component test suit",() => {
  const testFunc = () => {};
  const outClick = sinon.spy();
  
  it("works", () => {
    const wrapper = mount(<Button />)
    expect(wrapper).to.exist;
  });
  it("takes default classes when render ",() => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find("a")).to.have.attr("data-mini", "false");
    expect(wrapper.find("a")).to.have.attr("data-wave", "false");
    expect(wrapper.find("a")).to.have.attr("data-ripple", "false");
    expect(wrapper.find("a")).to.not.have.attr("disabled");

  })
  it("testing disabled state",() => {
    const wrapper = mount(<Button disabled handleClick= { outClick } />);
    wrapper.find("a").simulate("click");
    expect(outClick.calledOnce).to.equal(false);
  })
  it("testing href prop",() => {
    const wrapper = mount(<Button href="#" />);
    expect(wrapper).to.have.attr("href", "#")
  })
});
