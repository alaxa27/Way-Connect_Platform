import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  Row,
  Col,
  Input,
} from "reactstrap";
import * as FontAwesome from "react-icons/lib/fa";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {compose, withProps} from "recompose";
import DashboardPanel from "../../components/DashboardPanel/DashboardPanel";
import { map } from "underscore";

import * as dashboardActions from "../../actions/dashboardActions";
import * as establishmentActions from "../../actions/establishmentActions";
import EstablishmentList from "./EstablishmentList";

const MyMapComponent = compose(withProps({
  /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZiM1T9KvOHGALHu2EERTKsrgTC4Dp0iQ&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{
      height: "100%"
    }}/>,
  containerElement: <div style={{
      height: "400px"
    }}/>,
  mapElement: <div style={{
        height: "100%"
      }}/>
}), withScriptjs, withGoogleMap)(props => (
  <GoogleMap defaultZoom={8} center={{
    lat: props.markerCoordinates[0],
    lng: props.markerCoordinates[1]
  }}>
    {
    props.isMarkerShown && (<Marker position={{
        lat: props.markerCoordinates[0],
        lng: props.markerCoordinates[1]
      }}/>)
  }
  </GoogleMap>));

const mapStateToProps = state => ({
  stats: state.dashboard.stats,
  establishments: state.establishment.establishments,
  selectedEstablishment: state.establishment.selectedEstablishment
});

const mapDispatchToProps = dispatch => ({
  fetchDashboardData: () => dispatch(dashboardActions.fetchDashboardData()),
  selectEstablishment: payload => dispatch(establishmentActions.selectEstablishment(payload)),
  fetchEstablishmentList: payload => dispatch(establishmentActions.fetchEstablishmentList(payload))
});

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
    const { selectEstablishment } = this.props;
    selectEstablishment(item);
  }

  loadMoreEstablishments = () => {
    const { establishments, fetchEstablishmentList } = this.props;
    // TODO - add payload to action
    fetchEstablishmentList({
      limit: establishments.limit,
      offset: establishments.offset
    });
  }

  render() {
    const { stats, establishments, selectedEstablishment } = this.props;

    const connectionsPlot = map(stats.connections.plot, item => {
      return Math.floor(item * 100) / 100;
    });

    return (<div className="animated fadeIn" style={{
        marginTop: 20
      }}>
      <Row>
        <Col xs="12" lg="6">
          <DashboardPanel color="#F15A24" plot={stats.establishments.plot} title="Partners" value={stats.establishments.count} type="line1"/>
        </Col>
        <Col xs="12" lg="6">
          <DashboardPanel color="#F7931E" plot={connectionsPlot} title="Communication Diffusion" value={stats.connections.count} type="line1"/>
        </Col>
        <Col xs="12" lg="6">
          <DashboardPanel color="#FBB03B" plot={stats.campaigns.plot} title="Campaigns" value={stats.campaigns.count} type="line2"/>
        </Col>
        <Col xs="12" lg="6">
          <DashboardPanel color="#F9DA23" plot={stats.customers.plot} title="Clients" value={stats.customers.count} type="bar"/>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="6">
          <Row>
            <Col>
              <h2 className="way-heading" style={{
                  fontSize: "24px"
                }}>Our partners</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="google-maps-wrapper mt-4">
                <MyMapComponent
                  isMarkerShown={true}
                  markerCoordinates={selectedEstablishment ? selectedEstablishment.location.coordinates : [0, 0]}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="6" className="top-space">
          <EstablishmentList
            establishments={establishments}
            selectEstablishment={this.selectEstablishment}
            selectedEstablishment={selectedEstablishment}

            establishmentsPage={establishments.page}
            establishmentsTotalCount={establishments.totalCount}
            establishmentsLimit={establishments.limit}
            loadMore={this.loadMoreEstablishments}
          />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
