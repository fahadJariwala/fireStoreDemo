import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import sagas from '../sagas';

const loggerMiddleware = createLogger({predicate: () => __DEV__});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(loggerMiddleware, thunk, sagaMiddleware),
);

sagaMiddleware.run(sagas);

export default store;
