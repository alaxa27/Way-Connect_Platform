import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Row, Col, Button, Input } from "reactstrap";

import ResearchFilters from "../../../components/ResearchFilters/ResearchFilters";

class CreateCampaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
        fixed: false,
        filter: true,
        gender: "male",
        proStatus: "salary",
        nationality: "indian",
        relationaship: "married",
        additional: "",
        location: "chandigarh",
        hobbies: "traveling",
        age: { min: 18, max: 24},
      };
  }

  render() {
    const tableArray = [1, 2, 3, 4, 5, 6];
      const typologieList = tableArray.map(( list, i) =>
        <tr key={i} className={ i === 3 ? "full-opacity" : null }>
          <td><label>Optician</label></td>
          <td><label><img src={Eye} alt="View" /><span style={{position: "relative", left: -5, backgroundColor: "#dbdbdb"}}>$</span></label></td>
          <td><label>5 <span className="line-through">WC</span></label></td>
          <td><label><img src={Eye} alt="View" /></label></td>
          <td><label>3500</label></td>
          <td><label><FontAwesome.FaUser /> &nbsp; 12</label></td>
          <td><label><img src={Cart} alt="Cart" /> &nbsp; 500</label></td>
        </tr>
      );
    return (
      <div className="sub-page-wrapper animated fadeIn">
        <Row>
          <Col>
            <h2 className="way-heading" style={{fontSize: "24px"}}><FontAwesome.FaCircle className="yellow-circle" /> #1 Typologie list</h2>
            <Col>
              <Col>
                <table className="typology-table">
                  <tbody>
                    {typologieList}
                  </tbody>
                </table>
              </Col>
            </Col>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col>
            <h2 className="way-heading" style={{fontSize: "24px"}}><FontAwesome.FaCircle className="yellow-circle" /> #2 Research filter</h2>
            <ResearchFilters {...this.state}/>
          </Col>
        </Row>
        <br/><br/>
      </div>
    );
  }
}
export default CreateCampaign;
