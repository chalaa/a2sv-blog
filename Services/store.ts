import { blogsApi } from '../Services/api'; 
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () =>
  configureStore({
    reducer: {
      [blogsApi.reducerPath]: blogsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(blogsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
