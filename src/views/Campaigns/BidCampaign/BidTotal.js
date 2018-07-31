import React, {Component} from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";

class BidTotal extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="mb-4 total-sum d-flex align-items-center">
        <InputRange maxValue={data.max} minValue={data.min} value={data.value} disabled={true} onChange={(val) => {console.log(val);}} />
        <div className="total-sum__currency">
          +<i className="fa fa-usd"></i>
        </div>
      </div>
    );
  }
}

BidTotal.propTypes = {
  data: PropTypes.object
};

export default BidTotal;
