import React, { Component } from "react";
import PropTypes from "prop-types";
import Panel from "../../../components/Panel/Panel";
import {
    Row,
    Col,
    Progress,
    Card,
    CardHeader,
    CardBody,
} from "reactstrap";
import TrafficChart from "../../../components/Traffic/TrafficChart";
import TypicalClient from "../../../components/TypicalClient/TypicalClient";
import TrafficSales from "./TrafficSales/TrafficSales";
import { connect } from "react-redux";
import * as actions from "../../../actions/campaignActions";
import ReduxBlockUi from "react-block-ui/redux";

const brandPrimary = "#20a8d8";
const brandInfo = "#F15A24";

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
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
}

@connect((store) => {
    let campaignStore = store.campaign;
    return {
        fetching: campaignStore.fetching,
        success: campaignStore.success,
        error: campaignStore.error,
        traffic: campaignStore.traffic,
        keyData: campaignStore.keyData,
    };
})
class AnalyticsCampaign extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    }),
    traffic: PropTypes.object,
    keyData: PropTypes.object
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
                  percentage: 10,
              },
              {
                  id: 2,
                  color: "#FC6600",
                  prop: "Age",
                  value: 22,
                  percentage: 25
              },
              {
                  id: 3,
                  color: "#F9812A",
                  prop: "Nationality",
                  value: "Tunisian",
                  percentage: 50,
              },
              {
                  id: 4,
                  color: "#F9A602",
                  prop: "Professional Status",
                  value: "Salary",
                  percentage: 15,
              },
              {
                  id: 5,
                  color: "#FFBF00",
                  prop: "Relationship Status",
                  value: "Single",
                  percentage: 78,
              },
          ],

      };
      this.props.dispatch(
          actions.fetchCampaignAnalyticsPageData({
              campaignId: this.props.match.params.id,
          })
      );
  }
  render() {
    const { traffic, keyData } = this.props;
    return (
      <ReduxBlockUi tag="div" block={["CAMPAIGN_ANALYTICS", "CAMPAIGN_ANALYTICS_REJECTED"]} unblock={["CAMPAIGN_ANALYTICS_FULFILLED"]}>
        <div className="sub-page-wrapper animated fadeIn">
          <div style={{
                  marginTop: 20
              }}>
            <Row>
              <Col xs="12" md="6" lg="3">
                <Panel index={1} value={keyData.views} title="Visits"/>
              </Col>
              <Col xs="12" md="6" lg="3">
                <Panel index={2} value={keyData.customers} title="Customers"/>
              </Col>
              <Col xs="12" md="6" lg="3">
                <Panel index={3} value={keyData.money + " " + keyData.money_currency} title="Money"/>
              </Col>
              <Col xs="12" md="6" lg="3">
                <Panel index={4} value={keyData.clicks} title="Clicks"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <TrafficChart
                    traffic={traffic}
                    options={trafficChartOptions}
                    title="Traffic"
                  />
              </Col>
            </Row>

            {/*<Row>*/}
            {/*<Col xs="12" lg="6">*/}
            {/*<TrafficSales />*/}
            {/*</Col>*/}
            {/*<Col xs="12" lg="6">*/}
            {/*<TypicalClient*/}
            {/*data={this.state.data}*/}
            {/*/>*/}
            {/*</Col>*/}
            {/*</Row>*/}
          </div>
        </div>
      </ReduxBlockUi>
    );
  }
}
export default AnalyticsCampaign;
