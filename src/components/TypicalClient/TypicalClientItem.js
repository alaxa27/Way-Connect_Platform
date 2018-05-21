import React, { Component } from "react";
import PropTypes from "prop-types";
import * as FontAwesome from "react-icons/lib/fa";
import { Tooltip } from "reactstrap";

class TypicalClientItem extends Component {
  static propTypes = {
    prop: PropTypes.object,
    last: PropTypes.bool
  }
  constructor(props) {
      super(props);
      this.state = {
        tooltipShown: false
      };
      this.toggleTooltip = this.toggleTooltip.bind(this);
  }
  toggleTooltip() {
    this.setState({
        tooltipShown: !this.state.tooltipShown
    });
  }
  render() {
    const { prop, last } = this.props;
    return (
      <li className="typical-client__item d-flex align-items-center">
        <div className="typical-client__color" style={{background: prop.color}}></div>
        <div className={"typical-client__body d-flex align-items-center ml-2 py-2" + (last ? " typical-client__body--last" : "")}>
          <div className="typical-client__prop">
            {prop.prop}
          </div>
          <div className="typical-client__value text-right">
            {prop.value}
          </div>
          <div className="typical-client__settings text-right pl-2" id={"Tooltip-" + prop.id}>
            <FontAwesome.FaCog />
            <Tooltip placement="top" isOpen={this.state.tooltipShown} target={"Tooltip-" + prop.id} toggle={this.toggleTooltip}>
              {prop.percentage}%
            </Tooltip>
          </div>
        </div>
      </li>
    );
  }
}

export default TypicalClientItem;
