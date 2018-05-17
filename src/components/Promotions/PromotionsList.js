import React, { Component } from 'react';
import PromotionsListItem from "./PromotionsListItem";
import ScrollArea from "react-scrollbar";
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
      console.log('m m');
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
        <ScrollArea
            speed={1}
            className="promotions-scroll-area"
            contentClassName="content"
            horizontal={false}
            style={{
                marginTop: '1.5rem',
                maxHeight: '800px'
            }}
            verticalContainerStyle={{
                opacity: 1,
                background: '#B3B3B3',
                zIndex: '1'
            }}
            verticalScrollbarStyle={{
                background: '#808080'
            }}
        >
            <div className="export-table-wrap">
                <table className="export-table">
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={() => { this.loadMorePromotions() }}
                        hasMore={this.state.promotions.length < this.state.totalCount}
                        loader={<tr className="loader" key={0}><td>Loading ...</td></tr>}
                        element="tbody"
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
                </table>
            </div>
        </ScrollArea>
    )
  }
}

export default PromotionsList;
