import React, { Component } from "react";
import PropTypes from "prop-types";
import TypicalClientItem from "./TypicalClientItem";
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
            title={t("general.typicalClient.age.title")}
            label={data.age}
            value={data.age}
        />
        <TypicalClientItem
            id={2}
            title={t("general.typicalClient.country.title")}
            label={data.country.label}
            value={data.country.value}
        />
        <TypicalClientItem
            id={3}
            title={t("general.typicalClient.gender.title")}
            label={data.gender.label}
            value={data.gender.value}
        />
        <TypicalClientItem
            id={4}
            title={t("general.typicalClient.relationshipStatus.title")}
            label={data.relationship_status.label}
            value={data.relationship_status.value}
        />
        <TypicalClientItem
            id={5}
            title={t("general.typicalClient.workStatus.title")}
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
