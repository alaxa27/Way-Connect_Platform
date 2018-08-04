import React, {Component} from "react";
import * as MdIconPack from "react-icons/lib/md";
import {
    Row,
    Col,
    Button,
    Input,
} from "reactstrap";
import {translate} from "react-i18next";
import PropTypes from "prop-types";

class ConfigFormulary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;
    return (
      <Row>
        <Col>
          <div className="formulary">
            <Col>
              <h2 className="heading my-3">
                {t("configCampaign.survey.title")}
              </h2>
              <div className="separator">&nbsp;</div>
            </Col>

            <Col>
              <label>{t("configCampaign.survey.inputs.name.label")}</label>
              <Input type="text" name="formularyName"/>
            </Col>

            <Col>
              <label>{t("configCampaign.survey.inputs.question1.label")}</label>
              <Input type="text" name="question1"/>
            </Col>

            <Col xs="12" md={{
                  size: 6,
                  offset: 6
              }}>
              <Input type="text" name="answer1"/>
              <Button className="add-btn"><MdIconPack.MdAddCircleOutline/>
                {t("configCampaign.survey.addAnswer.title")}</Button>
            </Col>

            <Col>
              <div className="separator">&nbsp;</div>
            </Col>

            <Col>
              <label>{t("configCampaign.survey.inputs.question1.label")}</label>
              <Input type="text" name="question1"/>
            </Col>

            <Col xs="12" md={{
                  size: 6,
                  offset: 6
              }}>
              <Input type="text" name="answer1"/>
              <Button className="add-btn"><MdIconPack.MdAddCircleOutline/>
                {t("configCampaign.survey.addAnswer.title")}</Button>
            </Col>

            <Col>
              <div className="separator">&nbsp;</div>
            </Col>

            <Col className="mb-3">
              <Button className="add-btn"><MdIconPack.MdAddCircleOutline/>
                {t("configCampaign.survey.addQuestion.title")}</Button>
            </Col>
          </div>
        </Col>
      </Row>
    );
  }
}
ConfigFormulary.propTypes = {
  t: PropTypes.func,
};
export default translate("translations")(ConfigFormulary);
