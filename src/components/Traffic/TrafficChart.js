import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Progress,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Button,
    ButtonToolbar,
    ButtonGroup,
} from "reactstrap";
import { Line } from "react-chartjs-2";
import _ from "underscore";
import ReduxBlockUi from "react-block-ui/redux";

class TrafficChart extends Component {
  static propTypes = {
      chartData: PropTypes.object,
      defaultPeriod: PropTypes.string,
      options: PropTypes.object,
      title: PropTypes.string,
      traffic: PropTypes.object,
      trafficPeriodChange: PropTypes.func
  };
  
  constructor(props) {
    super(props);
  }
  render() {
    const { traffic, options, title, trafficPeriodChange } = this.props;
    return (
      <ReduxBlockUi tag="div" block="TRAFFIC" unblock={["TRAFFIC_FULFILLED", "TRAFFIC_REJECTED"]}>
        <Card>
          <CardBody>
            <Row>
              <Col sm="5">
                <CardTitle className="mb-0">{title}</CardTitle>
                <div className="small text-muted">November 2017</div>
              </Col>
              {trafficPeriodChange ?
                <Col sm="7" className="d-none d-sm-inline-block">
                  <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-3" aria-label="First group">
                      <Button color="outline-secondary" onClick={() => trafficPeriodChange("month")} active={traffic.period === "month"}>Month</Button>
                      <Button color="outline-secondary" onClick={() => trafficPeriodChange("year")} active={traffic.period === "year"}>Year</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              :
                null
              }
            </Row>
            <div className="chart-wrapper" style={{height: 300 + "px", marginTop: 40 + "px"}}>
              <Line data={traffic} options={options} height={300}/>
            </div>
          </CardBody>
          <CardFooter>
            <ul className="d-flex justify-content-center main-chart-legend">
              {_.map(traffic.datasets, item => {
                return (
                  <li className="main-chart-legend__item" key={item.label}>
                    <div className="text-muted">{item.label}</div>
                    <Progress className="progress-xs mt-2" color={item.colorName} value="100"/>
                  </li>
                );
              })}
            </ul>
          </CardFooter>
        </Card>
      </ReduxBlockUi>
    );
  }
}



export default TrafficChart;
