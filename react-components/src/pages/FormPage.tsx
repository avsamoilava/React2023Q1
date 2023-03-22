import React, { FormEvent } from 'react';

type FormProps = {
  title: string;
};

export class FormPage extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  componentDidMount(): void {
    document.title = this.props.title;
  }

  componentWillUnmount(): void {
    document.title = '';
  }

  handlerForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(Array.from(form.elements));
    console.log(
      Array.from(form.elements).map((el) => {
        const { name, value, type, localName } = el as HTMLInputElement | HTMLSelectElement;
        return { name, value, type, localName };
      })
    );
  }

  render() {
    return (
      <div className="form-page page">
        <form className="form-page__form form" onSubmit={this.handlerForm}>
          <label>
            Text
            <input type="text" name="user-name" placeholder="enter your name" required />
          </label>

          <select name="select-country" required>
            <option value="_init">choose country</option>
            <option value="belarus">Belarus</option>
            <option value="germany">Germany</option>
            <option value="poland">Poland</option>
          </select>

          <label>
            Date
            <input type="date" name="date" placeholder="enter your name" required />
          </label>

          <label>
            Gender
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
          </label>

          <label>
            Upload some file
            <input type="file" name="user-file" required />
          </label>

          <label>
            <input type="checkbox" name="agreement" /> I agree to the processing of information
          </label>

          <button type="submit">Submit</button>
        </form>

        <div className="form-page__cards"></div>
      </div>
    );
  }
}
