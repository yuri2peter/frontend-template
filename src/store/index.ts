import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { exampleSlice } from './reducers/example';

const reducers = combineReducers({
  example: exampleSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const { dispatch: basicDispatch } = store;
const getRootState = () => store.getState();

export { store, getRootState, basicDispatch };
