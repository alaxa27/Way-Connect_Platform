import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";

import Eye from "./view.png";
import Cart from "./shopping_cart_ok.png";

class ListCampaignItem extends Component {
  static propTypes = {
    item: PropTypes.shape({id: PropTypes.number}),
  }

  render() {
    const {item} = this.props;

      return (<tr>
        <td>
          <Link to={`/campaigns/${item.id}`}>
            <label>{item.name}</label>
          </Link>
        </td>
        <td>
          <Link to={`/campaigns/${item.id}`}>
            <label className="justify-content-center">
              <img src={Eye} alt="View"/>
              <span>$</span>{` ${item.view_price}`}<span className="line-through">WC</span>
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
  }
}
export default ListCampaignItem;
