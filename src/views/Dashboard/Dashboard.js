import React, { Component } from "react";
import {Bar, Line} from "react-chartjs-2";
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
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap";
import * as FontAwesome from "react-icons/lib/fa";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";
import DashboardPanel from "../../components/DashboardPanel/DashboardPanel";

const brandPrimary = "#20a8d8";
const brandSuccess = "#4dbd74";
const brandInfo = "#63c2de";
const brandWarning = "#f8cb00";
const brandDanger = "#f86c6b";


const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZiM1T9KvOHGALHu2EERTKsrgTC4Dp0iQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));


// Card Chart 1
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "transparent",
      borderColor: "#fff",
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: "transparent",
        zeroLineColor: "transparent"
      },
      ticks: {
        fontSize: 2,
        fontColor: "transparent",
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
};

// Card Chart 2
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "transparent",
      borderColor: "#fff",
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: "transparent",
        zeroLineColor: "transparent"
      },
      ticks: {
        fontSize: 2,
        fontColor: "transparent",
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
};

// Card Chart 3
const cardChartData3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "transparent",
      borderColor: "#fff",
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
};

// Card Chart 4
const cardChartData4 = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
};

// Social Box Chart
const socialBoxData = [
  {data: [65, 59, 84, 84, 51, 55, 40], label: "facebook"},
  {data: [1, 13, 9, 17, 34, 41, 38], label: "twitter"},
  {data: [78, 81, 80, 45, 34, 12, 40], label: "linkedin"},
  {data: [35, 23, 56, 22, 97, 23, 64], label: "google"}
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        backgroundColor: "rgba(255,255,255,.1)",
        borderColor: "rgba(255,255,255,.55)",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      }
    ]
  };
  return () => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
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
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "New Clients"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Recurring Clients"
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "Pageviews"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Organic"
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: "CTR"
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: "Bounce Rate"
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: variant ? variant : "#c2cfd6",
        data: dataset.data,
        label: dataset.label
      }
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace("#", "");
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: data1
    },
    {
      label: "My Second dataset",
      backgroundColor: "transparent",
      borderColor: brandSuccess,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: data2
    },
    {
      label: "My Third dataset",
      backgroundColor: "transparent",
      borderColor: brandDanger,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
};

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


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      country: "india",
      city: "chandigarh"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  render() {
    const tableArray = [1, 2, 3, 4, 5, 6];
    const taleList = tableArray.map(( list, i) =>
      <tr key={i} className={ i === 0 ? "full-opacity" : null }>
        <td>
          <label>#{i + 1} Westside Shopping Center</label>
        </td>
      </tr>
    );
    return (
      <div className="animated fadeIn" style={{marginTop: 20}}>
        <Row>
          <Col xs="12" lg="6">
            <DashboardPanel
              color="#F15A24"
              chartData={cardChartData1}
              displayData={{
                title: "Partners",
                value: "243"
              }}
              options={cardChartOpts1}
              type="line"
            />
          </Col>
          <Col xs="12" lg="6">
            <DashboardPanel
                color="#F7931E"
                chartData={cardChartData2}
                displayData={{
                    title: "Communication Diffusion",
                    value: "142000"
                }}
                options={cardChartOpts2}
                type="line"
            />
          </Col>
          <Col xs="12" lg="6">
            <DashboardPanel
                color="#FBB03B"
                chartData={cardChartData3}
                displayData={{
                    title: "Campaigns",
                    value: 623
                }}
                options={cardChartOpts3}
                type="line"
            />
          </Col>
          <Col xs="12" lg="6">
            <DashboardPanel
                color="#F9DA23"
                chartData={cardChartData4}
                displayData={{
                    title: "Clients",
                    value: 356
                }}
                options={cardChartOpts4}
                type="bar"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="6">
            <Row>
              <Col>
                <h2 className="way-heading" style={{fontSize: "24px"}}>Our partners</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="google-maps-wrapper mt-4">
                  <MyMapComponent isMarkerShown />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs="12" md="6" className="top-space">
            <h4 className="way-heading">Select a country</h4>

            <div className="custom-selectbox-main">
              <Input type="select" className="custom-selectbox" name="country" value={this.state.country} onChange={this.handleChange}>
                <option value="India">India</option>
                <option value="australia">Australia</option>
              </Input>
              <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
            </div>

            <h4 className="way-heading">Select a city</h4>

            <div className="custom-selectbox-main">
              <Input type="select" className="custom-selectbox" name="city" value={this.state.city} onChange={this.handleChange}>
                <option value="chandigarh">Chandigarh</option>
                <option value="delhi">Delhi</option>
              </Input>
              <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
            </div>

            <div>
              <table className="locations-list">
                <tbody>
                  {taleList}
                </tbody>
              </table>
            </div>

          </Col>
          <div className="clearfix"></div>
        </Row>
        <br/><br/>


      </div>
    );
  }
}

export default Dashboard;
