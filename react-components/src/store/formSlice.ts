import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormCard } from '../types';

interface FormState {
  cards: FormCard[];
  isSuccess: boolean;
}

const initialState: FormState = {
  cards: [],
  isSuccess: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<FormCard>) => {
      state.cards.push(action.payload);
    },
    setIsSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setCards, setIsSuccess } = formSlice.actions;
export default formSlice.reducer;
