import React from 'react';
import { render, mount, shallow } from 'enzyme';
import { AnalyticsCampaign } from "../../src/views/Campaigns/AnalyticsCampaign/AnalyticsCampaign";
import Panel from "../../src/components/Panel/Panel";
import TrafficChart from "../../src/components/Traffic/TrafficChart";
import TrafficSales from "../../src/views/Campaigns/AnalyticsCampaign/TrafficSales/TrafficSales";
import TypicalClient from "../../src/components/TypicalClient/TypicalClient";

describe('Campaign Analytics', () => {
    let trafficDefaults = null;
    let keyDataDefaults = null;
    let typicalCustomerDefaults = null;
    let match = null;
    const mockFn = jest.fn();

    beforeAll(() => {
        keyDataDefaults = {
            views: "0",
            customers: "0",
            clicks: "0",
            expense: {
                value: "0",
                currency: ""
            }
        };
        typicalCustomerDefaults = {
            age: 0,
            country: {
                label: "Unknown",
                value: 0
            },
            gender: {
                label: "Unknown",
                value: 0
            },
            relationship_status: {
                label: "Unknown",
                value: 0
            },
            work_status: {
                label: "Unknown",
                value: 0
            },
        };
        trafficDefaults = {
            labels: ["M", "T", "W", "Th", "F", "Sa", "Su"],
            datasets: [
                {
                    label: "Views",
                    backgroundColor: "transparent",
                    borderColor: "#F15A24",
                    colorName: "primary",
                    pointHoverBackgroundColor: "#fff",
                    borderWidth: 3,
                    data: [],
                },
                {
                    label: "Clicks",
                    backgroundColor: "transparent",
                    borderColor: "#20a8d8",
                    colorName: "info",
                    pointHoverBackgroundColor: "#fff",
                    borderWidth: 3,
                    data: [],
                },
            ]
        };
        match = {
            params: {
                id: "1"
            }
        };
    });

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(
            <AnalyticsCampaign
                traffic={trafficDefaults}
                keyData={keyDataDefaults}
                typicalCustomer={typicalCustomerDefaults}
                match={match}
                fetchCampaignAnalyticsPageData={mockFn}
            />
        );
    });

    it('Renders 4 Stats Panels', () => {
        expect(wrapper.find(Panel).length).toBe(4);
    });

    it('Renders Traffic Chart', () => {
        expect(wrapper.find(TrafficChart).length).toBe(1);
    });

    it('Renders Traffic Sales', () => {
        expect(wrapper.find(TrafficSales).length).toBe(1);
    });

    it('Renders Typical Customer', () => {
        expect(wrapper.find(TypicalClient).length).toBe(1);
    });

    it('Dispatches fetch data action on mount', () => {
        expect(mockFn).toHaveBeenCalled();
    });
});