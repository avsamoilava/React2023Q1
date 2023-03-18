import React from 'react';
import { PageProps } from '../types';

export class AboutPage extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <h1>About page</h1>
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
