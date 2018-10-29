import React, {Component} from "react";
import PropTypes from "prop-types";
import Eye from "./view.png";
import { formatDate } from "../../../services/DateFormatterService";
import { Redirect } from "react-router-dom";

class ListCampaignItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      link: null
    };
  }
  static propTypes = {
    item: PropTypes.shape({id: PropTypes.number}),
  }

  redirectToAuction = (item) => {
    const link = `/campaigns/${item.id}/auction`;
    this.setState({
      redirect: true,
      link
    });
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={this.state.link} />;
    }
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
export default ListCampaignItem;
