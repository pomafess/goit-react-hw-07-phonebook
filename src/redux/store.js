import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';

import bookReducer from './phonebook/phonebook-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const phonebookPersistConfig = {
//   key: 'contacts',
//    storage,
//   blacklist: ['value']
// }

const store = configureStore({
   reducer: {
   phonebook: bookReducer
},
   middleware: middleware,
   devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store)


export default store;
