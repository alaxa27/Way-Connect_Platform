import React, { Component } from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";

class PromotionsListItem extends Component {
  render() {
    const { promotion, t } = this.props;
    return (
      <div className="promotion__item d-flex align-items-center py-3">
        <div className="promotion__circle-container pr-4">
          <div className="promotion__circle">
            <span>{promotion.reward}</span>
            <span>{promotion.reward_currency}</span>
          </div>
        </div>
        <div className="promotion__body pl-4">
          <label className="promotion__label-middle">{promotion.code.toUpperCase()}</label>
          <span className="promotion__span-middle">{new Date(promotion.date).toLocaleString()}</span>
        </div>
        <div className="text-right">
          <label className="promotion__label-right">{promotion.views}<sup>{t("general.th")}</sup></label>
          <span className="promotion__span-right">{t("general.visit")}</span>
        </div>
      </div>
    );
  }
}

PromotionsListItem.propTypes = {
    promotion: PropTypes.object.isRequired,
    t: PropTypes.func
};

export default translate("translations")(PromotionsListItem);
