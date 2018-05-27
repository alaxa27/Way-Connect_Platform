import React from 'react';
import { render, mount, shallow } from 'enzyme';
import {Establishment} from "../../src/views/Establishment/Establishment";
import Panel from "../../src/components/Panel/Panel";
import PromotionsList from "../../src/components/Promotions/PromotionsList";
import Affluence from "../../src/components/Affluence/Affluence";
import TypicalClient from "../../src/components/TypicalClient/TypicalClient";
import ExportExcelButton from "../../src/views/Establishment/ExportExcel/ExportExcelButton";
import TrafficChart from "../../src/components/Traffic/TrafficChart";

describe('Establishment', () => {
    let trafficDefaults = null;
    let typicalCustomerDefaults = null;
    let affluenceDefaults = null;
    let monthlyDataDefaults = null;
    let match = null;
    const promotionsDefaults = [];
    const promotionsLimit = 10;
    const promotionsOffset = 0;
    const promotionsTotalCount = 0;
    const trafficPeriodChangeMock = jest.fn();
    const fetchEstablishmentPageDataMock = jest.fn();

    beforeAll(() => {
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
            period: "month",
            labels: ["M", "T", "W", "Th", "F", "Sa", "Su"],
            datasets: []
        };
        affluenceDefaults = {
            labels: [
                "00h", "01h", "02h", "03h", "04h", "05h", "06h", "07h", "08h", "09h", "10h", "11h",
                "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"
            ],
            datasets: []
        };
        monthlyDataDefaults = {
            visits: "0",
            visits_change: "0",
            customer_average_visits: "0",
            total_rewards: {
                value: "0",
                currency: ""
            }
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
            <Establishment
                traffic={trafficDefaults}
                typicalCustomer={typicalCustomerDefaults}
                affluence={affluenceDefaults}
                promotions={promotionsDefaults}
                promotionsLimit={promotionsLimit}
                promotionsOffset={promotionsOffset}
                promotionsTotalCount={promotionsTotalCount}
                monthlyData={monthlyDataDefaults}
                trafficPeriodChange={trafficPeriodChangeMock}
                fetchEstablishmentPageData={fetchEstablishmentPageDataMock}
                match={match}
            />
        );
    });

    it('Renders 4 Stats Panels', () => {
        expect(wrapper.find(Panel).length).toBe(4);
    });

    it('Renders Traffic Chart', () => {
        expect(wrapper.find(TrafficChart).length).toBe(1);
    });

    it('Renders Promotions', () => {
        expect(wrapper.find(PromotionsList).length).toBe(1);
    });

    it('Renders Affluence', () => {
        expect(wrapper.find(Affluence).length).toBe(1);
    });

    it('Renders Typical Customer', () => {
        expect(wrapper.find(TypicalClient).length).toBe(1);
    });

    it('Renders Export Excel button', () => {
        expect(wrapper.find(ExportExcelButton).length).toBe(1);
    });

    it('Dispatches fetch data action on mount', () => {
        expect(fetchEstablishmentPageDataMock).toHaveBeenCalled();
    });
});