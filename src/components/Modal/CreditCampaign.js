import React, {Component} from "react";
import {Modal, Row, Col, Input} from "reactstrap";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import {connect} from "react-redux";
import {compose} from "recompose";
import {toggleCreditCampaignModal, creditCampaign} from "../../actions/campaignActions";

const mapStateToProps = store => ({
  campaignID: store.campaign.campaign.id,
  budget: parseFloat(store.campaign.campaign.budget),
  walletValue: parseFloat(store.wallet.wallet.value)
});

const mapDispatchToProps = dispatch => ({
  toggleCreditCampaignModal: () => dispatch(toggleCreditCampaignModal()),
  creditCampaign: (payload) => dispatch(creditCampaign(payload))
});

class CreditCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: this.props.budget
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.budget !== prevProps.budget) {
      this.setState({credit: this.props.budget});
    }
  }

  changeCreditCampaignValue(value, max) {
    let regexValue = value.toString().replace(/[^0-9.]/g, "").replace(/(\,.*)\,/g, "$1");

    regexValue = parseFloat(regexValue);

    if (regexValue > max) {
      regexValue = max;
    }
    if (regexValue < 0) {
      regexValue = 0;
    }
    this.setState({credit: regexValue});
  }

  render() {
    const {budget, walletValue, toggleCreditCampaignModal} = this.props;

    const creditMax = Math.round((budget + walletValue) * 100) / 100;

    return (<Modal isOpen={true} toggle={toggleCreditCampaignModal} className="credit-campaign-modal">
      <div className="modal-body p-4">
        <div className="modal-body__heading modal-body__heading--with-actions mb-4">
          <div className="modal-body__title--mid">
            Credit campaign
          </div>
          <a href="#" className="modal-body__close" onClick={e => {
              e.preventDefault();
              toggleCreditCampaignModal();
            }}>
            <i className="fa fa-times"></i>
          </a>
        </div>
        <div className="modal-body__content">
          <Row>
            <Col>
              Recharge
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm="8" xs="12">
              <div className="modal-body__range mt-3">
                <InputRange maxValue={creditMax} minValue={0} value={this.state.credit} onChange={val => {
                    this.changeCreditCampaignValue(val, creditMax);
                  }} formatLabel={value => `${value} WC`}/>
              </div>
            </Col>
            <div className="m-4 w-100 d-sm-none"></div>
            <Col sm="4" xs="12">
              <div className="modal-body__range-value">
                <Input className="bid__box--colored bid__box--new-bid text-center" type="text" name="newBid" value={this.state.credit} onChange={e => {
                    this.changeCreditCampaignValue(e.target.value, creditMax);
                  }}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={{
                size: 4,
                offset: 8
              }} xs="12">
              <button className="modal-body__submit bid-btn bid-btn--dark btn-block" onClick={() => {
                  this.props.creditCampaign({
                    amount: this.state.credit - this.props.budget,
                    campaignID: this.props.campaignID
                  })
                }}>
                Credit
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>);
  }
};

CreditCampaign.propTypes = {
  t: PropTypes.func,
  campaignID: PropTypes.string,
  budget: PropTypes.number,
  walletValue: PropTypes.number,
  toggleCreditCampaignModal: PropTypes.func,
  creditCampaign: PropTypes.func
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(CreditCampaign);
