import React, { Component } from 'react';
import TrafficChart from "../../Partner/Traffic/TrafficChart";
import Panel from "../../../components/Panel/Panel";
import {
    Row,
    Col,
    Progress,
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';
import TypicalClient from "../../../components/TypicalClient/TypicalClient";
import TrafficSales from "./TrafficSales/TrafficSales";

class AnalyticsCampaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [
              {
                  id: 1,
                  color: '#FC6600',
                  prop: 'Gender',
                  value: 'Male',
                  percentage: 10,
              },
              {
                  id: 2,
                  color: '#FC6600',
                  prop: 'Age',
                  value: 22,
                  percentage: 25
              },
              {
                  id: 3,
                  color: '#F9812A',
                  prop: 'Nationality',
                  value: 'Tunisian',
                  percentage: 50,
              },
              {
                  id: 4,
                  color: '#F9A602',
                  prop: 'Professional Status',
                  value: 'Salary',
                  percentage: 15,
              },
              {
                  id: 5,
                  color: '#FFBF00',
                  prop: 'Relationship Status',
                  value: 'Single',
                  percentage: 78,
              },
          ]
      };
  }
  render() {
    return (
      <div className="sub-page-wrapper animated fadeIn">
          <div style={{
              marginTop: 20
          }}>
              <Row>
                  <Panel index={1} value="12.5k" title="Visits"/>
                  <Panel index={2} value="200" title="Amount of Promotions"/>
                  <Panel index={3} value="3.2" title="Average of Revisit"/>
                  <Panel index={4} value="+12.5%" title="Visit Fluctuation"/>
              </Row>

              <Row>
                  <Col>
                      <TrafficChart />
                  </Col>
              </Row>

              <Row>
                  <Col md="6">
                      <TrafficSales />
                  </Col>
                  <Col md="6">
                      <TypicalClient
                        data={this.state.data}
                      />
                  </Col>
              </Row>
          </div>
      </div>
    )
  }
}
export default AnalyticsCampaign;
