import React from 'react';
import { Helmet } from 'react-helmet';

export const AboutPage = ({ title }: { title: string }) => {
  return (
    <div className="page">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>About page</h1>
    </div>
  );
};
