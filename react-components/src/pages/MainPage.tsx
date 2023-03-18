import { Search } from '../components/UI/Search';
import React from 'react';
import { products } from '../data/data';
import { CardList } from '../components/CardList';
import { PageProps } from '../types';

export class MainPage extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <div className="page main">
        <div className="main__search">
          <Search />
        </div>
        <div className="main__catalog">
          <CardList list={products} />
        </div>
      </div>
    );
  }

  componentDidMount(): void {
    document.title = this.props.title;
  }

  componentWillUnmount(): void {
    document.title = '';
  }
}
