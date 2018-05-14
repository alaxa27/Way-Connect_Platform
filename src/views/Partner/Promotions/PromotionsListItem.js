import React, { Component } from 'react';

class PromotionsListItem extends Component {
  render() {
    return (
        <tr>
            <td>
                <div className="promotion pr-3">
                    <div className="promotion__circle">
                        <span>20</span>
                        <span>wc</span>
                    </div>
                </div>
            </td>
            <td className="pl-4">
                <label>#WFCD423</label>
                <span>18/04/2018 18:22</span>
            </td>
            <td align="right">
                <label>18<sup>th</sup></label>
                <span>visit</span>
            </td>
        </tr>
    )
  }
}

export default PromotionsListItem;
