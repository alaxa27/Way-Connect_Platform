import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {translate} from "react-i18next";
import {Row, Col, Input} from "reactstrap";
import * as FontAwesome from "react-icons/lib/fa";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {compose, withProps} from "recompose";
import DashboardPanel from "../../components/DashboardPanel/DashboardPanel";
import {map} from "underscore";

import * as dashboardActions from "../../actions/dashboardActions";
import * as establishmentActions from "../../actions/establishmentActions";
import EstablishmentList from "./EstablishmentList";

const MyMapComponent = compose(withProps({
  /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_vysGBcAkp6DMhvF0xbubCjhLWdUxrXw&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{
      height: "100%"
    }}/>,
  containerElement: <div style={{
      height: "400px"
    }}/>,
  mapElement: <div style={{
        height: "100%"
      }}/>
}), withScriptjs, withGoogleMap)(props => (<GoogleMap zoom={props.zoom} center={{
    lat: props.center[1],
    lng: props.center[0]
  }}>
  {
    props.isMarkerShown && (<React.Fragment>
      {
        map(props.markers, (marker, i) => {
          return (<Marker key={i} position={{
              lat: marker[1],
              lng: marker[0]
            }}/>);
        })
      }
    </React.Fragment>)
  }
</GoogleMap>));

const mapStateToProps = state => ({stats: state.dashboard.stats, zoom: state.dashboard.mapZoom, establishments: state.establishment.establishments, selectedEstablishment: state.establishment.selectedEstablishment});

const mapDispatchToProps = dispatch => ({
  fetchDashboardData: () => dispatch(dashboardActions.fetchDashboardData()),
  changeMapZoom: (payload) => dispatch(dashboardActions.changeMapZoom(payload)),
  selectEstablishment: payload => dispatch(establishmentActions.selectEstablishment(payload)),
  fetchEstablishmentList: payload => dispatch(establishmentActions.fetchEstablishmentList(payload))
});

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);

    this.props.fetchDashboardData();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  selectEstablishment = (e, item) => {
    e.preventDefault();
    const {selectEstablishment, changeMapZoom} = this.props;
    selectEstablishment(item);
    changeMapZoom(15);
  }

  loadMoreEstablishments = () => {
    const {establishments, fetchEstablishmentList} = this.props;
    // TODO - add payload to action
    fetchEstablishmentList({limit: establishments.limit, offset: establishments.offset});
  }

  formatPlotData = (data) => {
    const plotData = map(data, item => {
      return Math.floor(item * 100) / 100;
    });
    return plotData;
  }

  render() {
    const {stats, establishments, selectedEstablishment, zoom, t} = this.props;

    const markers = map(establishments.items, item => {
      return item.location.coordinates;
    });

    const connectionsPlot = this.formatPlotData(stats.connections.plot);
    const establishmentsPlot = this.formatPlotData(stats.establishments.plot);
    const campaignsPlot = this.formatPlotData(stats.campaigns.plot);
    const customersPlot = this.formatPlotData(stats.customers.plot);

    return (<div className="animated fadeIn" style={{
        marginTop: 20
      }}>
      <Row>
        <Col xs="12" lg="6">
          <DashboardPanel color="#F15A24" plot={establishmentsPlot} title={t("dashboard.kdp.partners.title")} value={stats.establishments.count} type="line1"/>
        </Col>
        <Col xs="12" lg="6">
          <DashboardPanel color="#F7931E" plot={connectionsPlot} title={t("dashboard.kdp.communicationDiffusion.title")} value={stats.connections.count} type="line1"/>
        </Col>
        <Col xs="12" lg="6">
          <DashboardPanel color="#FBB03B" plot={campaignsPlot} title={t("dashboard.kdp.campaigns.title")} value={stats.campaigns.count} type="line2"/>
        </Col>
        <Col xs="12" lg="6">
          <DashboardPanel color="#F9DA23" plot={customersPlot} title={t("dashboard.kdp.clients.title")} value={stats.customers.count} type="bar"/>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="6">
          <Row>
            <Col>
              <h2 className="way-heading" style={{
                  fontSize: "24px"
                }}>{t("dashboard.ourPartners.title")}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="google-maps-wrapper mt-4">
                <MyMapComponent isMarkerShown={true} center={selectedEstablishment
                    ? selectedEstablishment.location.coordinates
                    : [0, 0]} markers={markers} zoom={zoom}/>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="6" className="top-space">
          <EstablishmentList establishments={establishments} selectEstablishment={this.selectEstablishment} selectedEstablishment={selectedEstablishment} establishmentsPage={establishments.page} establishmentsTotalCount={establishments.totalCount} establishmentsLimit={establishments.limit} loadMore={this.loadMoreEstablishments}/>
        </Col>
        <div className="clearfix"></div>
      </Row>
      <br/><br/>

    </div>);
  }
}

Dashboard.propTypes = {
  fetchDashboardData: PropTypes.func.isRequired,
  fetchEstablishmentList: PropTypes.func.isRequired,
  stats: PropTypes.object,
  establishments: PropTypes.object,
  selectEstablishment: PropTypes.func,
  selectedEstablishment: PropTypes.object,
  t: PropTypes.func,
  i18n: PropTypes.object,
  changeMapZoom: PropTypes.func,
  zoom: PropTypes.number
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(Dashboard);
