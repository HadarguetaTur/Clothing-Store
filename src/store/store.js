
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);


const persistConfig={
  key:'root',
  storage,
  blackList:['user']
}

const persistedReducer=persistReducer(persistConfig,rootReducer)
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor=persistStore(store)