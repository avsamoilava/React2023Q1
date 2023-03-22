import { Form } from '../components/Form/Form';
import React from 'react';
import { FormCard } from '../types';

type Props = {
  title: string;
};

type State = {
  cards: FormCard[];
};

export class FormPage extends React.Component<Props, State> {
  state: State = { cards: [] };

  constructor(props: Props) {
    super(props);
  }

  componentDidMount(): void {
    document.title = this.props.title;
    console.log(this.state);
  }

  componentWillUnmount(): void {
    document.title = '';
  }

  render() {
    return (
      <div className="form-page page">
        <Form />
        <div className="form-page__cards"></div>
      </div>
    );
  }
}
