import React from "react";
import {Row, Col, Input} from "reactstrap";
import {translate} from "react-i18next";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import {connect} from "react-redux";
import {compose} from "recompose";
import { changeCreditCampaignValue, toggleCreditCampaignModal } from "../../actions/campaignActions";

const mapStateToProps = state => ({
  creditMin: state.campaign.credit.min,
  creditMax: state.campaign.credit.max,
  creditCurrent: state.campaign.credit.current,
});

const mapDispatchToProps = dispatch => ({
  changeCreditCampaignValue: payload => dispatch(changeCreditCampaignValue(payload)),
  toggleCreditCampaignModal: () => dispatch(toggleCreditCampaignModal()),
});

const CreditCampaign = ({ creditMin, creditMax, creditCurrent, changeCreditCampaignValue, toggleCreditCampaignModal }) => {
  return (
    <div className="modal-outline">
      <div className="modal-body p-4">
        <div className="modal-body__heading modal-body__heading--with-actions mb-4">
          <div className="modal-body__title--mid">
              Credit campaign
          </div>
          <a href="#" className="modal-body__close" onClick={e => { e.preventDefault(); toggleCreditCampaignModal(); }}>
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
                <InputRange maxValue={creditMax} minValue={creditMin} value={creditCurrent} onChange={val => { changeCreditCampaignValue(val); }} formatLabel={value => `${value} WC`}/>
              </div>
            </Col>
            <div className="m-4 w-100 d-sm-none"></div>
            <Col sm="4" xs="12">
              <div className="modal-body__range-value">
                <Input className="bid__box--colored bid__box--new-bid text-center" type="text" name="newBid" value={creditCurrent} onChange={e => { changeCreditCampaignValue(e.target.value); }}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={{size: 4, offset: 8}} xs="12">
              <button className="modal-body__submit bid-btn bid-btn--dark btn-block">
                  Credit
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>    
  );
};

CreditCampaign.propTypes = {
  t: PropTypes.func,
  creditMin: PropTypes.number,
  creditMax: PropTypes.number,
  creditCurrent: PropTypes.number,
  changeCreditCampaignValue: PropTypes.func,
  toggleCreditCampaignModal: PropTypes.func,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(CreditCampaign);
