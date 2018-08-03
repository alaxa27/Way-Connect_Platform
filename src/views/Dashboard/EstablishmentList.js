import React, {Component} from "react";
import PropTypes from "prop-types";
import EstablishmentListItem from "./EstablishmentListItem";
import InfiniteScroll from "react-infinite-scroller";
import _ from "underscore";

class EstablishmentList extends Component {
  render() {
    const { 
      establishments, 
      selectEstablishment, 
      selectedEstablishment,

      establishmentsPage,
      establishmentsTotalCount, 
      establishmentsLimit, 
      loadMore
    } = this.props;

    return (
      <InfiniteScroll 
        pageStart={0} 
        loadMore={loadMore} 
        hasMore={establishmentsPage < establishmentsTotalCount / establishmentsLimit}
        loader={<div className = "loader my-3 text-center clearfix" key = {0} > ...</div>} 
        useWindow={false}
      >
        <div className="establishments">
          {establishments.fetching ?
            <div className="text-center">
              ...
            </div>
          : establishments.items.length ?
              _.map(establishments.items, (item, index) => {
                return (
                  <EstablishmentListItem 
                    key={item.id}
                    index={index}
                    establishment={item}
                    selectedEstablishment={selectedEstablishment}
                    selectEstablishment={selectEstablishment}
                  />
                );
              })
          :
              <div className="text-center">
              No establishments found
              </div>
          }
        </div>
      </InfiniteScroll>
    );
  }
}

EstablishmentList.propTypes = {
  establishments: PropTypes.object,
  selectEstablishment: PropTypes.func,
  selectedEstablishment: PropTypes.object,

  establishmentsPage: PropTypes.number,
  establishmentsLimit: PropTypes.number,
  establishmentsTotalCount: PropTypes.number,
  loadMore: PropTypes.func
};

export default EstablishmentList;
