import React, {Component} from "react";
import PropTypes from "prop-types";
import Eye from "./view.png";
import { formatDate } from "../../../services/DateFormatterService";
import { withRouter } from "react-router-dom";

class ListCampaignItem extends Component {
  static propTypes = {
    item: PropTypes.shape({id: PropTypes.number}),
    history: PropTypes.object,
  }

  redirectToAuction = (item) => {
    const link = `/campaigns/${item.id}/auction`;
    this.props.history.push(link);
  }

  render() {
    const {item} = this.props;
      return (<tr onClick={() => { this.redirectToAuction(item); }}>
        <td>
          {item.name}
        </td>
        <td>
          {item.company_name}
        </td>
        <td>
          <div className="justify-content-center">
            <img src={Eye} alt="View"/>
            <span>$</span>{item.budget}<span className="line-through">WC</span>
          </div>
        </td>
        <td>
          <span>$</span>{item.budget}
        </td>
        <td>
          {formatDate(item.created_at)}
        </td>
      </tr>);
  }
}
export default withRouter(ListCampaignItem);
