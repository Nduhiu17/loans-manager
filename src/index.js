import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";


import App from './App/index';
import config from './config';
import './index.css';
import './assets/scss/style.scss';
import reducer from './store/reducer';

const middleware = [thunk];

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;


const app = ( 
        <Provider store = { store }>
                <BrowserRouter basename = { config.basename }>
                    <App/>
                </BrowserRouter>
       </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
 serviceWorker.unregister();