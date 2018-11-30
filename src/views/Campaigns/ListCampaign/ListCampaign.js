import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCampaigns } from "../../../actions/listCampaignsActions";
import {translate} from "react-i18next";
import ListCampaignItem from "./ListCampaignItem";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import {MdAddCircleOutline} from "react-icons/lib/md";
import { Table } from "reactstrap";

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

        <Table className="campaigns-table" hover={true}>
          <thead>
            <tr>
              <th>
                {t('listCampaign.campaignName')}
              </th>
              <th>
                {t('listCampaign.companyName')}
              </th>
              <th>
                {t('listCampaign.price')}
              </th>
              <th>
                {t('listCampaign.budget')}
              </th>
              <th>
                {t('listCampaign.createdAt')}
              </th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
        <Link to="/campaigns/create">
          <Button color="primary">
            <MdAddCircleOutline/>
            {t("campaigns.start.text")}
          </Button>
        </Link>
      </div>
    );
  }
}
ListCampaign.propTypes = {
  t: PropTypes.func,
  campaigns: PropTypes.array
};
export default translate("translations")(ListCampaign);
