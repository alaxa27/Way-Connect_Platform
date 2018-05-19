import React, { Component } from 'react';
import PromotionsListItem from "./PromotionsListItem";
import InfiniteScroll from 'react-infinite-scroller';
import _ from 'underscore';
import { connect } from 'react-redux';
import * as actions from '../../actions/promotionActions';
import ReduxBlockUi from 'react-block-ui/redux';

@connect((store) => {
    let promotionStore = store.promotion;
    return {
        fetching: promotionStore.fetching,
        promotions: promotionStore.promotions,
        totalCount: promotionStore.totalCount,
        error: promotionStore.error
    };
})
class PromotionsList extends Component {
  constructor(props) {
    super(props);
    this.loadMorePromotions = this.loadMorePromotions.bind(this);
  }

  componentWillMount() {
      const that = this;
      setTimeout(() => {
          that.props.dispatch(actions.fetch());
      }, 500);
  }

  loadMorePromotions() {
      this.props.dispatch(actions.loadMore())
  }

  render() {
    const { promotions, totalCount } = this.props;
    return (
        <ReduxBlockUi tag="div" block="PROMOTIONS" unblock={["PROMOTIONS_FULFILLED", "PROMOTIONS_REJECTED"]}>
            <div className="promotion px-4 mt-4">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={() => { this.loadMorePromotions() }}
                    hasMore={promotions.length < totalCount}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={false}
                >
                    {_.map(promotions, (promotion, key) => {
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
    )
  }
}

export default PromotionsList;
