import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { LoggerExample } from './loggerExample.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LoggerExample />, document.getElementById('root'));
registerServiceWorker();
