import React, {Component, Fragment} from "react";
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
import Forbidden from "./Forbidden";

const mapStateToProps = state => ({
  auction: state.campaign.auction.data,
  bidHistory: state.campaign.bidHistory.items,
});

class AuctionList extends Component {
  render() {
    const { auction, bidHistory } = this.props;
    const { top, current } = auction;
    console.log(auction);
    const isCampaignDeep = (top.length === 10 ? current.average_rank > top[top.length - 1].average_rank : false);
    return (
      <ReduxBlockUi tag="div" block="FETCH_AUCTION" unblock={["FETCH_AUCTION_FULFILLED", "FETCH_AUCTION_REJECTED"]}>
        <Card className="bids mb-4 mb-lg-0">
          <CardBody className="p-0">
            <div className="bids__wrapper">
              {bidHistory.length > 0 ?
                <Fragment>
                  <ScrollArea
                    speed={0.8}
                    className="bids__list"
                    horizontal={false}
                  >
                    {map(top, (item, key) => {
                      return (
                        <AuctionListItem item={item} index={key + 1} key={key + 1} />
                      );
                    })}
                  </ScrollArea>
                  {isCampaignDeep && current &&
                    <div className="bids__current">
                      <AuctionListItem item={current} index={Math.floor(current.average_rank)} current={true} />
                    </div>
                  }
                </Fragment>
              :
                <Forbidden
                  hideCredit
                />
              }

            </div>
          </CardBody>
        </Card>
        {!isCampaignDeep && <div className="bids__empty-space"></div>}
      </ReduxBlockUi>
    );
  }
}

AuctionList.propTypes = {
  auction: PropTypes.object,
  bidHistory: PropTypes.array,
};

export default connect(mapStateToProps, null)(AuctionList);
