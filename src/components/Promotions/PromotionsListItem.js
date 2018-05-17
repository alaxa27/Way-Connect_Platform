import React, { Component } from 'react';

class PromotionsListItem extends Component {
  render() {
    const { promotion } = this.props;
    return (
        <tr>
            <td>
                <div className="promotion pr-3">
                    <div className="promotion__circle">
                        <span>{promotion.wc}</span>
                        <span>wc</span>
                    </div>
                </div>
            </td>
            <td className="pl-4">
                <label>{promotion.title}</label>
                <span>{promotion.createdAt}</span>
            </td>
            <td align="right">
                <label>{promotion.visit}<sup>th</sup></label>
                <span>visit</span>
            </td>
        </tr>
    )
  }
}

export default PromotionsListItem;
