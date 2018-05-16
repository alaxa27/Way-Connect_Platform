import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import ListCampaign from '../../views/Campaigns/ListCampaign/';
import CreateCampaign from '../../views/Campaigns/CreateCampaign/';
import BidCampaign from '../../views/Campaigns/BidCampaign/';
import ConfigCampaign from '../../views/Campaigns/ConfigCampaign/';
import Partner from '../../views/Partner/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/campaigns/list" name="ListCampaign" component={ListCampaign} />
                <Route path="/campaigns/create" name="CreateCampaign" component={CreateCampaign}/>
                <Route path="/campaigns/:id/config" name="ConfigCampaign" component={ConfigCampaign} />
                <Route path="/campaigns/:id/bid" name="BidCampaign" component={BidCampaign}/>
                <Route path="/partner" name="Partner" component={Partner} />
                <Redirect from="/" to="/login"/>

              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
