import { render, screen } from '@testing-library/react';
import { Form } from '../components/Form/Form';

describe('check render form elements in Form component', () => {
  it('should contain input "text"', () => {
    render(
      <Form
        cb={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('name-input')).toBeInTheDocument();
  });

  it('should contain input "date"', () => {
    render(
      <Form
        cb={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('date-input')).toBeInTheDocument();
  });

  it('should contain select', () => {
    render(
      <Form
        cb={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('select')).toBeInTheDocument();
  });

  it('select should contain 4 option-elements', () => {
    render(
      <Form
        cb={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getAllByRole('option').length).toBe(4);
  });

  it('should contain 2 inputs radio', () => {
    render(
      <Form
        cb={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getAllByRole('radio').length).toBe(2);
  });

  it('should contain checkbox', () => {
    render(
      <Form
        cb={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should contain submit button', () => {
    render(
      <Form
        cb={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
