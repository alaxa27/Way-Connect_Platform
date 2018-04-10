import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import WhiteLogo from './logo.png';

export default () => {
	return (
		<BrowserRouter>
			<div>
				<div className="left-panel">
					<img src={WhiteLogo} alt="Way Connect" />
				</div>
				<div className="main-wrapper">
					<Switch>
						<Route exact path='/' component={App}/>
					</Switch>
				</div>
				<div className="page-footer">
		            <p className="no-s">2018 © Way Connect.</p>
		        </div>
			</div>
		</BrowserRouter>
	)
}