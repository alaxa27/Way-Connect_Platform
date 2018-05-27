import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Panel from "../src/components/Panel/Panel";
import CountUp from "react-countup"

describe('Panel', () => {
    it('Renders stats panel', () => {
        const wrapper = shallow(<Panel />);
        expect(wrapper.find(".stats-panel").length).toBe(1);
    });

    it('Renders stats panel with given index', () => {
        const wrapper = shallow(<Panel index={100} />);
        expect(wrapper.find(".stats-panel--100").length).toBe(1);
    });

    it('Renders with given title', () => {
        const wrapper = shallow(<Panel title={"Example title"} />);
        expect(wrapper.find(".title").html()).toEqual("<span class=\"title\">Example title</span>");
    });

    it('Renders CountUp component', () => {
        const wrapper = shallow(<Panel />);
        expect(wrapper.find(CountUp).length).toBe(1);
    });

    it('Renders CountUp with given value', () => {
        const value = 100;
        const wrapper = shallow(<Panel value={value} />);
        expect(wrapper.find(CountUp).props().end).toBe(100);
    });

    it('Renders with given currency', () => {
        const wrapper = shallow(<Panel currency={"USD"} />);
        expect(wrapper.find(".currency").html()).toEqual("<span class=\"currency\"> USD</span>");
    });
});