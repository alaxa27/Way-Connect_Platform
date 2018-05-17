import React, { Component } from 'react';

class PromotionsListItem extends Component {
  render() {
    const { promotion } = this.props;
    return (
        <div className="promotion__item d-flex align-items-center py-3">
            <div>
                <div className="promotion__circle-container px-4">
                    <div className="promotion__circle">
                        <span>{promotion.wc}</span>
                        <span>wc</span>
                    </div>
                </div>
            </div>
            <div className="pl-4" style={{flex: 1}}>
                <label className="promotion__label-middle">{promotion.title}</label>
                <span className="promotion__span-middle">{promotion.createdAt}</span>
            </div>
            <div className="text-right">
                <label className="promotion__label-right">{promotion.visit}<sup>th</sup></label>
                <span className="promotion__span-right">visit</span>
            </div>
        </div>
    )
  }
}

export default PromotionsListItem;
