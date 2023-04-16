import '../../setupTests';
//import { renderHook } from '@testing-library/react-hooks';
import { renderHook, waitFor } from '@testing-library/react';
import { mock } from './mockData';
import { Provider } from 'react-redux';
import { useFetchAllCharsQuery } from '../services/CharService';
import { store } from '../store';
import { ReactNode } from 'react';

describe('fetchChars', () => {
  it('should fetch chars from API', async () => {
    const { result } = renderHook(() => useFetchAllCharsQuery(''), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      ),
    });
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => result.current.isFetching === false);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mock);
  });
});
