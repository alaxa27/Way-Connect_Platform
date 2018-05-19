import React, {Component} from 'react';
import * as MdIconPack from 'react-icons/lib/md';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table,
  Media
} from 'reactstrap';
import {Bar, Line} from 'react-chartjs-2';
import TypicalClient from "../../components/TypicalClient/TypicalClient";
import Affluence from "../../components/Affluence/Affluence";
import PromotionsList from "../../components/Promotions/PromotionsList";
import Panel from "../../components/Panel/Panel";
import ExportExcelButton from "./ExportExcel/ExportExcelButton";
import TrafficChart from "./Traffic/TrafficChart";

const brandPrimary = '#20a8d8';
const brandInfo = '#F15A24';

// Card Chart 1
const cardChartData1 = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [
        65,
        59,
        84,
        84,
        51,
        55,
        40
      ]
    }
  ]
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }

      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [
        1,
        18,
        9,
        17,
        34,
        22,
        11
      ]
    }
  ]
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }

      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
}

// Card Chart 3
const cardChartData3 = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [
        78,
        81,
        80,
        45,
        34,
        12,
        40
      ]
    }
  ]
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
}

// Card Chart 4
const cardChartData4 = {
  labels: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [
        78,
        81,
        80,
        45,
        34,
        12,
        40,
        75,
        34,
        89,
        32,
        68,
        54,
        72,
        18,
        98
      ]
    }
  ]
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
}

// Social Box Chart
const socialBoxData = [
  {
    data: [
      65,
      59,
      84,
      84,
      51,
      55,
      40
    ],
    label: 'facebook'
  }, {
    data: [
      1,
      13,
      9,
      17,
      34,
      41,
      38
    ],
    label: 'twitter'
  }, {
    data: [
      78,
      81,
      80,
      45,
      34,
      12,
      40
    ],
    label: 'linkedin'
  }, {
    data: [
      35,
      23,
      56,
      22,
      97,
      23,
      64
    ],
    label: 'google'
  }
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return() => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [
      35,
      23,
      56,
      22,
      97,
      23,
      64
    ],
    label: 'New Clients'
  }, {
    data: [
      65,
      59,
      84,
      84,
      51,
      55,
      40
    ],
    label: 'Recurring Clients'
  }, {
    data: [
      35,
      23,
      56,
      22,
      97,
      23,
      64
    ],
    label: 'Pageviews'
  }, {
    data: [
      65,
      59,
      84,
      84,
      51,
      55,
      40
    ],
    label: 'Organic'
  }, {
    data: [
      78,
      81,
      80,
      45,
      34,
      12,
      40
    ],
    label: 'CTR'
  }, {
    data: [
      1,
      13,
      9,
      17,
      34,
      41,
      38
    ],
    label: 'Bounce Rate'
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant
          ? variant
          : '#c2cfd6',
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return() => data;
};

const sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  legend: {
    display: false
  }
};

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

class Partner extends Component {
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
                      colorName: 'primary',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 3,
                      data: [10, 123, 11, 123, 32, 55, 66, 32, 12, 1, 1, 11, 22, 55, 14, 56, 66, 56, 44, 21, 22, 12, 12, 1, 1, 1, 88, 105]
                  },
              ],
          }
      };
  }
  render() {
    return (<div className="sub-page-wrapper animated fadeIn">

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
                defaultPeriod="month"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="way-heading" style={{
                fontSize: '24px'
              }}>Promotions</h2>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <PromotionsList/>
          </Col>
          <Col md="6">
            <div className="d-flex flex-column right-box">
              <Affluence/>
              <TypicalClient
                data={this.state.data}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <ExportExcelButton/>
          </Col>
        </Row>

      </div>
      <br/>
    </div>)
  }
}
export default Partner;
