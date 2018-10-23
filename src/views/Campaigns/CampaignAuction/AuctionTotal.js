import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import {connect} from "react-redux";
import {Alert, Progress} from "reactstrap";
import { toggleCreditCampaignModal } from "../../../actions/campaignActions";


const mapStateToProps = state => ({campaign: state.campaign.campaign, bidAttempt: state.campaign.bidAttempt});

const mapDispatchToProps = dispatch => ({
  toggleCreditCampaignModal: () => dispatch(toggleCreditCampaignModal())
});

class AuctionTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  render() {
    const {data, campaign, bidAttempt, toggleCreditCampaignModal} = this.props;
    const value = 100 * data.budget / (data.spent_budget + data.budget);
    return (<Fragment>
      {
        bidAttempt.success
          ? <Alert className="alert-minified" color="success">
              Error!
          </Alert>
          : bidAttempt.error
            ? <Alert className="alert-minified" color="danger">
                Error!
            </Alert>
            : null
      }
      <div className="mb-4 bid-total">
        <Progress className="bid-total__progress" value={value}>
          {data.budget.toString() + " WC"}</Progress>
        <div className="btn currency-icon" onClick={() => {
            toggleCreditCampaignModal();
          }}>
          +<i className="fa fa-usd"></i>
        </div>
      </div>
    </Fragment>);
  }
}

AuctionTotal.propTypes = {
  toggleCreditCampaignModal: PropTypes.func,
  data: PropTypes.object,
  campaign: PropTypes.object,
  bidAttempt: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(AuctionTotal);
