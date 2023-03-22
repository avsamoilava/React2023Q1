import React, { FormEvent } from 'react';
import { FormCard } from '../../types';

export class Form extends React.Component<object, FormCard> {
  ref = React.createRef<HTMLFormElement>();
  state: FormCard = {
    country: '',
    date: '',
    gender: '',
    name: '',
    image: '',
    agreement: false,
  };

  handlerForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({
      country: this.ref.current?.['country'].value,
      date: this.ref.current?.['date'].value,
      name: this.ref.current?.['userName'].value,
      image: this.ref.current?.['image'].value,
      agreement: this.ref.current?.['agreement'].checked,
      gender: (
        Array.from(this.ref.current?.['gender']).find(
          (el) => (el as HTMLInputElement).checked
        ) as HTMLInputElement
      ).value,
    });
  }

  componentDidMount(): void {
    console.log(this.state);
  }

  render() {
    return (
      <form
        className="form-page__form form"
        onSubmit={(e) => this.handlerForm.call(this, e)}
        ref={this.ref}
      >
        <label>
          Name
          <input type="text" name="userName" placeholder="enter your name" />
        </label>

        <select name="country">
          <option value="_init">choose country</option>
          <option value="belarus">Belarus</option>
          <option value="germany">Germany</option>
          <option value="poland">Poland</option>
        </select>

        <label>
          Date
          <input type="date" name="date" placeholder="enter your name" />
        </label>

        <label>
          Gender
          <input type="radio" name="gender" value="male" defaultChecked /> Male
          <input type="radio" name="gender" value="female" /> Female
        </label>

        <label>
          Upload some file
          <input type="file" name="image" />
        </label>

        <label>
          <input type="checkbox" name="agreement" /> I agree to the processing of information
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
