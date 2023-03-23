import React, { FormEvent } from 'react';
import { FormCard } from '../../types';

type Props = {
  cb: (card: FormCard) => void;
};

export class Form extends React.Component<Props> {
  generalRef = React.createRef<HTMLFormElement>();
  imgUploadRef = React.createRef<HTMLInputElement>();
  messageRef = React.createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
  }

  createCard(): FormCard {
    return {
      country: this.generalRef.current?.['country'].value,
      date: this.generalRef.current?.['date'].value,
      name: this.generalRef.current?.['userName'].value,
      image: this.createImage(),
      agreement: this.generalRef.current?.['agreement'].checked,
      gender: (
        Array.from(this.generalRef.current?.['gender']).find(
          (el) => (el as HTMLInputElement).checked
        ) as HTMLInputElement
      ).value,
    };
  }

  createImage() {
    const input = this.imgUploadRef.current;
    const file: File | null = input?.files ? input.files[0] : null;
    return file ? URL.createObjectURL(file) : '';
  }

  showMessage(message: string) {
    if (this.messageRef.current) {
      this.messageRef.current.textContent = message;
    }
  }

  handlerForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.cb(this.createCard());
    this.showMessage('Data processed successfully');
    this.generalRef.current?.reset();
    setTimeout(() => {
      this.showMessage('');
    }, 3000);
  }

  render() {
    return (
      <form
        className="form-page__form form"
        onSubmit={this.handlerForm.bind(this)}
        ref={this.generalRef}
      >
        <input type="text" name="userName" placeholder="enter your name" />

        <select name="country">
          <option value="">-- choose your country --</option>
          <option value="belarus">Belarus</option>
          <option value="germany">Germany</option>
          <option value="poland">Poland</option>
        </select>

        <input type="date" name="date" placeholder="enter your name" />

        <label>
          <input type="radio" name="gender" value="male" defaultChecked /> Male
          <input type="radio" name="gender" value="female" /> Female
        </label>

        <label className="form__upload">
          <input type="file" name="image" ref={this.imgUploadRef} />
        </label>

        <label>
          <input type="checkbox" name="agreement" /> I agree to the processing of information
        </label>
        <div className="form__message" ref={this.messageRef}></div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
