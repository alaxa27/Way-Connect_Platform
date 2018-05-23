import React, {Component} from "react";
import PropTypes from "prop-types";
import {Redirect, withRouter} from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";

import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";

@withRouter

class ListCampaignItem extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    item: PropTypes.shape({
      id: PropTypes.number
    }),
    status: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
    };
    this.redirectToCampaign = this.redirectToCampaign.bind(this);
  }

  redirectToCampaign() {
    this.props.history.push(`/campaigns/${this.props.item.id}`);
  }

  render() {
    const {item, status} = this.props;

    if (item.status === status) {
      return (<tr onClick={this.redirectToCampaign}>
        <td>
          <label>{item.name}</label>
        </td>
        <td>
          <label className="justify-content-center">
            <img src={Eye} alt="View"/>
            <span style={{
                position: "relative",
                left: -5,
                fontSize: "16px"
              }}>$</span>{` ${item.view_price}`}<span className="line-through line-through-bids">WC</span>
          </label>
        </td>
        <td>
          <label className="justify-content-center">
            <img src={Eye} alt="View"/>{` ${item.viewed}`}</label>
        </td>
        <td>
          <label className="justify-content-center"><FontAwesome.FaUser/>{` ${item.viewers}`}</label>
        </td>
        <td>
          <label className="justify-content-end"><img src={Cart} alt="Cart"/>{` ${item.bought}`}</label>
        </td>
      </tr>);
    } else {
      return null;
    }
  }
}
export default ListCampaignItem;
