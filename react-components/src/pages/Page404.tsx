import React from 'react';
import { PageProps } from '../types';

export class Page404 extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <div className="page page-404">
        <h1>404</h1>
        <h2>nothig founds</h2>
        <h3>all dust and ash</h3>
        <h4>and hopelessness...</h4>
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
