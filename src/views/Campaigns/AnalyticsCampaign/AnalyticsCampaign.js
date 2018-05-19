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

const brandPrimary = '#20a8d8';
const brandInfo = '#F15A24';

const trafficChartOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false,
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
                max: 250
            }
        }]
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        }
    }
};

function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
}

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
          ],
          trafficChartData: {
              labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F',
                  'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F',
                  'S', 'S'],
              datasets: [
                  {
                      label: 'Views',
                      backgroundColor: convertHex(brandInfo, 10),
                      borderColor: brandInfo,
                      colorName: 'info',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 3,
                      data: [10, 123, 11, 123, 32, 55, 66, 32, 12, 1, 1, 11, 22, 55, 14, 56, 66, 56, 44, 21, 22, 12, 12, 1, 1, 1, 88, 105]
                  },
                  {
                      label: 'Bounce Rate',
                      backgroundColor: convertHex(brandPrimary, 10),
                      borderColor: brandPrimary,
                      colorName: 'primary',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 3,
                      data: [55, 44, 1, 2, 3, 1, 1, 1, 1, 1, 1, 22, 22, 65, 77, 87, 200, 11, 44, 21, 22, 12, 12, 1, 1, 1, 88, 105]
                  },
              ],
          }
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
                      <TrafficChart
                        chartData={this.state.trafficChartData}
                        options={trafficChartOptions}
                        title="Traffic"
                        defaultPeriod="year"
                      />
                  </Col>
              </Row>

              <Row>
                  <Col xs="12" lg="6">
                      <TrafficSales />
                  </Col>
                  <Col xs="12" lg="6">
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
