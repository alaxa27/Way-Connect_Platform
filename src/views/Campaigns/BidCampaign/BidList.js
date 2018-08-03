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
    return (
      <Card className="bids mb-4 mb-lg-0">
        <CardBody className="p-0">
          {map(data, (item, index) => {
            return (
              <BidListItem item={item} index={index} key={index} />
            );
          })}                          
        </CardBody>
      </Card>
      );
  }
}

BidList.propTypes = {
  data: PropTypes.array
};

export default BidList;
