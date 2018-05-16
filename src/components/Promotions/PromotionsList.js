import React, { Component } from 'react';
import PromotionsListItem from "./PromotionsListItem";

class PromotionsList extends Component {
  render() {
    return (
        <div className="export-table-wrap">
            <table className="export-table">
                <tbody>
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                    <PromotionsListItem />
                </tbody>
            </table>
        </div>
    )
  }
}

export default PromotionsList;
