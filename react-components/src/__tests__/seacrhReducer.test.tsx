import searchReducer, { setString } from '../store/search/searchSlice';

describe('search reducer', () => {
  it('should handle setString', () => {
    const initialState = { value: '' };
    const str = 'avadakedavra';
    const action = setString(str);
    const updatedState = searchReducer(initialState, action);
    expect(updatedState).toEqual({ value: str });
  });
});
