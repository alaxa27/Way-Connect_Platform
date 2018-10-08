import React, {Component} from "react";
import PropTypes from "prop-types";
import EstablishmentListItem from "./EstablishmentListItem";
import EstablishmentListItemPlaceholder from "./EstablishmentListItemPlaceholder";
import InfiniteScroll from "react-infinite-scroller";
import _ from "underscore";
import ScrollArea from "react-scrollbar";

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

    return (<ScrollArea speed={0.8} className="establishments__scrollable-area" horizontal={false}>
      <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={establishmentsPage < establishmentsTotalCount / establishmentsLimit} useWindow={false}>
        <div className="establishments">
          {
            (
              establishments.fetching
                ? _.times(10, (key) => (<EstablishmentListItemPlaceholder key={key}/>))
              :establishments.items.length
              ? _.map(establishments.items, (item, index) => {
                return (<EstablishmentListItem key={item.id} index={index} establishment={item} selectedEstablishment={selectedEstablishment} selectEstablishment={selectEstablishment}/>);
              })
              : <div className="text-center">
                No establishments found
              </div>)
          }
        </div>
      </InfiniteScroll>
    </ScrollArea>);
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
