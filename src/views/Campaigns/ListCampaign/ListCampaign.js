import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import * as MdIconPack from "react-icons/lib/md";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Row, Col, Button, Input } from "reactstrap";

class ListCampaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {
    const tableArray = [1, 2, 3, 4, 5, 6];
    const currentBids = tableArray.map(( list, i) =>
      <tr key={i}>
        <td><label>Optician</label></td>
        <td>
          <label>
            <img src={Eye} alt="View" />
            <span style={{position: "relative", left: -5, backgroundColor: "#dbdbdb"}}>$</span>
            &nbsp;
            5
            <span className="line-through line-through-bids">WC</span>
          </label>
        </td>
        <td>
          <label>
            <img src={Eye} alt="View" />
            &nbsp;
            3500
          </label>
        </td>
        <td><label><FontAwesome.FaUser /> &nbsp; 12</label></td>
        <td><label><img src={Cart} alt="Cart" /> &nbsp; 500</label></td>
      </tr>
    );

    const oldBids = tableArray.map(( list, i) =>
      <tr key={i}>
        <td><label>Optician</label></td>
        <td>
          <label>
            <img src={Eye} alt="View" />
            <span style={{position: "relative", left: -5, backgroundColor: "#dbdbdb"}}>$</span>
            &nbsp;
            5
            <span className="line-through line-through-bids">WC</span>
          </label>
        </td>
        <td>
          <label>
            <img src={Eye} alt="View" />
            &nbsp;
            3500
          </label>
        </td>
        <td><label><FontAwesome.FaUser /> &nbsp; 12</label></td>
        <td><label><img src={Cart} alt="Cart" /> &nbsp; 500</label></td>
      </tr>
    );

    return (
      <div className="sub-page-wrapper animated fadeIn">
        <div className="custom-breadcrumb-wrapper">
          <div className="custom-breadcrumb">
            <Row style={{width: "100%"}}>
              <Col>
                <label className="bidding-status-label" style={{color: "#cbcbcb"}}>
                  <FontAwesome.FaCircle />
                  Current Bids
                </label>
              </Col>
            </Row>
          </div>
        </div>

        <Row>
          <Col>
            <table className="mybids-table">
              <tbody>
                {currentBids}
              </tbody>
            </table>

            <Button className="add-btn"><MdIconPack.MdAddCircleOutline /> start a new bid</Button>

          </Col>
        </Row>
        <br/><br/>

        <div className="custom-breadcrumb-wrapper" style={{marginTop: 0, borderTop: "1px solid #a4b7c1"}}>
          <div className="custom-breadcrumb">
            <Row style={{width: "100%"}}>
              <Col>
                <label className="bidding-status-label" style={{color: "#989898"}}>
                  <FontAwesome.FaCircle />
                  Old Bids
                </label>
              </Col>
            </Row>
          </div>
        </div>

        <Row>
          <Col>
            <table className="mybids-table old-bids-table">
              <tbody>
                {oldBids}
              </tbody>
            </table>
          </Col>
        </Row>
        <br/><br/>
      </div>
    );
  }
}
export default ListCampaign;
