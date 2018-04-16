import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Container, Row, Col, Button, Input } from 'reactstrap';
import Eye from './view.png';
import Cart from './shopping_cart_ok.png';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './campaigns.scss';

class Campaigns extends Component {
  constructor(props) {
      super(props)
      this.state = {
        filter: false,
        value: 30,
        period: 1,
        number: 78,
        bidWrap: false,
        gender: 'male',
        proStatus: 'salary',
        nationality: 'indian',
        relationaship: 'married',
        additional: '',
        location: 'chandigarh',
        hobbies: 'traveling',
        age: { min: 18, max: 24},
      }
      this.showFilter = this.showFilter.bind(this);
      this.toggleBid = this.toggleBid.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
  }

  showFilter(){
    this.setState({
      filter: !this.state.filter
    })
  }

  handleInputChange(event) {
      this.setState({
        gender: event.target.value
      });
  }

  handleChange(event) {
    const data = event.target;
    const value = data.value;
    const name = data.name;
    this.setState({
      [name]: value
    });
  }

  toggleBid(){
    this.setState({
      bidWrap: !this.state.bidWrap
    })
  }


  render() {
    const data = [
      {
        rank: 1,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Delivered'   
      },
      {
        rank: 2,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Bidding'   
      },
      {
        rank: 3,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Bidding'   
      },
      {
        rank: 4,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Progress'  
      },
      {
        rank: 5,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Progress'    
      },
      {
        rank: 6,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Bidding'   
      },
      {
        rank: 7,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Progress'      
      },
      {
        rank: 8,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Progress'      
      },
      {
        rank: 9,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Progress'      
      },
      {
        rank: 10,
        name: 'Teads.tv',
        lastBid: '18:22',
        view: 600,
        bid: 6,
        cart: 200,
        status: 'Progress'      
      },
    ];
    const showData = data.map((list, i) => 
        <tr key={list.rank}>
          <td><h3>#{list.rank}{i === 0 ? <FontAwesome.FaStar /> : null }</h3></td>
          <td>
            <label>{list.name}</label>
            <span>last bid at {list.lastBid}</span>
          </td>
          <td>
            <p>
              <label className="pull-left">
                <img src={Eye} alt="View" />
                {i === 0 || i === 1 || i === 2 ? 
                  <span style={{position: 'relative', left: -5, backgroundColor: '#fff'}}>$</span>
                :
                  <span style={{position: 'relative', left: -5, backgroundColor: '#cbcbcb'}}>$</span>
                }
              </label>
              <label className="pull-left">{list.bid} <span className="line-through">WC</span></label>
            </p>
          </td>
          <td>
            <p>
              <label className="pull-left"><img src={Eye} alt="View" /></label>
              <label className="pull-left">{list.view}</label>
            </p>
          </td>
          <td>
            <p>
              <label className="pull-left"><img src={Cart} alt="Cart" /></label>
              <label className="pull-left">{list.cart}</label>
            </p>
          </td>
        </tr>
      )
    return (
      <div className="sub-page-wrapper animated fadeIn">

        <div className="custom-breadcrumb-wrapper">
          <div className="custom-breadcrumb">
            <Row style={{width: '100%'}}>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#cbcbcb'}}>
                  <FontAwesome.FaCircle />
                  Bidding
                </label>
              </Col>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#989898'}}>
                  <FontAwesome.FaCircle />
                  In Progress
                </label>
              </Col>
              <Col xs="4" md="3">
                <label className="bidding-status-label" style={{color: '#cbcbcb'}}>
                  <FontAwesome.FaCircle />
                  Delivered
                </label>
              </Col>
            </Row>
          </div>
          <div className="custom-breadcrumb">
            <Row style={{width: '100%'}}>
              <Col>
                <label className="bidding-status-label" style={{color: '#989898'}} onClick={this.showFilter}>
                  <FontAwesome.FaCircle />
                  Filters fixed
                  {this.state.filter ? <FontAwesome.FaAngleDown /> : <FontAwesome.FaAngleLeft />}
                </label>
              </Col>
            </Row>

            {this.state.filter ? 
              <Row style={{width: '100%'}} className="animated fadeIn fadeOut">
                <Col><br/>
                  <Col>
                    <Col md="5">
                      <label className="input-label">Gender</label>
                      <div className="gender-radio-buttons">
                        <Input type="radio" id="male" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleInputChange} />
                        <label htmlFor="male" className="pull-left">Male</label>
                        <Input type="radio" id="female" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleInputChange} />
                        <label htmlFor="female" className="pull-right">Female</label>
                        <div className="clearfix"></div>
                      </div>
                      <div className="input-wrapper">
                        <label className="input-label pull-left">Age</label>
                        <label className="age-title">{this.state.age.min}-{this.state.age.max}yo</label>
                        <div style={{paddingTop: 40}}>
                          <InputRange maxValue={100} minValue={0} value={this.state.age} onChange={age => this.setState({ age })} />
                        </div>
                      </div>
                    </Col>
                    <div className="clearfix"></div>
                    <Col>
                      <div className="row" style={{margin: 0}}>
                        <div className="col col-md-5">
                          <div className="input-wrapper">
                            <label className="input-label">Professional status</label>
                            <div className="custom-selectbox-main">
                              <Input type="select" className="custom-selectbox" name="proStatus" value={this.state.proStatus} onChange={this.handleChange}>
                                <option value="salary">Salary</option>
                                <option value="self_employed">Self Employed</option>
                              </Input>
                              <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                            </div>
                          </div>

                          <div className="input-wrapper">
                            <label className="input-label">Relationship status</label>
                            <div className="custom-selectbox-main">
                              <Input type="select" className="custom-selectbox" name="relationaship" value={this.state.relationaship} onChange={this.handleChange}>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                              </Input>
                              <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                            </div>
                          </div>

                          <div className="input-wrapper">
                            <label className="input-label">Nationality</label>
                            <div className="custom-selectbox-main">
                              <Input type="select" className="custom-selectbox" name="nationality" value={this.state.nationality} onChange={this.handleChange}>
                                <option value="indian">Indian</option>
                                <option value="australian">Australian</option>
                              </Input>
                              <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                            </div>
                          </div>
                        </div>

                        <Col md={{ size: 5, offset: 1}}>
                          <div className="input-wrapper">
                            <label className="input-label">Hobbies</label>
                            <div className="custom-selectbox-main">
                              <Input type="select" className="custom-selectbox" name="hobbies" value={this.state.hobbies} onChange={this.handleChange}>
                                <option value="technologies">Technologies</option>
                                <option value="fishing">Fishing</option>
                                <option value="cooking">Cooking</option>
                                <option value="traveling">Traveling</option>
                              </Input>
                              <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                            </div>
                          </div>

                          <div className="input-wrapper">
                            <label className="input-label">Location</label>
                            <div className="custom-selectbox-main">
                              <Input type="select" className="custom-selectbox" name="location" value={this.state.location} onChange={this.handleChange}>
                                <option value="delhi">Delhi</option>
                                <option value="chandigarh">Chandigarh</option>
                              </Input>
                              <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                            </div>
                          </div>

                          <div className="input-wrapper">
                            <label className="input-label">Additional Content</label>
                            <div className="custom-selectbox-main">
                              <Input type="select" className="custom-selectbox" name="additional" value={this.state.additional} onChange={this.handleChange}>
                                <option value="additional">Additional</option>
                              </Input>
                              <FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
                            </div>
                          </div>
                        </Col>
                        <div className="clearfix"></div>
                      </div>
                      <br/>
                      <Col>
                        <span className="filters-completed">Filters completed</span>
                      </Col>
                    </Col>
                  </Col>
                </Col>
              </Row>
            :
              null
            }

          </div>
        </div>

        <div>
          <Row>
            <Col md="6">
              <div className="search-list-wrap">
                <table className="search-table">
                  <tbody>
                    {showData}
                  </tbody>
                </table>
              </div>
            </Col>
            <Col md="6">
              <div className="search-detail-wrap">
                <div className="search-detail-head">
                  <h1>Bakery</h1>
                  <label>1950/4000 views available</label>
                  <span>9 peoples are interested about this product</span>
                </div>
                <div className="bidding-panel">
                  <div className="quote-detail">
                    <label>Repetition</label>
                    <InputRange maxValue={1000} minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
                    <span className="pull-right right-slider-label">{this.state.value}</span>
                    <div className="clearfix"></div>
                    <br/><br/>
                    <label>Period</label>
                    <InputRange maxValue={12} minValue={0} value={this.state.period} onChange={period => this.setState({ period })} />
                    <span className="pull-left right-slider-label">0</span>
                    <span className="pull-right right-slider-label">{this.state.period} month</span>
                    <div className="clearfix"></div>

                    <Button className="get-quotations-btn" onClick={this.toggleBid}>Get quotations</Button>
                  </div>
                </div>
              </div>
              {this.state.bidWrap &&
                <div className="bidding-area">
                  <label>Number</label>
                  <InputRange maxValue={100} minValue={0} value={this.state.number} onChange={number => this.setState({ number })} />
                  <span className="pull-left right-slider-label">0</span>
                  <span className="pull-right right-slider-label">100</span>
                  <div className="clearfix"></div>

                  <Row>
                    <Col>
                      <label className="total-cost-label">Total 250 <span className="line-through">WC</span></label>
                      <label className="ready-status"><FontAwesome.FaCircle /> Ready for biding</label>
                    </Col>
                    <Col>
                      <Button className="bid-btn">Bid</Button>
                    </Col>
                  </Row>

                </div>
              }
            </Col>
          </Row>
        </div>
        <br/>
      </div>
    )
  }
}
export default Campaigns;
