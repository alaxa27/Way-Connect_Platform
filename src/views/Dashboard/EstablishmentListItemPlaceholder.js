import React, {Component} from "react";
import {TextRow} from "react-placeholder/lib/placeholders";

class EstablishmentListItemPlaceholder extends Component {
  render() {
    return (<a href="#" className="d-block establishments__item">
      <TextRow color="#DFDFDF"/>
    </a>);
  }
}

EstablishmentListItemPlaceholder.propTypes = {};

export default EstablishmentListItemPlaceholder;
