import React, { Component } from "react";
import PropTypes from "prop-types";
import * as FontAwesome from "react-icons/lib/fa";
import { Tooltip } from "reactstrap";
import { isNumber } from "underscore";

class TypicalClientItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tooltipShown: false,
      };
      this.toggleTooltip = this.toggleTooltip.bind(this);
  }
  toggleTooltip() {
    this.setState({
        tooltipShown: !this.state.tooltipShown
    });
  }
  render() {
    const { id, title, label, value, last } = this.props;
    return (
      <li className="typical-client__item d-flex align-items-center">
        <div className={"typical-client__color typical-client__color--" + id}></div>
        <div className={"typical-client__body d-flex align-items-center ml-2 py-2" + (last ? " typical-client__body--last" : "")}>
          <div className="typical-client__prop">
            {title}
          </div>
          <div className="typical-client__value text-right">
            {isNumber(label) ? Math.floor(label) : label}
          </div>
          <div href="#" className="typical-client__settings text-right pl-2" id={"Tooltip-" + id}>
            <FontAwesome.FaCog />
            <Tooltip placement="top" isOpen={this.state.tooltipShown} target={"Tooltip-" + id} toggle={this.toggleTooltip}>
              {value < 1 ? Math.round(value * 100) : Math.floor(value)}%
            </Tooltip>
          </div>
        </div>
      </li>
    );
  }
}

TypicalClientItem.propTypes = {
    id: PropTypes.number,
    last: PropTypes.bool,
    title: PropTypes.string,
    value: PropTypes.number,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.integer
    ]),
};

export default TypicalClientItem;
