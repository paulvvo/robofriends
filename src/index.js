import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {Provider, connect} from "react-redux";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
