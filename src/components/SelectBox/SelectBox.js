import React, {Component} from "react";
import PropTypes from "prop-types";
import Select, {components} from "react-select";
import * as FontAwesome from "react-icons/lib/fa";

const DropdownIndicator = (props) => {
  return (<components.DropdownIndicator {...props}>
    <FontAwesome.FaArrowCircleODown/>
  </components.DropdownIndicator>);
};

const selectStyles = {
  control: (base, state) => ({
    ...base,
    border: "none",
    backgroundColor: "white",
    borderRadius: "1.5rem",
    minHeight: "27px",
    height: "27px"
  })
};

class SelectBox extends Component {
  static propTypes = {
    options: PropTypes.array,
    fixed: PropTypes.bool
  }

  render() {
    return (<Select isDisabled={this.props.fixed} isMulti name="colors" defaultValue={(this.props.fixed ? this.props.options : [])} options={(this.props.fixed ? [] : this.props.options)} classNamePrefix="select" components={{
        DropdownIndicator
      }} styles={selectStyles}/>);
  }
}
export default SelectBox;
