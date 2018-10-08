import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as FontAwesome from "react-icons/lib/fa";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import {Row, Col, Button, Input} from "reactstrap";

import ResearchFilters from "../../../components/ResearchFilters/ResearchFilters";
import TypologieList from "../../../components/TypologieList/TypologieList";

import {fetchFilterData} from "../../../actions/campaignActions";

@connect((store) => {
  const campaignStore = store.campaign;
  return {filterData: campaignStore.filterData};
})

class CreateCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      additional: "",
      location: "chandigarh",
      hobbies: "traveling",
      communicationType: {
        brand: false,
        product: false
      },
      name: "",
      description: ""
    };
    this.props.dispatch(fetchFilterData());
  }

  render() {
    return (<div className="sub-page-wrapper animated fadeIn">
      <Row>
        <Col>
          <div className="c-breadcrumbs">
            <div className="c-breadcrumbs__item">
              <div className="c-breadcrumbs__label">
                <FontAwesome.FaCircle className="orange-circle"/>
                Typologie list
              </div>
            </div>
          </div>
          <TypologieList {...this.state}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="c-breadcrumbs">
            <div className="c-breadcrumbs__item">
              <div className="c-breadcrumbs__label">
                <FontAwesome.FaCircle className="green-circle"/>
                Research Filters
              </div>
            </div>
          </div>
          <ResearchFilters fixed={this.state.fixed}/>
        </Col>
      </Row>
    </div>);
  }
}

CreateCampaign.propTypes = {
  dispatch: PropTypes.func,
  filterData: PropTypes.object.isRequired
};
export default CreateCampaign;
