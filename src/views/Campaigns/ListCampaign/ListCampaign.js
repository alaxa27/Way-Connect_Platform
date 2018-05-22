import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import * as MdIconPack from "react-icons/lib/md";
import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";
import "react-input-range/lib/css/index.css";
import { Row, Col, Button, Input, Collapse } from "reactstrap";
import _ from 'underscore';
import CampaignType from "./CampaignType";

class ListCampaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: [1, 2, 3]
      };
      this.toggle = this.toggle.bind(this);
  }

  toggle(id) {
    if(_.contains(this.state.collapse, id)) {
      let currentCollapse = [...this.state.collapse];
      currentCollapse = _.filter(currentCollapse, item => item !== id);
      this.setState({
          collapse: currentCollapse
      });
    } else {
        this.setState({
            collapse: [...this.state.collapse, id]
        });
    }
  }

  render() {
    const tableArray = [1, 2, 3, 4, 5];
    const items = tableArray.map(( list, i) =>
      <tr key={i}>
        <td><label>Optician</label></td>
        <td>
          <label className="justify-content-center">
            <img src={Eye} alt="View" />
            <span style={{position: "relative", left: -5, fontSize: '16px'}}>$</span>
            &nbsp;
            5
            <span className="line-through line-through-bids">WC</span>
          </label>
        </td>
        <td>
          <label className="justify-content-center">
            <img src={Eye} alt="View" />
            &nbsp;
            3500
          </label>
        </td>
        <td><label className="justify-content-center"><FontAwesome.FaUser /> &nbsp; 12</label></td>
        <td><label className="justify-content-end"><img src={Cart} alt="Cart" /> &nbsp; 500</label></td>
      </tr>
    );
    return (
      <div className="sub-page-wrapper animated fadeIn">
          <div className="campaign-types-container">
              <CampaignType
                  title="Bidding"
                  campaigns={items}
                  number={1}
                  toggle={this.toggle}
                  isOpened={_.contains(this.state.collapse, 1)}
                  canAddNew
              />
              <CampaignType
                  title="In Progress"
                  campaigns={items}
                  number={2}
                  toggle={this.toggle}
                  isOpened={_.contains(this.state.collapse, 2)}
              />
              <CampaignType
                  title="Delivered"
                  campaigns={items}
                  number={3}
                  toggle={this.toggle}
                  isOpened={_.contains(this.state.collapse, 3)}
              />
          </div>
      </div>
    );
  }
}
export default ListCampaign;
