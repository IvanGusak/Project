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
  
  const expectedElement = (theme,type,disabled,onClick,ripple,wave,className = "") => 
      <a 
        href= { undefined }
        className= { `${ styles[theme] } ${ styles[type] }` }
        disabled= { disabled }
        data-ripple= { true }
        data-wave= { true }
        onClick= { onClick } 
      >
        <div className = { `${ className } ${ styles.fullScreen }` } >
          { undefined }
        </div>
      </a>;
  it("works", () => {
    renderer.render(<Button />);
    let actualElement = renderer.getRenderOutput();
    expect(actualElement).to.equalJSX(expectedElement("light","raised",false,testFunc,true,true));
  });
  it("takes default classes when render ",() => {
    renderer.render(<Button />);
    let actualElement = renderer.getRenderOutput();
    expect(actualElement).to.equalJSX(expectedElement("light","raised",false,testFunc,true,true));
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
