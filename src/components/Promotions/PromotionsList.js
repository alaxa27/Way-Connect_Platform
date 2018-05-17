import React, { Component } from 'react';
import PromotionsListItem from "./PromotionsListItem";
import InfiniteScroll from 'react-infinite-scroller';
import _ from 'underscore';

class PromotionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        promotions: [],
        totalCount: 0,
        limit: 10
    };
    this.fillPromotions = this.fillPromotions.bind(this);
    this.loadMorePromotions = this.loadMorePromotions.bind(this);
  }

  componentWillMount() {
      const that = this;
      setTimeout(() => {
          that.fillPromotions();
      }, 500);
  }

  fillPromotions() {
      let promotions = [];
      for(let i = 1; i <= this.state.limit; i++) {
          promotions.push({
              id: i,
              wc: 20,
              title: '#WFCD423',
              createdAt: '18/04/2018 18:22',
              visit: 18,
          })
      }
      this.setState({
         promotions: promotions,
         totalCount: 100
      });
  }

  loadMorePromotions() {
      let promotions = [];
      for(let i = 1; i <= this.state.limit; i++) {
          promotions.push({
              id: i,
              wc: 20,
              title: '#WFCD423',
              createdAt: '18/04/2018 18:22',
              visit: 18,
          })
      }
      this.setState({
          promotions: this.state.promotions.concat(promotions),
      });
  }

  render() {
    return (
        <div className="promotion pl-2 pr-4">
            <InfiniteScroll
                pageStart={0}
                loadMore={() => { this.loadMorePromotions() }}
                hasMore={this.state.promotions.length < this.state.totalCount}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
            >
                {_.map(this.state.promotions, (promotion, key) => {
                    return (
                        <PromotionsListItem
                            key={key}
                            promotion={promotion}
                        />
                    );
                })}
            </InfiniteScroll>
        </div>
    )
  }
}

export default PromotionsList;
