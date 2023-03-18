import React from 'react';
import { PageProps } from '../types';

export class Page404 extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return <div className="page page-404">404</div>;
  }

  componentDidMount(): void {
    document.title = this.props.title;
  }

  componentWillUnmount(): void {
    document.title = '';
  }
}
