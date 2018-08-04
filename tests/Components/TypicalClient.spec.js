import React from "react";
import {render, mount, shallow} from "enzyme";
import TypicalClient from "../../src/components/TypicalClient/TypicalClient";
import TypicalClientImage from "../../src/components/TypicalClient/TypicalClientImage";
import TypicalClientList from "../../src/components/TypicalClient/TypicalClientList";

describe("Typical Client", () => {
  it("Renders Typical Client Image", () => {
    const wrapper = shallow(<TypicalClient/>);
    expect(wrapper.find(TypicalClientImage).length).toBe(1);
  });

  // it("Renders Typical Client Image with constant width", () => {
  //   const wrapper = shallow(<TypicalClient/>);
  //   expect(wrapper.find(TypicalClientImage).getDOMNode()).to.have.property('className');
  // });
  //
  // it("Renders Typical Client Image with constant height", () => {
  //   const wrapper = shallow(<TypicalClient/>);
  //   expect(wrapper.find(TypicalClientImage).get(0).style).to.have.property("height", "130");
  // });

  it("Renders Typical Client Image with constant src", () => {
    const wrapper = shallow(<TypicalClient/>);
    expect(wrapper.find(TypicalClientImage).props().src).toBe("img/user-portrait.png");
  });

  it("Renders Typical Client List", () => {
    const wrapper = shallow(<TypicalClient/>);
    expect(wrapper.find(TypicalClientList).length).toBe(1);
  });

  it("Passes data to Typical Client List", () => {
    const data = {
      data: true
    };
    const wrapper = shallow(<TypicalClient data={data}/>);
    expect(wrapper.find(TypicalClientList).props().data).toEqual(data);
  });
});
