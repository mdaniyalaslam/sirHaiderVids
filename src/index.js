import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyEvents from './Events'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyEvents />, document.getElementById('root'));
registerServiceWorker();
