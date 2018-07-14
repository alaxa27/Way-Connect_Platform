import React, { Component } from "react";
import PropTypes from "prop-types";

class EstablishmentListItem extends Component {
  render() {
    const { index, establishment, selectedEstablishment, selectEstablishment } = this.props;
    return (
      <a 
        href="#" 
        className={"d-block establishments__item " + (selectedEstablishment.id === establishment.id ? "establishments__item--full-opacity" : "")}
        onClick={(e) => { selectEstablishment(e, establishment) }}
      >
          #{index + 1} {establishment.name}
      </a>
    );
  }
}

EstablishmentListItem.propTypes = {
  index: PropTypes.number,
  establishment: PropTypes.object,
  selectEstablishment: PropTypes.func,
  selectedEstablishment: PropTypes.object,
};

export default EstablishmentListItem;
