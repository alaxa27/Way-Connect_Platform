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

// convert Hex to RGBA
function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let elements = 27;
let data = [];

for (let i = 0; i <= elements; i++) {
    data.push(random(50, 200));
}

const brandSuccess = '#F7931E';
const brandInfo = '#F15A24';

const mainChartOpts = {
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

class TrafficChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        period: 'month',
        chart: null,
        chartOptions: null
    };
    this.handleChangePeriod = this.handleChangePeriod.bind(this);
  }

  componentWillMount() {
      this.setState({
          chart: {
              labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F',
                  'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F',
                  'S', 'S'],
              datasets: [
                  {
                      label: 'My First dataset',
                      backgroundColor: convertHex(brandInfo, 10),
                      borderColor: brandInfo,
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 3,
                      data: data
                  },
              ]
          }
      })
  }

  handleChangePeriod(period) {
      if(this.state.period !== period) {
          this.setState({
              period: period
          });
          let newData = [];
          for (let i = 0; i <= elements; i++) {
              newData.push(random(50, 200));
          }
          let datasets = {...this.state.chart.datasets};
          datasets[0].data = newData;
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
                    <Line data={this.state.chart} options={mainChartOpts} height={300}/>
                </div>
            </CardBody>
            <CardFooter>
                <ul className="d-flex justify-content-center main-chart-legend">
                    <li className="main-chart-legend__item">
                        <div className="text-muted">Views</div>
                        <Progress className="progress-xs mt-2" color={brandInfo} value="100"/>
                    </li>
                </ul>
            </CardFooter>
        </Card>
    );
  }
}

export default TrafficChart;
