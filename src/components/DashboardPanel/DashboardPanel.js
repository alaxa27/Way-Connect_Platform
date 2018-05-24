import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardBody,
} from "reactstrap";
import CountUp from "react-countup";
import {Bar, Line} from "react-chartjs-2";

class DashboardPanel extends Component {
  static propTypes = {
    color: PropTypes.string,
    displayData: PropTypes.object,
    chartData: PropTypes.object,
    options: PropTypes.object,
    type: PropTypes.string
  }
  render() {
    const { color, displayData, chartData, options, type } = this.props;
    return (
      <Card className="text-white dashboard-plot" style={{backgroundColor: color}}>
        <CardBody className="pb-0">
          <h1 className="mb-0">
            <CountUp start={0} end={displayData.value} duration={3} />
          </h1>
          <p>{displayData.title}</p>
        </CardBody>
        <div className="chart-wrapper px-3" style={{height:"120px"}}>
          {type === "line" ?
            <Line data={chartData} options={options} height={120}/>
                : type === "bar" ?
                  <Bar data={chartData} options={options} height={120}/>
                :
                    null
                }
        </div>
      </Card>
    );
  }
}

export default DashboardPanel;
