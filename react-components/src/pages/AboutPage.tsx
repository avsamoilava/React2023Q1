import React, { useEffect } from 'react';
import { PageProps } from '../types';

export const AboutPage = (props: PageProps) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div className="page">
      <h1>About page</h1>
    </div>
  );
};
