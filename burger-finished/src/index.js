import React from 'react';
import ReactDOM from 'react-dom';
import {createStore ,applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducer/burgerBuilder';
import ordersReducer from './store/reducer/order'
import authReducer from './store/reducer/auth'

const reducer = combineReducers({
    burger: burgerBuilderReducer,
    order: ordersReducer,
    auth: authReducer
})
// const store = createStore(burgerBuilderReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers = process.env.NODE_ENV?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
