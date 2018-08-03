import React, {Component} from "react";
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
  ButtonGroup
} from "reactstrap";
import {Line} from "react-chartjs-2";
import _ from "underscore";
import ReduxBlockUi from "react-block-ui/redux";
import {translate} from "react-i18next";

class TrafficChart extends Component {
  constructor(props) {
    super(props);
  }
  setMaxHeight(value) {
    const { options } = this.props;
    _.first(options.scales.yAxes).ticks.max = value;
  }
  arrayMax(numArray) {
    return Math.max.apply(null, numArray);
  }
  render() {
    const {traffic, options, title, trafficPeriodChange, t} = this.props;
    if(_.first(traffic.datasets)) {
      this.setMaxHeight(this.arrayMax(_.first(traffic.datasets).data));
    }
    const height = 300;
    return (<ReduxBlockUi tag="div" block="TRAFFIC" unblock={["TRAFFIC_FULFILLED", "TRAFFIC_REJECTED"]}>
      <Card>
        <CardBody>
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">{title}</CardTitle>
            </Col>
            {
              trafficPeriodChange
                ? <Col sm="7" className="d-none d-sm-inline-block">
                  <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-3" aria-label="First group">
                      <Button color="outline-secondary" onClick={() => trafficPeriodChange("month")} active={traffic.period === "month"}>{t("general.month")}</Button>
                      <Button color="outline-secondary" onClick={() => trafficPeriodChange("year")} active={traffic.period === "year"}>{t("general.year")}</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
                : null
            }
          </Row>
        <div className="traffic__chart" style={{
              height: height + "px"
            }}>
            <Line data={traffic} options={options} height={height}/>
          </div>
        </CardBody>
        <CardFooter>
          <ul className="d-flex justify-content-center main-chart-legend">
            {
              _.map(traffic.datasets, item => {
                return (<li className="main-chart-legend__item" key={item.label}>
                  <div className="text-muted">{item.label}</div>
                  <Progress className="progress-xs mt-2" color={item.colorName} value="100"/>
                </li>);
              })
            }
          </ul>
        </CardFooter>
      </Card>
    </ReduxBlockUi>);
  }
}

TrafficChart.propTypes = {
  chartData: PropTypes.object,
  defaultPeriod: PropTypes.string,
  options: PropTypes.object,
  title: PropTypes.string,
  traffic: PropTypes.object,
  trafficPeriodChange: PropTypes.func,
  t: PropTypes.func,
};

export default translate("translations")(TrafficChart);
