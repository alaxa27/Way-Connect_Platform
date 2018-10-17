import React, {Component} from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import {connect} from "react-redux";

const mapStateToProps = state => ({
  campaign: state.campaign.campaign,
});

class AuctionTotal extends Component {
  render() {
    const { data, campaign } = this.props;
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
  data: PropTypes.object,
  campaign: PropTypes.object,
};

export default connect(mapStateToProps, null)(AuctionTotal);
