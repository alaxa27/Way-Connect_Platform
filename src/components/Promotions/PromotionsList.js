import React, {Component} from "react";
import PropTypes from "prop-types";
import PromotionsListItem from "./PromotionsListItem";
import InfiniteScroll from "react-infinite-scroller";
import _ from "underscore";
import ReduxBlockUi from "react-block-ui/redux";

class PromotionsList extends Component {
  constructor(props) {
    super(props);
  }

  renderPromotionList(data, promotionsPage, promotionsTotalCount, promotionsLimit, loadMore) {
    if (data.length > 0) {
      return (<InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={promotionsPage < promotionsTotalCount / promotionsLimit} loader={<div className = "loader my-3 text-center" key = {
          0
        } > ...</div>} useWindow={false}>
        {
          _.map(data, (promotion, key) => {
            return (<PromotionsListItem key={key} promotion={promotion}/>);
          })
        }
      </InfiniteScroll>);
    }
  }

  render() {
    const {data, promotionsPage, promotionsTotalCount, promotionsLimit, loadMore} = this.props;
    return (<ReduxBlockUi tag="div" block="PROMOTIONS" unblock={["PROMOTIONS_FULFILLED", "PROMOTIONS_REJECTED"]}>
      <div className="promotion px-4 mt-4">{this.renderPromotionList(data, promotionsPage, promotionsTotalCount, promotionsLimit, loadMore)}</div>
    </ReduxBlockUi>);
  }
}

PromotionsList.propTypes = {
  data: PropTypes.array,
  promotionsPage: PropTypes.number,
  promotionsLimit: PropTypes.number,
  promotionsTotalCount: PropTypes.number,
  loadMore: PropTypes.func
};

export default PromotionsList;
