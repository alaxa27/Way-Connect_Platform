import React, { Component } from 'react';
import {
    Card,
    CardBody,
} from 'reactstrap';
import {Bar, Line} from 'react-chartjs-2';

class DashboardPanel extends Component {
  render() {
    const { color, displayData, chartData, options, type } = this.props;
    return (
        <Card className={"text-white dashboard-plot " + color}>
            <CardBody className="pb-0">
                <h4 className="mb-0">{displayData.value}</h4>
                <p>{displayData.title}</p>
            </CardBody>
            <div className="chart-wrapper px-3" style={{height:'120px'}}>
                {type === 'line' ?
                    <Line data={chartData} options={options} height={120}/>
                : type === 'bar' ?
                    <Bar data={chartData} options={options} height={120}/>
                :
                    null
                }

            </div>
        </Card>
    )
  }
}

export default DashboardPanel;