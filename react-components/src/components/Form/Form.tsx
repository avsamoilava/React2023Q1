import React, { FormEvent } from 'react';
import { FormCard, FormErrors } from '../../types';
import { nameValidate, dateValidate, createImage } from '../../utils';

type Props = {
  cb: (card: FormCard) => void;
};

type State = {
  errors: FormErrors;
  success: string;
};

export class Form extends React.Component<Props> {
  generalRef = React.createRef<HTMLFormElement>();
  imgUploadRef = React.createRef<HTMLInputElement>();

  state: State = {
    errors: {
      userName: '',
      country: '',
      date: '',
      image: '',
      agreement: '',
    },
    success: '',
  };

  constructor(props: Props) {
    super(props);
  }

  async validate() {
    const errors = {
      userName: nameValidate(this.generalRef.current?.['userName'].value)
        ? ''
        : 'enter correct name; first and last name must start with a capital letter and contain at least three characters',
      country: this.generalRef.current?.['country'].value ? '' : 'choose country',
      date: dateValidate(this.generalRef.current?.['date'].value) ? '' : 'enter correct date',
      image: this.imgUploadRef.current?.value ? '' : 'upload some file',
      agreement: this.generalRef.current?.['agreement'].checked
        ? ''
        : 'consent to the processing of information',
    };
    const isValid = Object.values(errors).every((elem) => !elem);
    this.setState({ errors: errors, success: isValid ? 'Data processed successfully' : '' });
    return isValid;
  }

  createCard(): FormCard {
    return {
      country: this.generalRef.current?.['country'].value,
      date: this.generalRef.current?.['date'].value,
      name: this.generalRef.current?.['userName'].value,
      image: createImage(this.imgUploadRef),
      gender: (
        Array.from(this.generalRef.current?.['gender']).find(
          (el) => (el as HTMLInputElement).checked
        ) as HTMLInputElement
      ).value,
    };
  }

  async handlerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = await this.validate();
    if (isValid) {
      this.props.cb(this.createCard());
      this.generalRef.current?.reset();
      setTimeout(() => {
        this.setState({ success: '' });
      }, 3000);
    }
  }

  render() {
    return (
      <form
        className="form-page__form form"
        onSubmit={this.handlerSubmit.bind(this)}
        onChange={() => {
          this.setState({
            errors: { userName: '', country: '', date: '', image: '', agreement: '' },
          });
        }}
        ref={this.generalRef}
      >
        <input
          type="text"
          name="userName"
          placeholder="enter your first-name and last-name"
          role="name-input"
        />
        <span className="form__error">{this.state.errors.userName}</span>

        <select name="country" role="select">
          <option value="">-- choose your country --</option>
          <option value="belarus">Belarus</option>
          <option value="germany">Germany</option>
          <option value="poland">Poland</option>
        </select>
        <span className="form__error">{this.state.errors.country}</span>

        <input type="date" name="date" placeholder="enter your name" role="date-input" />
        <span className="form__error">{this.state.errors.date}</span>

        <label>
          <input type="radio" name="gender" defaultValue="male" defaultChecked /> Male
          <input type="radio" name="gender" defaultValue="female" /> Female
        </label>

        <label className="form__upload">
          <input type="file" name="image" ref={this.imgUploadRef} />
        </label>
        <span className="form__error">{this.state.errors.image}</span>

        <label>
          <input type="checkbox" name="agreement" />
          {'I agree to the processing of information'}
        </label>
        <span className="form__error">{this.state.errors.agreement}</span>

        <div className="form__message">{this.state.success}</div>
        <button className="form__btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
