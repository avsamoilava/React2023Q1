import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { CharResponse } from 'types';

export const CharApi = createApi({
  reducerPath: 'charApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    fetchAllChars: build.query<CharResponse, string>({
      query: (searchStr = '') => ({
        url: '/character',
        params: {
          name: searchStr,
        },
      }),
    }),
  }),
});

export const { useFetchAllCharsQuery } = CharApi;
