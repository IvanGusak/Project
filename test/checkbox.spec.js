import React from "react";
import { mount, shallow } from "enzyme";
import chai, { expect } from "chai"; 
import chaiEnzyme  from "chai-enzyme";
import sinon from "sinon";

import Checkbox from "../components/checkbox/index";
import styles from "../components/checkbox/checkbox";

chai.use(chaiEnzyme());

describe("<Checkbox /> component test suit",() => {
  const testFunc = () => {};
  const outClick = sinon.spy();
  
  it("works", () => {
    const wrapper = mount(<Checkbox />)
    expect(wrapper).to.exist;
  });
  it("takes default props when render ",() => {
    const wrapper = shallow(<Checkbox />)
    expect(wrapper.find("div")).to.have.attr("data-checked", "false");
    expect(wrapper.find("div")).to.not.have.attr("theme", "light");

  })
  it("Callback testing",() => {
    const wrapper = mount(<Checkbox handleClick= { outClick } />);
    wrapper.find("div").simulate("click");
    expect(outClick.calledOnce).to.equal(true); 
  })
  it("testing disabled prop",() => {
    const wrapper = mount(<Checkbox disabled handleClick= { outClick } />);
    wrapper.find("div").simulate("click");
    expect(outClick.calledOnce).to.equal(false);
  })
  it("className testing",() => {
    const wrapper = mount(<Checkbox className="test" />);
    expect(wrapper.find("div")).to.have.className("test")
  })
});