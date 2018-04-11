import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import Eye from './view.png';
import Cart from './shopping_cart_ok.png';
import Select from 'react-select';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class ViewOne extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	    	gender: 'male',
	    	proStatus: 'salary',
	    	nationality: 'indian',
	    	relationaship: 'married',
	    	additional: '',
	    	location: 'chandigarh',
	    	selectedOption: '',
	    	hobbies: 'traveling',
	    	value: { min: 18, max: 24},
	    }
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleMultiSelect = this.handleMultiSelect.bind(this);
	}

	handleInputChange(event) {
	    this.setState({
	      gender: event.target.value
	    });
	}
	handleMultiSelect = (selectedOption) => {
	    this.setState({ selectedOption });
	}
	handleChange(event) {
		const data = event.target;
		const value = data.value;
		const name = data.name;
		this.setState({
		  [name]: value
		});
	}
	render() {
		const tableArray = [1, 2, 3, 4, 5, 6];
		const { selectedOption } = this.state.selectedOption;
		const value = selectedOption && selectedOption.value;
	    const typologieList = tableArray.map(( list, i) => 
	    	<tr key={i} className={ i === 3 ? 'full-opacity' : null }>
	    		<td><label>Optician</label></td>
	    		<td><label><img src={Eye} /><span style={{position: 'relative', left: -5, backgroundColor: '#dbdbdb'}}>$</span></label></td>
	    		<td><label>5 <span className="line-through">WC</span></label></td>
	    		<td><label><img src={Eye} /></label></td>
	    		<td><label>3500</label></td>
	    		<td><label><FontAwesome.FaUser /> &nbsp; 12</label></td>
	    		<td><label><img src={Cart} /> &nbsp; 500</label></td>
	    	</tr>
	    )
		return (
			<div className="sub-page-wrapper">
				<div className="row">
		        	<div className="col">
		        		<h2 className="way-heading" style={{fontSize: '24px'}}><FontAwesome.FaCircle className="yellow-circle" /> #1 Typologie list</h2>
		        		<div className="col">
		        			<div className="col">
			        			<table className="typology-table">
			        				<tbody>
			        					{typologieList}
			        				</tbody>
			        			</table>
		        			</div>
		        		</div>
		        	</div>
		        </div>
		        <br/><br/>
		        <div className="row">
		        	<div className="col">
		        		<h2 className="way-heading" style={{fontSize: '24px'}}><FontAwesome.FaCircle className="yellow-circle" /> #2 Research filter</h2>
		        		<div className="col"><br/>
		        			<div className="col col-md-5">
		        				<label className="input-label">Gender</label>
		        				<div className="gender-radio-buttons">
		        					<input type="radio" id="male" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleInputChange} />
		        					<label htmlFor="male" className="pull-left">Male</label>
		        					<input type="radio" id="female" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleInputChange} />
		        					<label htmlFor="female" className="pull-right">Female</label>
		        					<div className="clearfix"></div>
		        				</div>
		        				<div className="input-wrapper">
			        				<label className="input-label pull-left">Age</label>
			        				<label className="age-title">{this.state.value.min}-{this.state.value.max}yo</label>
			        				<div style={{paddingTop: 40}}>
			        					<InputRange maxValue={100} minValue={0} value={this.state.value} onChange={value => this.setState({ value })} />
			        				</div>
		        				</div>
		        			</div>
		        			<div className="clearfix"></div>
		        			<div className="Col">
			        			<div className="row" style={{margin: 0}}>
				        			<div className="col col-md-5">
				        				<div className="input-wrapper">
				        					<label className="input-label">Professional status</label>
				        					<div className="custom-selectbox-main">
					        					<select className="custom-selectbox" name="proStatus" value={this.state.proStatus} onChange={this.handleChange}>
					        						<option value="salary">Salary</option>
					        						<option value="self_employed">Self Employed</option>
					        					</select>
					        					<FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
				        					</div>
				        				</div>

				        				<div className="input-wrapper">
				        					<label className="input-label">Relationship status</label>
				        					<div className="custom-selectbox-main">
					        					<select className="custom-selectbox" name="relationaship" value={this.state.relationaship} onChange={this.handleChange}>
					        						<option value="single">Single</option>
					        						<option value="married">Married</option>
					        					</select>
					        					<FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
				        					</div>
				        				</div>

				        				<div className="input-wrapper">
				        					<label className="input-label">Nationality</label>
				        					<div className="custom-selectbox-main">
					        					<select className="custom-selectbox" name="nationality" value={this.state.nationality} onChange={this.handleChange}>
					        						<option value="indian">Indian</option>
					        						<option value="australian">Australian</option>
					        					</select>
					        					<FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
				        					</div>
				        				</div>
				        			</div>

				        			<div className="col col-md-5 offset-md-1">
				        				<div className="input-wrapper">
				        					<label className="input-label">Hobbies</label>
				        					<div className="custom-selectbox-main">
					        					<select className="custom-selectbox" name="hobbies" value={this.state.hobbies} onChange={this.handleChange}>
					        						<option value="technologies">Technologies</option>
					        						<option value="fishing">Fishing</option>
					        						<option value="cooking">Cooking</option>
					        						<option value="traveling">Traveling</option>
					        					</select>
					        					<FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
				        					</div>
					        				{/*<Select name="hobbies" multi value={value} onChange={this.handleMultiSelect} 
					        													            options={[
					        													            	{ value: 'technologies', label: 'Technologies' },
					        													            	{ value: 'fishing', label: 'Fishing' },
					        													            	{ value: 'cooking', label: 'Cooking' },
					        													            	{ value: 'traveling', label: 'Traveling' },
					        												            ]}/>*/}

				        				</div>

				        				<div className="input-wrapper">
				        					<label className="input-label">Location</label>
				        					<div className="custom-selectbox-main">
					        					<select className="custom-selectbox" name="location" value={this.state.location} onChange={this.handleChange}>
					        						<option value="delhi">Delhi</option>
					        						<option value="chandigarh">Chandigarh</option>
					        					</select>
					        					<FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
				        					</div>
				        				</div>

				        				<div className="input-wrapper">
				        					<label className="input-label">Additional Content</label>
				        					<div className="custom-selectbox-main">
					        					<select className="custom-selectbox" name="additional" value={this.state.additional} onChange={this.handleChange}>
					        						<option value="additional">Additional</option>
					        					</select>
					        					<FontAwesome.FaArrowCircleODown className="custom-selectbox-arrow" />
				        					</div>
				        				</div>
				        			</div>
				        			<div className="clearfix"></div>
				        			<div className="col">
				        				<button className="submit-button">Submit</button>
				        			</div>
			        			</div>
		        			</div>
		        		</div>
		        	</div>
		        </div>
			</div>
		)
	}
}
export default ViewOne;