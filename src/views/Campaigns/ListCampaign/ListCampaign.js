import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCampaigns } from "../../../actions/listCampaignsActions";
import ComingSoon from "../../../components/Modal/ComingSoon";
import {translate} from "react-i18next";
import ListCampaignItem from "./ListCampaignItem";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import {MdAddCircleOutline} from "react-icons/lib/md";
import moment from 'moment';

@connect((store) => {
  let listCampaignsStore = store.listCampaigns;
  return {campaigns: listCampaignsStore.campaigns};
})
class ListCampaign extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    campaigns: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {};

    this.props.dispatch(fetchCampaigns());
  }

  render() {
    const { t, campaigns } = this.props;

    const items = campaigns.map((item, key) =>
      <ListCampaignItem item={item} key={key}/>);

    return (
      <div className="sub-page-wrapper animated fadeIn">
        <table className="mybids-table">
          <tbody>
            {items}
          </tbody>
        </table>
        <Link to="/campaigns/create">
          <Button className="add-btn"><MdAddCircleOutline/>
            {t("campaigns.start.text")}
          </Button>
        </Link>
        <ComingSoon 
          title={t("listCampaign.comingSoon.title")}
          description={t("listCampaign.comingSoon.description")}
          launchDate={moment("2018-09-28")}
        />
      </div>
    );
  }
}
ListCampaign.propTypes = {
  t: PropTypes.func,
  campaigns: PropTypes.array
};
export default translate("translations")(ListCampaign);
