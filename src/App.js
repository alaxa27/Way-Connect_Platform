import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import GoogleMapReact from 'google-map-react';

const data = [
      {name: 'S', value: 90},
      {name: 'M', value: 72},
      {name: 'T', value: 62},
      {name: 'W', value: 54},
      {name: 'T', value: 32},
      {name: 'F', value: 25},
      {name: 'S', value: 12},
      {name: 'S', value: 90},
      {name: 'M', value: 72},
      {name: 'T', value: 62},
      {name: 'W', value: 54},
      {name: 'T', value: 32},
      {name: 'F', value: 25},
      {name: 'S', value: 12},
];
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class App extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	    	selectedOption: ''
	    }
	}
	handleChange = (selectedOption) => {
	    this.setState({ selectedOption });
	    console.log(`Selected: ${selectedOption.label}`);
	}
	static defaultProps = {
	    center: { lat: 40.7446790, lng: -73.9485420 },
	    zoom: 11
	}

  render() {
  	const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    return (
      <div>
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="panel info-box panel-orange panel-bg">
                    <div className="panel-body">
                        <div className="info-box-stats">
                            <h3 className="counter">9.823</h3>
                            <span className="info-box-title">users online</span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="panel info-box panel-yellow-dark panel-bg">
                    <div className="panel-body">
                        <div className="info-box-stats">
                            <h3 className="counter">678</h3>
                            <span className="info-box-title">views per hours</span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="panel info-box panel-yellow panel-bg">
                    <div className="panel-body">
                        <div className="info-box-stats">
                            <h3><span className="counter">15</span>MB/s</h3>
                            <span className="info-box-title">average data speed</span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="panel info-box panel-yellow-light panel-bg">
                    <div className="panel-body">
                        <div className="info-box-stats">
                            <h3><span className="counter">82</span>%</h3>
                            <span className="info-box-title">confirmed targeting</span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>

        <div className="row">
        	<div className="col">
        		<div className="panel panel-white">
        			<div className="panel-heading">
        				<div className="pull-left">
        					<h4 className="panel-title">Traffic</h4>
        				</div>
        				<div className="pull-right btn-group">
        					<button type="button" className="btn btn-default">Day</button>
                            <button type="button" className="btn btn-grey">Month</button>
                            <button type="button" className="btn btn-default">Year</button>
        				</div>
        				<div className="clearfix"></div>
        			</div>
        			<AreaChart width={1100} height={400} data={data} className="dashboard-chart">
					  <XAxis dataKey="name"/>
					  <YAxis/>
					  <CartesianGrid strokeDasharray="3 3"/>
					  <Area type='monotone' dataKey='value' stroke='#f6954c' fill='#fde9d2' />
					  <Tooltip dataKey="value" />
					</AreaChart>
        		</div>
        	</div>
        </div>

        <div className="row">
        	<div className="col-md-8">
        		<h2 className="way-heading" style={{fontSize: '24px'}}>Our partners</h2>

        		<div className="google-maps-wrapper">
	        		<GoogleMapReact
			          defaultCenter={ this.props.center }
			          defaultZoom={ this.props.zoom }
			          bootstrapURLKeys={{key: 'AIzaSyDZiM1T9KvOHGALHu2EERTKsrgTC4Dp0iQ'}}>
			          <AnyReactComponent
			            lat={ 40.7473310 }
			            lng={ -73.8517440 }
			          />
			        </GoogleMapReact>
		        </div>

        	</div>
        	<div className="col-md-4 top-space">
	            <h4 className="way-heading">Select a country</h4>

	            <Select name="country" value={value} onChange={this.handleChange} 
	            options={[
	            	{ value: 'India', label: 'India' },
	            	{ value: 'Australia', label: 'Australia' },
	            ]}/>

				<h4 className="way-heading">Select a city</h4>

				<Select name="city" value={value} onChange={this.handleChange} 
	            options={[
	            	{ value: 'India', label: 'India' },
	            	{ value: 'Australia', label: 'Australia' },
	            ]}/>

        	</div>
        	<div className="clearfix"></div>
        </div>

      </div>
    );
  }
}

export default App;