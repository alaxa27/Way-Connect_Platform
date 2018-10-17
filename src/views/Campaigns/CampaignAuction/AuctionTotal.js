import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import {connect} from "react-redux";
import { Alert } from "reactstrap";

const mapStateToProps = state => ({
  campaign: state.campaign.campaign,
  bidAttempt: state.campaign.bidAttempt,
});

class AuctionTotal extends Component {
  render() {
    const { data, campaign, bidAttempt } = this.props;
    return (
      <Fragment>
        {bidAttempt.success ?
          <Alert className="alert-minified" color="success">
            Error!
          </Alert>
        : bidAttempt.error ?
          <Alert className="alert-minified" color="danger">
            Error!
          </Alert>
        :
          null
        }
        <div className="mb-4 bid-total">
          <InputRange maxValue={data.max} minValue={data.min} value={data.value} disabled={true} onChange={(val) => {console.log(val);}} />
          <div className="currency-icon">
            +<i className="fa fa-usd"></i>
          </div>
        </div>
      </Fragment>
    );
  }
}

AuctionTotal.propTypes = {
  data: PropTypes.object,
  campaign: PropTypes.object,
  bidAttempt: PropTypes.object,
};

export default connect(mapStateToProps, null)(AuctionTotal);
