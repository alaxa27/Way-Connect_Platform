import React, {Component} from "react";
import PropTypes from "prop-types";
import { map } from "underscore";
import BidListItem from "./BidListItem";

class BidList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="bids mb-4 mb-lg-0">
        {map(data, (item, index) => {
          return (
            <BidListItem item={item} index={index} key={index} />
          );
        })}                          
      </div>);
  }
}

BidList.propTypes = {
  data: PropTypes.array
};

export default BidList;
