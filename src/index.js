import React from 'react';
import ReactDOM from 'react-dom';

//import any assets we may need
import './libraries/bootstrap/css/bootstrap.min.css';
//import './libraries/bootstrap/js/bootstrap.min.js';
import './app.css';

//main app container
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();