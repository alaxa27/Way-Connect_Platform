import React, {Component} from "react";
import PropTypes from "prop-types";
import PromotionsListItem from "./PromotionsListItem";
import InfiniteScroll from "react-infinite-scroller";
import _ from "underscore";
import ReduxBlockUi from "react-block-ui/redux";

class PromotionsList extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    promotions: PropTypes.array,
    data: PropTypes.array,
    promotionsLimit: PropTypes.number,
    promotionsOffset: PropTypes.number,
    promotionsTotalCount: PropTypes.number,
    loadMore: PropTypes.func
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { data, promotionsTotalCount, loadMore } = this.props;
    return (
      <ReduxBlockUi tag="div" block="PROMOTIONS" unblock={["PROMOTIONS_FULFILLED", "PROMOTIONS_REJECTED"]}>
        <div className="promotion px-4 mt-4">
          <InfiniteScroll
                    pageStart={0}
                    loadMore={loadMore}
                    hasMore={data.length < promotionsTotalCount}
                    loader={<div className="loader my-3 text-center" key={0}>...</div>}
                    useWindow={false}
                >
            {_.map(data, (promotion, key) => {
                        return (
                          <PromotionsListItem
                                key={key}
                                promotion={promotion}
                            />
                        );
                    })}
          </InfiniteScroll>
        </div>
      </ReduxBlockUi>
    );
  }
}

export default PromotionsList;
