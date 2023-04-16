import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './search/searchSlice';
import FormSlice from './form/formSlice';
import { CharApi } from '../services/CharService';

export const store = configureStore({
  reducer: {
    search: SearchReducer,
    form: FormSlice,
    [CharApi.reducerPath]: CharApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(CharApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
