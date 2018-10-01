import React, {Component} from "react";
import PropTypes from "prop-types";
import { map } from "underscore";
import BidListItem from "./BidListItem";
import {
  Card,
  CardBody,
} from "reactstrap";

class BidList extends Component {
  render() {
    const { data } = this.props;
    const isCampaignDeep = true;
    return (
      <React.Fragment>
        <Card className="bids mb-4 mb-lg-0">
          <CardBody className="p-0">
            <div className="bids__list">
              {map(data, (item, index) => {
                return (
                  <BidListItem item={item} key={index} />
                );
              })}
            </div>
            {isCampaignDeep && 
              <div className="bids__current">
                <BidListItem item={data[0]} key={"index"} current />
              </div>
            }
          </CardBody>
        </Card>
        {!isCampaignDeep && <div className="bids__empty-space"></div>}        
      </React.Fragment>
    );
  }
}

BidList.propTypes = {
  data: PropTypes.array
};

export default BidList;
