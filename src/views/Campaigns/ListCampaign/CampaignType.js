import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import * as MdIconPack from "react-icons/lib/md";
import "react-input-range/lib/css/index.css";
import { Row, Col, Button, Collapse } from "reactstrap";

class CampaignType extends Component {
  render() {
    const { title, number, toggle, isOpened, canAddNew, campaigns } = this.props;
    return (
      <div className="campaign-type">
          <div className="custom-breadcrumb-wrapper" onClick={() => { toggle(number) }}>
              <div className="custom-breadcrumb">
                <div className="d-flex justify-content-between w-100">
                    <label className="bidding-status-label">
                      <FontAwesome.FaCircle className={'mark-' + number} />
                      {title}
                    </label>
                    <div className="arrow-container">
                        {isOpened ?
                            <FontAwesome.FaAngleDown />
                            :
                            <FontAwesome.FaAngleUp />
                        }
                    </div>
                </div>
              </div>
          </div>

            <Collapse
              isOpen={isOpened}
            >
                <Row>
                    <Col>
                        <table className="mybids-table">
                            <tbody>
                              {campaigns}
                            </tbody>
                        </table>
                        {canAddNew ?
                            <Button className="add-btn"><MdIconPack.MdAddCircleOutline /> start a new bid</Button>
                        :
                            null
                        }
                    </Col>
                </Row>
            </Collapse>
      </div>
    );
  }
}
export default CampaignType;
