import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import CreateCampaign from '../../views/Campaigns/CreateCampaign/';
import Campaigns from '../../views/Campaigns/Campaigns/';
import Upload from '../../views/Upload/';
import Partner from '../../views/Partner/';
import MyBids from '../../views/MyBids/';

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
                <Route path="/create_campaign" name="CreateCampaign" component={CreateCampaign}/>
                <Route path="/campaigns" name="Campaigns" component={Campaigns}/>
                <Route path="/upload" name="Upload" component={Upload} />
                <Route path="/partner" name="Partner" component={Partner} />
                <Route path="/my_bids" name="My Bids" component={MyBids} />
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
