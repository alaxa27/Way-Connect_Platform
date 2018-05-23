import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";

import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";

class ListCampaignItem extends Component {
  static propTypes = {
    history: PropTypes.shape({push: PropTypes.func}),
    item: PropTypes.shape({id: PropTypes.number}),
    status: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {item, status} = this.props;

    if (item.status === status) {
      return (<tr onClick={this.redirectToCampaign}>
        <td>
          <Link to={`/campaigns/${item.id}`}>
            <label>{item.name}</label>
          </Link>
        </td>
        <td>
          <Link to={`/campaigns/${item.id}`}>
            <label className="justify-content-center">
              <img src={Eye} alt="View"/>
              <span style={{
                  position: "relative",
                  left: -5,
                  fontSize: "16px"
                }}>$</span>{` ${item.view_price}`}<span className="line-through line-through-bids">WC</span>
            </label>
          </Link>
        </td>
        <td>
          <Link to={`/campaigns/${item.id}`}>
            <label className="justify-content-center">
              <img src={Eye} alt="View"/>{` ${item.viewed}`}</label>
          </Link>
        </td>
        <td>
          <Link to={`/campaigns/${item.id}`}>
            <label className="justify-content-center"><FontAwesome.FaUser/>{` ${item.viewers}`}</label>
          </Link>
        </td>
        <td>
          <Link to={`/campaigns/${item.id}`}>
            <label className="justify-content-end"><img src={Cart} alt="Cart"/>{` ${item.bought}`}</label>
          </Link>
        </td>
      </tr>);
    } else {
      return null;
    }
  }
}
export default ListCampaignItem;
