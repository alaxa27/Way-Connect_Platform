import React, { Component } from "react";
import PropTypes from "prop-types";

class PromotionsListItem extends Component {
  static propTypes = {
    promotion: PropTypes.object
  }
  render() {
    const { promotion } = this.props;
    return (
      <div className="promotion__item d-flex align-items-center py-3">
        <div className="promotion__circle-container pr-4">
          <div className="promotion__circle">
            <span>{promotion.reward}</span>
            <span>{promotion.reward_currency}</span>
          </div>
        </div>
        <div className="pl-4" style={{flex: 1}}>
          <label className="promotion__label-middle">{promotion.code}</label>
          <span className="promotion__span-middle">{promotion.date}</span>
        </div>
        <div className="text-right">
          <label className="promotion__label-right">{promotion.views}<sup>th</sup></label>
          <span className="promotion__span-right">visit</span>
        </div>
      </div>
    );
  }
}

export default PromotionsListItem;
