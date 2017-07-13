import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import store from './store'

const reducer = combineReducers({ students })


const store = createStore(reducer, composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      createLogger()
    )));

export default store;
