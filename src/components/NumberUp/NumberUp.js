import React, {Component} from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";

class NumberUp extends Component {
  render() {
    return (<CountUp start={0} end={this.props.value} duration={this.props.duration}/>);
  }
}

NumberUp.defaultProps = {
  duration: 3
};
NumberUp.propTypes = {
  value: PropTypes.number.isRequired,
  duration: PropTypes.number
};

export default NumberUp;
