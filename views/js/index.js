import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import store from './store';
import {Provider} from 'react-redux';
import App from './components/app';


document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
		<Provider store={ store }>
			<App />
		</Provider>,
		document.getElementById('app')
	)
);