import React from 'react';
import { render, mount, shallow } from 'enzyme';
import ConfigCampaign from "../../src/views/Campaigns/ConfigCampaign/ConfigCampaign";
import {
    Nav,
    NavItem,
} from "reactstrap";
import ConfigVideo from "../../src/views/Campaigns/ConfigCampaign/ConfigVideo";
import ConfigFormulary from "../../src/views/Campaigns/ConfigCampaign/ConfigFormulary";

describe('Campaign Config', () => {
    let match = null;

    beforeAll(() => {
        match = {
            params: {
                id: "1"
            }
        };
    });

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(
            <ConfigCampaign match={match} />
        );
    });

    it('Renders Tabs', () => {
        expect(wrapper.find(Nav).length).toBe(1);
    });

    it('Renders 2 Tab items', () => {
        expect(wrapper.find(NavItem).length).toBe(2);
    });

    it('Makes first Tab item active by default', () => {
        expect(wrapper.state('activeTab')).toEqual('1');
    });

    it('Renders Config Video component', () => {
        expect(wrapper.find(ConfigVideo).length).toBe(1);
    });

    it('Renders Config Formulary component', () => {
        expect(wrapper.find(ConfigFormulary).length).toBe(1);
    });

    it('Sets active tab properly when toggle function is invoked', () => {
        wrapper.instance().toggle(2);
        expect(wrapper.state('activeTab')).toEqual(2);
    });

    // TODO - to fix, test fails
    // it('Click on last NavItem toggles toggle method', () => {
    //     const toggle = jest.spyOn(wrapper.instance(), 'toggle');
    //     wrapper.find(NavItem).last().simulate('click');
    //     expect(toggle).toHaveBeenCalled();
    // });
});