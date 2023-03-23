import { Form } from '../components/Form/Form';
import React from 'react';
import { FormCard } from '../types';
import { FormResultCard } from '../components/Form/FormResultCard';

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

  addCard(card: FormCard): void {
    this.setState({ cards: [...this.state.cards, card] });
    console.log(this.state);
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
        <div className="_container">
          <Form cb={this.addCard.bind(this)} />
          <div className="form-page__cards cards-gallery">
            {this.state.cards.map((card, index) => (
              <FormResultCard key={card.name + index} card={card} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
