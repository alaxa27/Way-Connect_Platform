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

const fileDownload = require("js-file-download");

let trafficChartOptions = {
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

const mapStateToProps = state => ({
  monthlyData: state.establishment.monthlyData,
  traffic: state.establishment.traffic,
  affluence: state.establishment.affluence,
  typicalCustomer: state.establishment.typicalCustomer,
  promotions: state.establishment.promotions,
  establishmentInXls: state.establishment.establishmentInXls
});

const mapDispatchToProps = dispatch => ({
  trafficPeriodChange: payload => dispatch(actions.trafficPeriodChange(payload)),
  fetchEstablishmentPageData: payload => dispatch(actions.fetchEstablishmentPageData(payload)),
  fetchPromotions: payload => dispatch(actions.fetchPromotions(payload)),
  downloadEstablishment: (payload) => dispatch(actions.downloadEstablishment(payload))
});

export class Establishment extends Component {
  constructor(props) {
    super(props);

    this.fetchData(props);
    this.loadMorePromotions = this.loadMorePromotions.bind(this);
  }

  fetchData(props) {
    const {promotions, fetchEstablishmentPageData} = props;
    fetchEstablishmentPageData({establishmentID: this.props.match.params.id, limit: promotions.limit});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData(this.props);
    }
  }

  loadMorePromotions() {
    const { promotions, fetchPromotions } = this.props;
    fetchPromotions({
        establishmentID: this.props.match.params.id,
        limit: promotions.limit,
        offset: promotions.offset
    });
  }

  render() {
    const {
      traffic,
      typicalCustomer,
      affluence,
      promotions,
      monthlyData,
      trafficPeriodChange,
      downloadEstablishment,
      establishmentInXls
    } = this.props;

    if(establishmentInXls) {
      fileDownload(establishmentInXls, "file.xls");
    }

    return (<ReduxBlockUi tag="div" block={["ESTABLISHMENT_PAGE"]} unblock={["ESTABLISHMENT_PAGE_FULFILLED", "ESTABLISHMENT_PAGE_REJECTED"]}>
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
              <TrafficChart traffic={traffic} options={trafficChartOptions} trafficPeriodChange={trafficPeriodChange} title="Traffic"/>
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
              <PromotionsList data={promotions.data} promotionsLimit={promotions.limit} promotionsPage={promotions.page} promotionsTotalCount={promotions.total_count} loadMore={this.loadMorePromotions}/>
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
              <ExportExcelButton
                action={downloadEstablishment}
                establishmentId={this.props.match.params.id}
              />
            </Col>
          </Row>

        </div>
        <br/>
      </div>
    </ReduxBlockUi>);
  }
}

Establishment.propTypes = {
  dispatch: PropTypes.func,
  traffic: PropTypes.object,
  affluence: PropTypes.object,
  typicalCustomer: PropTypes.object,
  monthlyData: PropTypes.object,
  promotions: PropTypes.shape({
    data: PropTypes.array,
    limit: PropTypes.number,
    offset: PropTypes.number,
    total_count: PropTypes.number,
    page: PropTypes.number
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({id: PropTypes.string})
  }),
  fetchEstablishmentPageData: PropTypes.func,
  trafficPeriodChange: PropTypes.func,
  fetchPromotions: PropTypes.func,
  downloadEstablishment: PropTypes.func,
  establishmentInXls: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Establishment);
