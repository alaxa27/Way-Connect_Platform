import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col} from "reactstrap";
import TypicalClient from "../../components/TypicalClient/TypicalClient";
import Affluence from "../../components/Affluence/Affluence";
import PromotionsList from "../../components/Promotions/PromotionsList";
import Panel from "../../components/Panel/Panel";
import ExportExcelButton from "./ExportExcel/ExportExcelButton";
import TrafficChart from "./Traffic/TrafficChart";
import {connect} from "react-redux";
import * as actions from "../../actions/partnerActions";

const brandInfo = "#F15A24";

const trafficChartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
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

function convertHex(hex, opacity) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
}

@connect((store) => {
  let partnerStore = store.partner;
  return {
    fetching: partnerStore.fetching,
    success: partnerStore.success,
    error: partnerStore.error,

    traffic: partnerStore.traffic,
    affluence: partnerStore.affluence,
    typicalCustomer: partnerStore.typicalCustomer
  };
})
class Partner extends Component {

  static propTypes = {
    dispatch: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          color: "#FC6600",
          prop: "Gender",
          value: "Male",
          percentage: 10
        }, {
          id: 2,
          color: "#FC6600",
          prop: "Age",
          value: 22,
          percentage: 25
        }, {
          id: 3,
          color: "#F9812A",
          prop: "Nationality",
          value: "Tunisian",
          percentage: 50
        }, {
          id: 4,
          color: "#F9A602",
          prop: "Professional Status",
          value: "Salary",
          percentage: 15
        }, {
          id: 5,
          color: "#FFBF00",
          prop: "Relationship Status",
          value: "Single",
          percentage: 78
        }
      ],
      trafficChartData: {
        labels: [
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S",
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S",
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S",
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S"
        ],
        datasets: [
          {
            label: "Views",
            backgroundColor: convertHex(brandInfo, 10),
            borderColor: brandInfo,
            colorName: "primary",
            pointHoverBackgroundColor: "#fff",
            borderWidth: 3,
            data: [
              10,
              123,
              11,
              123,
              32,
              55,
              66,
              32,
              12,
              1,
              1,
              11,
              22,
              55,
              14,
              56,
              66,
              56,
              44,
              21,
              22,
              12,
              12,
              1,
              1,
              1,
              88,
              105
            ]
          }
        ]
      }
    };
  }
  componentDidMount() {
    this.props.dispatch(actions.fetchPartnerPageData());
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
            <TrafficChart chartData={this.state.trafficChartData} options={trafficChartOptions} title="Traffic" defaultPeriod="month"/>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="way-heading" style={{
                fontSize: "24px"
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
              <TypicalClient data={this.state.data}/>
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
    </div>);
  }
}

export default Partner;
