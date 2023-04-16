import formReducer, { setCards, setIsSuccess } from '../store/form/formSlice';

describe('Form reducer', () => {
  it('should handle setCard', () => {
    const initialState = {
      cards: [],
      isSuccess: false,
    };
    const card = {
      userName: 'Ivan Ivanov',
      country: 'belarus',
      date: '2023-12-12',
      image: 'image.png',
      gender: 'male',
      agreement: true,
    };
    const action = setCards(card);
    const updatedState = formReducer(initialState, action);
    expect(updatedState).toEqual({
      cards: [card],
      isSuccess: false,
    });
  });
  it('should handle setCard', () => {
    const initialState = {
      cards: [],
      isSuccess: false,
    };
    const action = setIsSuccess(true);
    const updatedState = formReducer(initialState, action);
    expect(updatedState).toEqual({
      cards: [],
      isSuccess: true,
    });
  });
});
