import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Row, Col} from "reactstrap";
import ReduxBlockUi from "react-block-ui/redux";

import TypicalClient from "../../components/TypicalClient/TypicalClient";
import Affluence from "../../components/Affluence/Affluence";
import PromotionsList from "../../components/Promotions/PromotionsList";
import Panel from "../../components/Panel/Panel";
import TrafficChart from "../../components/Traffic/TrafficChart";
import ExportExcelButton from "./ExportExcel/ExportExcelButton";
import * as actions from "../../actions/establishmentActions";

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
  let establishmentStore = store.establishment;
  return {
    fetching: establishmentStore.fetching,
    success: establishmentStore.success,
    error: establishmentStore.error,
    monthlyData: establishmentStore.monthlyData,
    traffic: establishmentStore.traffic,
    affluence: establishmentStore.affluence,
    typicalCustomer: establishmentStore.typicalCustomer,
    promotions: establishmentStore.promotions,
    promotionsLimit: establishmentStore.promotionsLimit,
    promotionsOffset: establishmentStore.promotionsOffset,
    promotionsTotalCount: establishmentStore.promotionsTotalCount
  };
})
class Establishment extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    traffic: PropTypes.object,
    affluence: PropTypes.object,
    typicalCustomer: PropTypes.object,
    monthlyData: PropTypes.object,
    promotions: PropTypes.array,
    promotionsLimit: PropTypes.number,
    promotionsOffset: PropTypes.number,
    promotionsTotalCount: PropTypes.number,
    match: PropTypes.shape({
      params: PropTypes.shape({id: PropTypes.string})
    })
  }

  constructor(props) {
    super(props);
    this.handleTrafficChangePeriod = this.handleTrafficChangePeriod.bind(this);
    this.loadMorePromotions = this.loadMorePromotions.bind(this);

    const {promotionsLimit, promotionsOffset} = props;
    this.props.dispatch(actions.fetchEstablishmentPageData({establishmentID: this.props.match.params.id, limit: promotionsLimit, offset: promotionsOffset}));
  }

  handleTrafficChangePeriod(period) {
    this.props.dispatch(actions.trafficPeriodChange(period));
  }
  loadMorePromotions() {
    console.log("LOAD MORE");
    // const { promotionsLimit, promotionsOffset } = this.props;
    // this.props.dispatch(actions.fetchPromotions({
    //     limit: promotionsLimit,
    //     offset: promotionsOffset + promotionsLimit
    // }));
  }
  render() {
    const {
      traffic,
      typicalCustomer,
      affluence,
      promotions,
      promotionsLimit,
      promotionsOffset,
      promotionsTotalCount,
      monthlyData
    } = this.props;
    return (<ReduxBlockUi tag="div" block={["ESTABLISHMENT_PAGE", "ESTABLISHMENT_PAGE_REJECTED"]} unblock={["ESTABLISHMENT_PAGE_FULFILLED"]}>
      <div className="sub-page-wrapper animated fadeIn">
        <div style={{
            marginTop: 20
          }}>
          <Row>
            <Col xs="12" md="6" lg="3">
              <Panel index={1} value={monthlyData.visits} title="Visits"/>
            </Col>
            <Col xs="12" md="6" lg="3">
              <Panel index={2} value={monthlyData.total_rewards.value} currency={monthlyData.total_rewards.currency} title="Total of Promotions"/>
            </Col>
            <Col xs="12" md="6" lg="3">
              <Panel index={3} value={monthlyData.customer_average_visits} title="Average of Revisit"/>
            </Col>
            <Col xs="12" md="6" lg="3">
              <Panel index={4} value={monthlyData.visits_change} title="Visit Fluctuation"/>
            </Col>
          </Row>

          <Row>
            <Col>
              <TrafficChart traffic={traffic} options={trafficChartOptions} handleChangePeriod={this.handleTrafficChangePeriod} title="Traffic"/>
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
              <PromotionsList data={promotions} promotionsLimit={promotionsLimit} promotionsOffset={promotionsOffset} promotionsTotalCount={promotionsTotalCount} loadMore={this.loadMorePromotions}/>
            </Col>
            <Col md="6">
              <div className="d-flex flex-column right-box">
                <Affluence data={affluence}/>
                <TypicalClient data={typicalCustomer}/>
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
      </div>
    </ReduxBlockUi>);
  }
}

export default Establishment;
