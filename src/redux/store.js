import { configureStore } from '@reduxjs/toolkit'
import userReducer from './auth/userSlice';
import profileReducer from './auth/profileSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
});

/* const rootReducer = (state, action) => {
  if (action.type === 'counter/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};
 */

const allReducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'all/logOut') {
    console.log("test")
    state = undefined;
  }


  return allReducers(state, action);
}


const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer: persistedReducer, rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})