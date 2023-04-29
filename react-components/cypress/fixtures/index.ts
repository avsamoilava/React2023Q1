import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from '../../src/store/search/searchSlice';
import FormSlice from '../../src/store/form/formSlice';
import { CharApi } from '../../src/services/CharService';

export const storeFixture = () => {
  const store = configureStore({
    reducer: {
      search: SearchReducer,
      form: FormSlice,
      [CharApi.reducerPath]: CharApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(CharApi.middleware);
    },
  });

  return store;
};
