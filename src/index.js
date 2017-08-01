import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import _ from '../node_modules/underscore/underscore-min.js';

import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import foodsActions from './actions/foodsActions'
import consumationActions from './actions/consumationActions'

const store = configureStore(/*inital state - data from server if needed. If not, default state is used*/)
store.dispatch(foodsActions.getAll()); 
store.dispatch(consumationActions.getAll()); 
console.log(_);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
