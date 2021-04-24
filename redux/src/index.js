import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore ,combineReducers ,compose} from 'redux'
import {Provider} from 'react-redux'
import counterReducer from './store/reducers/counterReducer'
import resultReducer from './store/reducers/resultReducer'

const reducer = combineReducers({
    coun: counterReducer,
    res: resultReducer
})

const logger = store =>{
    return next =>{
        return action=>{
            console.log('[MiddleWare] Dispatching', action)
            const result = next(action)
            console.log('[MiddleWare]', store.getState())
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store  = createStore(reducer, composeEnhancers(applyMiddleware(logger,thunk)));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
