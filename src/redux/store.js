import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

// configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
