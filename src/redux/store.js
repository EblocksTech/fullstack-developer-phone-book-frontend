import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

import { createBrowserHistory } from 'history'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

export const history = createBrowserHistory()

export const store = createStore(rootReducer(history) ,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);