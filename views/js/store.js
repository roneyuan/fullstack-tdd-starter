import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AllReducers from './reducers';


const store = createStore(
	AllReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	compose(applyMiddleware(thunk))
);


export default store;