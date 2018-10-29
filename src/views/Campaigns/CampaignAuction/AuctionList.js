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
import {toggleCreditCampaignModal} from "../../../actions/campaignActions";

const mapStateToProps = state => ({
  auction: state.campaign.auction.data,
  bidHistory: state.campaign.bidHistory.items,
});

const mapDispatchToProps = dispatch => ({
  toggleCreditCampaignModal: () => dispatch(toggleCreditCampaignModal()),
});

class AuctionList extends Component {
  render() {
    const { auction, bidHistory } = this.props;
    const isCampaignDeep = true;
    const { top, current } = auction;
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
                  toggleCreditCampaignModal={this.props.toggleCreditCampaignModal}
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
  toggleCreditCampaignModal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuctionList);
