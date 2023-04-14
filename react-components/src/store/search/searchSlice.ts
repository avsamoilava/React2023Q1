import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setString: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setString } = searchSlice.actions;
export default searchSlice.reducer;
