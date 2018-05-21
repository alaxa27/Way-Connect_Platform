import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col} from "reactstrap";
import TypicalClient from "../../components/TypicalClient/TypicalClient";
import Affluence from "../../components/Affluence/Affluence";
import PromotionsList from "../../components/Promotions/PromotionsList";
import Panel from "../../components/Panel/Panel";
import ExportExcelButton from "./ExportExcel/ExportExcelButton";
import TrafficChart from "./Traffic/TrafficChart";
import { connect } from 'react-redux';
import * as actions from '../../actions/partnerActions';
import ReduxBlockUi from 'react-block-ui/redux';

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
        typicalCustomer: partnerStore.typicalCustomer,
        promotions: partnerStore.promotions,
        promotionsLimit: partnerStore.promotionsLimit,
        promotionsOffset: partnerStore.promotionsOffset,
        promotionsTotalCount: partnerStore.promotionsTotalCount,
    };
})
class Partner extends Component {

  static propTypes = {
    dispatch: PropTypes.func
  }

  constructor(props) {
    super(props);
      this.handleTrafficChangePeriod = this.handleTrafficChangePeriod.bind(this);
      this.loadMorePromotions = this.loadMorePromotions.bind(this);
  }
  componentWillMount() {
      const { promotionsLimit, promotionsOffset } = this.props;
      this.props.dispatch(actions.fetchPartnerPageData({
          limit: promotionsLimit,
          offset: promotionsOffset
      }));
  }
  handleTrafficChangePeriod(period) {
      this.props.dispatch(actions.trafficPeriodChange(period));
  }
  loadMorePromotions() {
      console.log('LOAD MORE');
      // const { promotionsLimit, promotionsOffset } = this.props;
      // this.props.dispatch(actions.fetchPromotions({
      //     limit: promotionsLimit,
      //     offset: promotionsOffset + promotionsLimit
      // }));
  }
  render() {
    const { traffic, typicalCustomer, affluence, promotions, promotionsLimit, promotionsOffset, promotionsTotalCount } = this.props;
    return (
      <ReduxBlockUi tag="div" block={["PARTNER_PAGE", "PARTNER_PAGE_REJECTED"]} unblock={["PARTNER_PAGE_FULFILLED"]}>
          <div className="sub-page-wrapper animated fadeIn">
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
                      traffic={traffic}
                      options={trafficChartOptions}
                      handleChangePeriod={this.handleTrafficChangePeriod}
                      title="Traffic"
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
                  <PromotionsList
                      data={promotions}
                      promotionsLimit={promotionsLimit}
                      promotionsOffset={promotionsOffset}
                      promotionsTotalCount={promotionsTotalCount}
                      loadMore={this.loadMorePromotions}
                  />
                </Col>
                <Col md="6">
                  <div className="d-flex flex-column right-box">
                    <Affluence
                        data={affluence}
                    />
                    <TypicalClient
                      data={typicalCustomer}
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
          </div>
      </ReduxBlockUi>
    )
  }
}

export default Partner;
