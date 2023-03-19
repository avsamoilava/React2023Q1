import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export class Layout extends React.Component {
  children: React.ReactNode;

  constructor(props: LayoutProps) {
    super(props);
    this.children = props.children;
  }

  render() {
    return (
      <>
        <Header />
        {this.children}
        <Footer />
      </>
    );
  }
}
