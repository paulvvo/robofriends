import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import {Provider} from "react-redux";
import {createStore} from "redux";
import {searchRobots} from "./reducers";

// const store = createStore(rootReducer);
//in an app there wil be many reducers, and you're going to want
//to have a root reducer for the store, but for now we're going
// to use just the searchRobots reducer
const store = createStore(searchRobots);
//wrapping the app in provider will pass the store down to every
// other component child underneath app
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider> , document.getElementById('root'));

registerServiceWorker();
