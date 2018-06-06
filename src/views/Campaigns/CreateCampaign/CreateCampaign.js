import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Row, Col, Button, Input } from "reactstrap";

import ResearchFilters from "../../../components/ResearchFilters/ResearchFilters";
import TypologieList from "../../../components/TypologieList/TypologieList";

class CreateCampaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
        fixed: false,
        filter: true,
        gender: {
          male: false,
          female: false
        },
        proStatus: "salary",
        nationality: "indian",
        relationaship: "married",
        additional: "",
        location: "chandigarh",
        hobbies: "traveling",
        age: { min: 18, max: 24},

        communicationType: {
          brand: false,
          product: false
        },
        name: "",
        description: ""
      };
  }
  render() {
    return (
      <div className="sub-page-wrapper animated fadeIn">
        <Row>
          <Col>
            <div className="custom-breadcrumb-wrapper">
              <div className="custom-breadcrumb no-border">
                <div className="custom-breadcrumb-label">
                  <FontAwesome.FaCircle className="yellow-circle" />
                  Typologie list
                </div>
              </div>
            </div>
            <TypologieList {...this.state}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="custom-breadcrumb-wrapper">
              <div className="custom-breadcrumb no-border">
                <div className="custom-breadcrumb-label">
                  <FontAwesome.FaCircle className="green-circle" /> 
                  Research Filters
                </div>
              </div>
            </div>
            <ResearchFilters {...this.state}/>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CreateCampaign;
