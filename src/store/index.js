import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';
import toast from './middlewares/toast';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
middlewares.push(toast);

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store;
