import React from "react";
import { mount, shallow } from "enzyme";
import chai, { expect } from "chai"; 
import chaiEnzyme from "chai-enzyme";
import equalJSX from "chai-equal-jsx";
import sinon from "sinon";
import { ReactTestUtils, createRenderer } from "react-addons-test-utils";

import Button from "../components/button/index";
import styles from "../components/button/button.scss";

import "ignore-styles";

chai.use(equalJSX);
chai.use(chaiEnzyme());

describe("<Button /> component test suit",() => {
  const renderer = createRenderer();
  const testFunc = () => {};
  const outClick = sinon.spy();
  
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
