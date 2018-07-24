import React, { Component } from "react";
import PropTypes from "prop-types";
import TypicalClientItem from "./TypicalClientItem";
import _ from "underscore";
import {translate} from "react-i18next";

class TypicalClientList extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const { data, t } = this.props;
    return (
      <ul className="typical-client p-0 m-0 list-unstyled">
        <TypicalClientItem
            id={1}
            title={t("analyticsCampaign.typicalClient.age.title")}
            color={"#FC6600"}
            label={data.age}
            value={data.age}
        />
        <TypicalClientItem
            id={2}
            title={t("analyticsCampaign.typicalClient.country.title")}
            color={"#FFBF00"}
            label={data.country.label}
            value={data.country.value}
        />
        <TypicalClientItem
            id={3}
            title={t("analyticsCampaign.typicalClient.gender.title")}
            color={"#FC6600"}
            label={data.gender.label}
            value={data.gender.value}
        />
        <TypicalClientItem
            id={4}
            title={t("analyticsCampaign.typicalClient.relationshipStatus.title")}
            color={"#F9812A"}
            label={data.relationship_status.label}
            value={data.relationship_status.value}
        />
        <TypicalClientItem
            id={5}
            title={t("analyticsCampaign.typicalClient.workStatus.title")}
            color={"#F9A602"}
            label={data.work_status.label}
            value={data.work_status.value}
            last={true}
        />
      </ul>
    );
  }
}

TypicalClientList.propTypes = {
    data: PropTypes.object,
    t: PropTypes.func,
};

export default translate("translations")(TypicalClientList);
