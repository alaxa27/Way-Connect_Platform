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
import AfterLogin from "../../components/Modal/AfterLogin";

class Full extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: true
    };
    this.hideModal = this.hideModal.bind(this);
  }
  hideModal() {
    this.setState({
      isModalOpened: false
    });
  }
  render() {
    return (<div className="app">
      <Header/>
      <div className="app-body">
        <Sidebar {...this.props}/>
        <main className="main">
          <Breadcrumb/>
          <Container fluid>
            <Switch>
              <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
              <Route exact path="/campaigns/list" name="ListCampaign" component={ListCampaign}/>
              <Route exact path="/campaigns/create" name="CreateCampaign" component={CreateCampaign}/>
              <Route path="/campaigns/:id" name="Campaigns" component={Campaigns}/>
              <Route path="/establishment/:id" name="Establishment" component={Establishment}/>
              <Redirect from="/" to="/login"/>

            </Switch>
          </Container>
        </main>
        <Aside/>
        {/* <AfterLogin 
          isOpen={this.state.isModalOpened}
          hide={this.hideModal}
        /> */}
      </div>
      <Footer/>
    </div>);
  }
}

export default Full;
