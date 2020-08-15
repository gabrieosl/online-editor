import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
