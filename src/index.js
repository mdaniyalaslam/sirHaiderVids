import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MyEvents from './Events'
import registerServiceWorker from './registerServiceWorker';
import Forms from './Forms'

ReactDOM.render(

    <Forms />
    // <MyEvents />
    ,document.getElementById('root')
);
registerServiceWorker();
