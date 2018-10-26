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
    minHeight: "28px"
  })
};

class SelectBox extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    fixed: PropTypes.bool,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.object
  }

  static defaultProps = {
    fixed: false,
    placeholder: "Select..."
  }

  render() {
    return (<Select onChange={this.props.onChange} value={this.props.value} isDisabled={this.props.fixed} isMulti="isMulti" name={this.props.name} placeholder={this.props.placeholder} defaultValue={(
        this.props.fixed
        ? this.props.options
        : [])} options={(
        this.props.fixed
        ? []
        : this.props.options)} classNamePrefix="select" components={{
        DropdownIndicator
      }} styles={selectStyles}/>);
  }
}
export default SelectBox;
