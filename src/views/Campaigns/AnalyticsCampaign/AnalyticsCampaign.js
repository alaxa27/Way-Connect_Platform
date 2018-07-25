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
import {translate} from "react-i18next";
import {compose} from "recompose";

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

const mapStateToProps = state => ({
    fetching: state.campaign.fetching,
    success: state.campaign.success,
    error: state.campaign.error,
    traffic: state.campaign.traffic,
    keyData: state.campaign.keyData,
    typicalCustomer: state.campaign.typicalCustomer,
});

const mapDispatchToProps = dispatch => ({
    fetchCampaignAnalyticsPageData: payload => dispatch(actions.fetchCampaignAnalyticsPageData(payload))
});

export class AnalyticsCampaign extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount() {
      const { fetchCampaignAnalyticsPageData } = this.props;
      fetchCampaignAnalyticsPageData({
          campaignId: this.props.match.params.id,
      });
  }
  render() {
    const { traffic, keyData, typicalCustomer, t } = this.props;
    return (
      <ReduxBlockUi tag="div" block={["CAMPAIGN_ANALYTICS", "CAMPAIGN_ANALYTICS_REJECTED"]} unblock={["CAMPAIGN_ANALYTICS_FULFILLED"]}>
        <div className="sub-page-wrapper animated fadeIn">
          <div style={{
                  marginTop: 20
              }}>
            <Row>
              <Col xs="12" md="6" lg="3">
                <Panel index={1} value={keyData.views} title={t("analyticsCampaign.panel.views.title")}/>
              </Col>
              <Col xs="12" md="6" lg="3">
                <Panel index={2} value={keyData.customers} title={t("analyticsCampaign.panel.viewers.title")}/>
              </Col>
              <Col xs="12" md="6" lg="3">
                <Panel index={3} value={keyData.expense.value} currency={keyData.expense.currency} title={t("analyticsCampaign.panel.expenseTracking.title")} />
              </Col>
              <Col xs="12" md="6" lg="3">
                <Panel index={4} value={keyData.clicks} title={t("analyticsCampaign.panel.clicks.title")} />
              </Col>
            </Row>
            <Row>
              <Col>
                <TrafficChart
                    traffic={traffic}
                    options={trafficChartOptions}
                    title={t("general.trafficChart.title")}
                  />
              </Col>
            </Row>

            <Row>
              <Col xs="12" lg="6">
                <TrafficSales
                    title={t("general.trafficAndSalesChart.title")}
                />
              </Col>
              <Col xs="12" lg="6">
                <TypicalClient
                        data={typicalCustomer}
                        title={t("general.typicalClient.title")}
                    />
              </Col>
            </Row>
          </div>
        </div>
      </ReduxBlockUi>
    );
  }
}

AnalyticsCampaign.propTypes = {
    dispatch: PropTypes.func,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }),
    traffic: PropTypes.object,
    keyData: PropTypes.object,
    typicalCustomer: PropTypes.oneOfType([
        PropTypes.object,
    ]),
    fetchCampaignAnalyticsPageData: PropTypes.func,
    t: PropTypes.func,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(AnalyticsCampaign);
