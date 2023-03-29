import React, { useEffect } from 'react';
import { PageProps } from '../types';

export const Page404 = (props: PageProps) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div className="page page-404">
      <h1>404</h1>
      <h2>nothig founds</h2>
      <h3>all dust and ash</h3>
      <h4>and hopelessness...</h4>
    </div>
  );
};
