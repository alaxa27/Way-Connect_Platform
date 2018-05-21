import React, { Component } from "react";
import PropTypes from "prop-types";
import * as FontAwesome from "react-icons/lib/fa";
import { Tooltip } from "reactstrap";
import _ from 'underscore';

const colors = {
    age: "#FC6600",
    gender: "#FC6600",
    relationship_status: "#F9812A",
    work_status: "#F9A602",
    country: "#FFBF00"
};

class TypicalClientItem extends Component {
  static propTypes = {
    prop: PropTypes.object,
    last: PropTypes.bool
  }
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
  unslugify(word) {
      const splits = word.split('_');
      const capitalized = _.map(splits, split => {
         return split.charAt(0).toUpperCase() + split.slice(1)
      });
      return capitalized.join(' ');
  }
  render() {
    const { title, value, last } = this.props;
    return (
      <li className="typical-client__item d-flex align-items-center">
        <div className="typical-client__color" style={{backgroundColor: colors[title]}}></div>
        <div className={"typical-client__body d-flex align-items-center ml-2 py-2" + (last ? " typical-client__body--last" : "")}>
          <div className="typical-client__prop">
            {this.unslugify(title)}
          </div>
          <div className="typical-client__value text-right">
            {_.isObject(value) ? value.label : Math.floor(value)}
          </div>
          <a href="#" className="typical-client__settings text-right pl-2" id={"Tooltip-" + title}>
            <FontAwesome.FaCog />
            <Tooltip placement="top" isOpen={this.state.tooltipShown} target={"Tooltip-" + title} toggle={this.toggleTooltip}>
               {_.isObject(value) ? Math.round(value.value * 100) : 100}%
            </Tooltip>
          </div>
        </div>
      </li>
    );
  }
}

export default TypicalClientItem;
