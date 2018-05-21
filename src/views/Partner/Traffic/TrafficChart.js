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

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomizeData() {
    let newData = [];
    for (let i = 0; i <= 27; i++) {
        newData.push(random(1, 100));
    }
    return newData;
}

class TrafficChart extends Component {
  static propTypes = {
    chartData: PropTypes.object,
    defaultPeriod: PropTypes.string,
    options: PropTypes.object,
    title: PropTypes.string
  }

  constructor(props) {
    super(props);

    const { chartData, defaultPeriod } = this.props;
    this.state = {
        period: defaultPeriod,
        chartData: chartData,
    };
    this.handleChangePeriod = this.handleChangePeriod.bind(this);
  }

  handleChangePeriod(period) {
      if(this.state.period !== period) {
          this.setState({
              period: period
          });
          let datasets = {...this.state.chartData.datasets};
          _.each(datasets, item => {
              item.data = randomizeData();
          });
      }
  }

  render() {
    const { options, title } = this.props;
    return (
      <ReduxBlockUi tag="div" block="TRAFFIC" unblock={["TRAFFIC_FULFILLED", "TRAFFIC_REJECTED"]}>
        <Card>
          <CardBody>
            <Row>
              <Col sm="5">
                <CardTitle className="mb-0">{title}</CardTitle>
                <div className="small text-muted">November 2017</div>
              </Col>
              <Col sm="7" className="d-none d-sm-inline-block">
                <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                  <ButtonGroup className="mr-3" aria-label="First group">
                    <Button color="outline-secondary" onClick={() => this.handleChangePeriod("month")} active={this.state.period === "month"}>Month</Button>
                    <Button color="outline-secondary" onClick={() => this.handleChangePeriod("year")} active={this.state.period === "year"}>Year</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Col>
            </Row>
            <div className="chart-wrapper" style={{height: 300 + "px", marginTop: 40 + "px"}}>
              <Line data={this.state.chartData} options={options} height={300}/>
            </div>
          </CardBody>
          <CardFooter>
            <ul className="d-flex justify-content-center main-chart-legend">
              {_.map(this.state.chartData.datasets, item => {
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
