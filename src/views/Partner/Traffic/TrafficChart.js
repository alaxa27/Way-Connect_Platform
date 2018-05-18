import React, { Component } from 'react';
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
} from 'reactstrap';
import { Line } from 'react-chartjs-2';
import _ from 'underscore';

const brandInfo = '#F15A24';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class TrafficChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        period: 'month',
        chartData: null,
        options: null
    };
    this.handleChangePeriod = this.handleChangePeriod.bind(this);
  }

  componentWillMount() {
      const { chartData, options } = this.props;
      this.setState({
          chartData: chartData,
          options: options
      });
  }

  handleChangePeriod(period) {
      if(this.state.period !== period) {
          this.setState({
              period: period
          });
          let newData = [];
          let newData1 = [];
          for (let i = 0; i <= 27; i++) {
              newData.push(random(1, 100));
          }
          for (let i = 0; i <= 27; i++) {
              newData1.push(random(1, 100));
          }
          let datasets = {...this.state.chartData.datasets};
          datasets[0].data = newData;
          datasets[1].data = newData1;
      }
  }

  render() {
    return (
        <Card>
            <CardBody>
                <Row>
                    <Col sm="5">
                        <CardTitle className="mb-0">Traffic</CardTitle>
                        <div className="small text-muted">November 2017</div>
                    </Col>
                    <Col sm="7" className="d-none d-sm-inline-block">
                        <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-3" aria-label="First group">
                                <Button color="outline-secondary" onClick={() => this.handleChangePeriod('month')} active={this.state.period === 'month'}>Month</Button>
                                <Button color="outline-secondary" onClick={() => this.handleChangePeriod('year')} active={this.state.period === 'year'}>Year</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </Row>
                <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                    <Line data={this.state.chartData} options={this.state.options} height={300}/>
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
    );
  }
}

export default TrafficChart;
