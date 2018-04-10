import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './route';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();