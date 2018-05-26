import React, {Component} from "react";
import * as MdIconPack from "react-icons/lib/md";
import {
    Row,
    Col,
    Button,
    Input,
} from "reactstrap";

class ConfigFormulary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="formulary">
            <Col>
              <h2 className="way-heading" style={{
                    fontSize: "24px",
                    marginBottom: 0,
                    marginTop: "25px"
                }}>Define a formulary</h2>
              <div className="sep">&nbsp;</div>
            </Col>

            <Col className="formulary-input-wrap">
              <label>Name your formulary</label>
              <Input type="text" name="formularyName"/>
            </Col>

            <Col className="formulary-input-wrap">
              <label>Question 1</label>
              <Input type="text" name="question1"/>
            </Col>

            <Col xs="12" md={{
                  size: 6,
                  offset: 6
              }} className="formulary-input-wrap">
              <Input type="text" name="answer1"/>
              <Button className="add-btn"><MdIconPack.MdAddCircleOutline/>
                  add an answer</Button>
            </Col>

            <Col>
              <div className="sep">&nbsp;</div>
            </Col>

            <Col className="formulary-input-wrap">
              <label>Question 1</label>
              <Input type="text" name="question1"/>
            </Col>

            <Col xs="12" md={{
                  size: 6,
                  offset: 6
              }} className="formulary-input-wrap">
              <Input type="text" name="answer1"/>
              <Button className="add-btn"><MdIconPack.MdAddCircleOutline/>
                  add an answer</Button>
            </Col>

            <Col>
              <div className="sep">&nbsp;</div>
            </Col>

            <Col className="formulary-input-wrap">
              <Button className="add-btn"><MdIconPack.MdAddCircleOutline/>
                  add a question</Button>
            </Col>
          </div>
        </Col>
      </Row>
    );
  }
}
export default ConfigFormulary;
