import React, {Component} from "react";
import PropTypes from "prop-types";
import { map } from "underscore";
import AuctionListItem from "./AuctionListItem";
import {
  Card,
  CardBody,
} from "reactstrap";
import ScrollArea from "react-scrollbar";

class AuctionList extends Component {
  render() {
    const { data } = this.props;
    const isCampaignDeep = true;
    return (
      <React.Fragment>
        <Card className="bids mb-4 mb-lg-0">
          <CardBody className="p-0">
            <ScrollArea
              speed={0.8}
              className="bids__list"
              horizontal={false}
            >
              {map(data, (item, index) => {
                return (
                  <AuctionListItem item={item} key={item.rank} />
                );
              })}
            </ScrollArea>
            {isCampaignDeep && 
              <div className="bids__current">
                <AuctionListItem item={data[0]} key={"index"} current />
              </div>
            }
          </CardBody>
        </Card>
        {!isCampaignDeep && <div className="bids__empty-space"></div>}        
      </React.Fragment>
    );
  }
}

AuctionList.propTypes = {
  data: PropTypes.array
};

export default AuctionList;
