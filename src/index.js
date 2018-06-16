import React from 'react';
import ReactDOM from 'react-dom';
import './main/res/styles/index.css';
import App from './main/js/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
