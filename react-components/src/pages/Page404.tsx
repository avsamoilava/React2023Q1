import React from 'react';
import Helmet from 'react-helmet';

export const Page404 = ({ title }: { title: string }) => {
  return (
    <div className="page page-404">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>404</h1>
      <h2>nothing founds</h2>
      <h3>all dust and ash</h3>
      <h4>and hopelessness...</h4>
    </div>
  );
};
