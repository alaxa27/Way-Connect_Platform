import React, { Component } from "react";
import PromotionsListItem from "./PromotionsListItem";
import InfiniteScroll from 'react-infinite-scroller';
import _ from 'underscore';
import ReduxBlockUi from 'react-block-ui/redux';

class PromotionsList extends Component {
  constructor(props) {
    super(props);
    this.loadMorePromotions = this.loadMorePromotions.bind(this);
  }

  componentWillMount() {
      const that = this;
      // setTimeout(() => {
      //     that.props.dispatch(actions.fetch());
      // }, 500);
  }

  loadMorePromotions() {
      // this.props.dispatch(actions.loadMore());
  }

  render() {
    const { data } = this.props;
    const totalCount = 3;
    return (
        <ReduxBlockUi tag="div" block="PROMOTIONS" unblock={["PROMOTIONS_FULFILLED", "PROMOTIONS_REJECTED"]}>
            <div className="promotion px-4 mt-4">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={() => { this.loadMorePromotions() }}
                    hasMore={data.length < 3}
                    loader={<div className="loader my-3 text-center">...</div>}
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
    )
  }
}

export default PromotionsList;
