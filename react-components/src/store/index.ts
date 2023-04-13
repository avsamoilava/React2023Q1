import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './searchSlice';
import FormSlice from './formSlice';

export const store = configureStore({
  reducer: {
    search: SearchReducer,
    form: FormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
