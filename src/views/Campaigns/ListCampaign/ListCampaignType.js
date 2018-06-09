import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import * as MdIconPack from "react-icons/lib/md";
import "react-input-range/lib/css/index.css";
import {Row, Col, Button, Collapse} from "reactstrap";

import ListCampaignItem from "./ListCampaignItem";

class ListCampaignType extends Component {
  static propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
    canAddNew: PropTypes.bool,
    campaigns: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpened: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    const {title, status, canAddNew, campaigns} = this.props;

    const items = campaigns.map((item, key) =>
      <ListCampaignItem status={status} item={item} key={key}/>);

    return (<div className="campaign-type">
      <div className="custom-breadcrumb-wrapper" onClick={() => {
          this.toggle();
        }}>
        <div className="custom-breadcrumb">
          <div className="d-flex justify-content-between w-100">
            <label className="bidding-status-label">
              <FontAwesome.FaCircle className={"mark-" + status}/> {title}
            </label>
            <div className="arrow-container">
              {
                this.state.isOpened
                  ? <FontAwesome.FaAngleDown/>
                  : <FontAwesome.FaAngleLeft/>
              }
            </div>
          </div>
        </div>
      </div>

      <Collapse isOpen={this.state.isOpened}>
        <Row>
          <Col>
            <table className="mybids-table">
              <tbody>
                {items}
              </tbody>
            </table>
            {
              canAddNew
                ? <Link to="/campaigns/create">
                  <Button className="add-btn"><MdIconPack.MdAddCircleOutline/>
                    {"start a new campaign"}</Button>
                </Link>
                : null
            }
          </Col>
        </Row>
      </Collapse>
    </div>);
  }
}
export default ListCampaignType;
