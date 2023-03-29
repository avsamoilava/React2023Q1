import React, { useEffect } from 'react';

export const Page404 = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="page page-404">
      <h1>404</h1>
      <h2>nothing founds</h2>
      <h3>all dust and ash</h3>
      <h4>and hopelessness...</h4>
    </div>
  );
};
