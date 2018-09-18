import React, {Component} from "react";
import PropTypes from "prop-types";
import DiscountsListItem from "./DiscountsListItem";
import InfiniteScroll from "react-infinite-scroller";
import _ from "underscore";
import ReduxBlockUi from "react-block-ui/redux";
import {
  Card,
  CardBody,
} from "reactstrap";

class DiscountsList extends Component {
  constructor(props) {
    super(props);
  }

  renderDiscountList(data, promotionsPage, promotionsTotalCount, promotionsLimit, loadMore, onDiscountClick) {
    if (data.length > 0) {
      return (<InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={promotionsPage < promotionsTotalCount / promotionsLimit} loader={<div className = "loader my-3 text-center clearfix" key = {
          0
        } > ...</div>} useWindow={false}>
        {
          _.map(data, (promotion, key) => {
            return (<DiscountsListItem key={key} promotion={promotion} onDiscountClick={onDiscountClick} />);
          })
        }
      </InfiniteScroll>);
    }
  }

  render() {
    const {data, promotionsPage, promotionsTotalCount, promotionsLimit, loadMore, onDiscountClick} = this.props;
    return (
      <ReduxBlockUi tag="div" block="PROMOTIONS" unblock={["PROMOTIONS_FULFILLED", "PROMOTIONS_REJECTED"]}>
        <Card className="promotion mt-4">
          <CardBody className="p-0">
            {this.renderDiscountList(data, promotionsPage, promotionsTotalCount, promotionsLimit, loadMore, onDiscountClick)}
          </CardBody>
        </Card>
      </ReduxBlockUi>
    );
  }
}

DiscountsList.propTypes = {
  data: PropTypes.array,
  promotionsPage: PropTypes.number,
  promotionsLimit: PropTypes.number,
  promotionsTotalCount: PropTypes.number,
  loadMore: PropTypes.func,
  onDiscountClick: PropTypes.func
};

export default DiscountsList;
