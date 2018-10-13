import React, {Component} from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";

class AuctionTotal extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="mb-4 bid-total">
        <InputRange maxValue={data.max} minValue={data.min} value={data.value} disabled={true} onChange={(val) => {console.log(val);}} />
        <div className="currency-icon">
          +<i className="fa fa-usd"></i>
        </div>
      </div>
    );
  }
}

AuctionTotal.propTypes = {
  data: PropTypes.object
};

export default AuctionTotal;
