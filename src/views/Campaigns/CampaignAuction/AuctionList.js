import React, {Component} from "react";
import PropTypes from "prop-types";
import { map } from "underscore";
import AuctionListItem from "./AuctionListItem";
import {
  Card,
  CardBody,
} from "reactstrap";
import ScrollArea from "react-scrollbar";
import {connect} from "react-redux";
import ReduxBlockUi from "react-block-ui/redux";

const mapStateToProps = state => ({
  auction: state.campaign.auction.data,
});

class AuctionList extends Component {
  render() {
    const { auction } = this.props;
    const isCampaignDeep = true;
    const { top, current } = auction;
    return (
      <ReduxBlockUi tag="div" block="FETCH_AUCTION" unblock={["FETCH_AUCTION_FULFILLED", "FETCH_AUCTION_REJECTED"]}>
        <Card className="bids mb-4 mb-lg-0">
          <CardBody className="p-0">
            <ScrollArea
              speed={0.8}
              className="bids__list"
              horizontal={false}
            >
              {map(top, item => {
                return (
                  <AuctionListItem item={item} key={item.id} />
                );
              })}
            </ScrollArea>
            {isCampaignDeep && current &&
              <div className="bids__current">
                <AuctionListItem item={current} key={"index"} current />
              </div>
            }
          </CardBody>
        </Card>
        {!isCampaignDeep && <div className="bids__empty-space"></div>}        
      </ReduxBlockUi>
    );
  }
}

AuctionList.propTypes = {
  auction: PropTypes.object
};

export default connect(mapStateToProps, null)(AuctionList);