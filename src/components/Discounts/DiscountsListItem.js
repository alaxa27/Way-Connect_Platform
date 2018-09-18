import React, { Component } from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";

class DiscountsListItem extends Component {
  render() {
    const { promotion, onDiscountClick, t } = this.props;
    const { payed } = promotion;
    return (
      <div 
        className={"promotion__item d-flex align-items-center py-3 px-4" + (payed ? " promotion__item--activated" : "")}
        onClick={() => { !payed ? onDiscountClick(promotion) : null; }}>
        <div className="promotion__circle-container pr-4">
          <div className="promotion__circle">
            <span>{promotion.reward}</span>
            <span>{promotion.reward_currency}</span>
          </div>
        </div>
        <div className="promotion__body pl-4">
          <div className="promotion__label-middle">{promotion.code.toUpperCase()}</div>
          <span className="promotion__span-middle">{new Date(promotion.date).toLocaleString()}</span>
        </div>
        <div className="text-right">
          <div className="promotion__label-right">{promotion.views}<sup>{t("general.th")}</sup></div>
          <span className="promotion__span-right">{t("general.visit")}</span>
        </div>
      </div>
    );
  }
}

DiscountsListItem.propTypes = {
    promotion: PropTypes.object.isRequired,
    t: PropTypes.func,
    onDiscountClick: PropTypes.func
};

export default translate("translations")(DiscountsListItem);
