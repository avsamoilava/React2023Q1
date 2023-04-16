import { render, screen } from '@testing-library/react';
import { Form } from '../components/Form/Form';
import { Provider } from 'react-redux';
import { mockStore, initialState } from './mockData';

describe('check render form elements in Form component', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  it('should contain input "text"', () => {
    expect(screen.getByRole('name-input')).toBeInTheDocument();
  });

  it('should contain input "date"', () => {
    expect(screen.getByRole('date-input')).toBeInTheDocument();
  });

  it('should contain select', () => {
    expect(screen.getByRole('select')).toBeInTheDocument();
  });

  it('select should contain 4 option-elements', () => {
    expect(screen.getAllByRole('option').length).toBe(4);
  });

  it('should contain 2 inputs radio', () => {
    expect(screen.getAllByRole('radio').length).toBe(2);
  });

  it('should contain checkbox', () => {
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should contain submit button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
