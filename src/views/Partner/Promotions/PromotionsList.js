import React, { Component } from 'react';
import PromotionsListItem from "./PromotionsListItem";
import ScrollArea from "react-scrollbar";

class PromotionsList extends Component {
  render() {
    return (
        <ScrollArea
            speed={1}
            className="promotions-scroll-area"
            contentClassName="content"
            horizontal={false}
            style={{
                marginTop: '1.5rem',
                maxHeight: '800px'
            }}
            verticalContainerStyle={{
                opacity: 1,
                background: '#B3B3B3',
                zIndex: '1'
            }}
            verticalScrollbarStyle={{
                background: '#808080'
            }}
        >
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
        </ScrollArea>
    )
  }
}

export default PromotionsList;
