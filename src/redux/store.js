import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';


import rootReducer from "./root-reducer";
import rootSaga from './root-saga';

const sagaMidlleware = createSagaMiddleware();

const middlewares = [sagaMidlleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMidlleware.run(rootSaga);

export const persistor = persistStore(store);
