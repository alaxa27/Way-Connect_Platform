import React, {Component} from "react";
import {Link, Switch, Route, Redirect} from "react-router-dom";
import {Container} from "reactstrap";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import Breadcrumb from "../../components/Breadcrumb/";
import Aside from "../../components/Aside/";
import Footer from "../../components/Footer/";

import Dashboard from "../../views/Dashboard/";
import ListCampaign from "../../views/Campaigns/ListCampaign/";
import CreateCampaign from "../../views/Campaigns/CreateCampaign/";
import Campaigns from "../../views/Campaigns";
import Establishment from "../../views/Establishment/";
import AddEstablishmentModal from "../../components/Modal/AddEstablishmentModal";
import * as establishmentActions from "../../actions/establishmentActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
  addModalShown: state.establishment.addModalShown,
});

const mapDispatchToProps = dispatch => ({
  toggleAddModal: () => dispatch(establishmentActions.toggleAddModal())
});

class Full extends Component {
  constructor(props) {
    super(props);
  }
  toggleModal = (e) => {
    if(e) e.preventDefault();
    const { toggleAddModal } = this.props;
    toggleAddModal();
  }
  render() {
    const { addModalShown } = this.props;
    return (<div className="app">
      <Header/>
      <div className="app-body">
        <Sidebar 
          {...this.props}
          toggleModal={this.toggleModal}
        />
        <main className="main">
          <Breadcrumb/>
          <Container fluid>
            <Switch>
              <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
              <Route exact path="/campaigns/list" name="ListCampaign" component={ListCampaign}/>
              <Route exact path="/campaigns/create" name="CreateCampaign" component={CreateCampaign}/>
              <Route path="/campaigns/:id" name="Campaigns" component={Campaigns}/>
              <Route exact path="/establishment/:id" name="Establishment" component={Establishment}/>
              <Redirect from="/" to="/login"/>
            </Switch>
          </Container>
        </main>
        <Aside/>
        {addModalShown ?
          <AddEstablishmentModal
            isOpen={true}
            toggleModal={this.toggleModal}
          />
        :
          null
        }
      </div>
      <Footer/>
    </div>);
  }
}

Full.propTypes = {
  toggleAddModal: PropTypes.func,
  addModalShown: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Full);
