import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
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
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {compose, withProps} from "recompose";
import DashboardPanel from "../../components/DashboardPanel/DashboardPanel";

import * as actions from "../../actions/dashboardActions";

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
}), withScriptjs, withGoogleMap)(props => (<GoogleMap defaultZoom={8} defaultCenter={{
    lat: -34.397,
    lng: 150.644
  }}>
  {
    props.isMarkerShown && (<Marker position={{
        lat: -34.397,
        lng: 150.644
      }}/>)
  }
</GoogleMap>));

const mapStateToProps = state => ({stats: state.dashboard.stats});

const mapDispatchToProps = dispatch => ({
  fetchDashboardData: payload => dispatch(actions.fetchDashboardData())
});

export class Dashboard extends Component {
  static propTypes = {
    fetchDashboardData: PropTypes.func.isRequired,
    stats: PropTypes.object
  }
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

    this.props.fetchDashboardData();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({radioSelected: radioSelected});
  }

  render() {

    const tableArray = [
      1,
      2,
      3,
      4,
      5,
      6
    ];

    const taleList = tableArray.map((list, i) => <tr key={i} className={i === 0
        ? "full-opacity"
        : null}>
      <td>
        <label>#{i + 1}
          Westside Shopping Center</label>
      </td>
    </tr>);

    const {stats} = this.props;

    return (<div className="animated fadeIn" style={{
        marginTop: 20
      }}>
      <Row>
        <Col xs="12" lg="6">
          <DashboardPanel color="#F15A24" plot={stats.establishments.plot} title="Partners" value={stats.establishments.count} type="line1"/>
        </Col>
        <Col xs="12" lg="6">
          <DashboardPanel color="#F7931E" plot={stats.connections.plot} title="Communication Diffusion" value={stats.connections.count} type="line1"/>
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
                <MyMapComponent isMarkerShown="isMarkerShown"/>
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
            <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow"/>
          </div>

          <h4 className="way-heading">Select a city</h4>

          <div className="custom-selectbox-main">
            <Input type="select" className="custom-selectbox" name="city" value={this.state.city} onChange={this.handleChange}>
              <option value="chandigarh">Chandigarh</option>
              <option value="delhi">Delhi</option>
            </Input>
            <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow"/>
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

    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
