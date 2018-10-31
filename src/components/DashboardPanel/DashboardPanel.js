import React, {Component} from "react";
import PropTypes from "prop-types";
import {Card, CardBody} from "reactstrap";
import CountUp from "react-countup";
import {Bar, Line} from "react-chartjs-2";

import NumberUp from "../NumberUp";

const chartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }

      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: 0,
          max: 1
        }
      }
    ]
  }
};

const chartData = {
  labels: [
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  datasets: []
};

const datasetsData1 = {
  backgroundColor: "transparent",
  borderColor: "#fff"
};

const datasetsData2 = {
  backgroundColor: "rgba(255,255,255,.3)",
  borderColor: "transparent"
};

class DashboardPanel extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    plot: PropTypes.array.isRequired,
    type: PropTypes.string
  }

  static defaultProps = {
    type: "line1"
  }

  render() {
    const {
      id,
      title,
      value,
      plot,
      type
    } = this.props;

    const options = {
      ...chartOpts
    };

    const datasetsData = (
      type === "line1"
      ? datasetsData1
      : datasetsData2);

    const datasets = {
      ...datasetsData,
      data: plot
    };

    const plotData = {
      ...chartData,
      datasets: [
        datasets
      ]
    };

    return (<Card className={"text-white dashboard-panel dashboard-panel--" + id}>
      <CardBody className="pb-0">
        <h1 className="mb-0">
          <NumberUp value={value} />
        </h1>
        <p>{title}</p>
      </CardBody>
      <div className="dashboard-panel__chart px-3">
        {
          type === "bar"
            ? <Bar data={plotData} options={options} height={120}/>
            : <Line data={plotData} options={options} height={120}/>
        }
      </div>
    </Card>);
  }
}

export default DashboardPanel;
