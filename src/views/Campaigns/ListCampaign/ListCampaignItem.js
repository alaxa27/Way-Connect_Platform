import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import Eye from "./view.png";

class ListCampaignItem extends Component {
  static propTypes = {
    item: PropTypes.shape({id: PropTypes.number}),
  }

  render() {
    const {item} = this.props;
    const link = `/campaigns/${item.id}/auction`;

      return (<tr>
        <td>
          <Link to={link}>
            <label>{item.name}</label>
          </Link>
        </td>
        <td>
          <Link to={link}>
            <label className="justify-content-center">
              <img src={Eye} alt="View"/>
              <span>$</span>{item.price}<span className="line-through">WC</span>
            </label>
          </Link>
        </td>
        <td>
          <Link to={link}>
            <label className="justify-content-center">
              <img src={Eye} alt="View"/>{item.views ? item.views : 100}</label>
          </Link>
        </td>
        <td>
          <Link to={link}>
            <label className="justify-content-center"><FontAwesome.FaUser/>{item.competitor ? item.competitor : 100}</label>
          </Link>
        </td>
      </tr>);
  }
}
export default ListCampaignItem;
