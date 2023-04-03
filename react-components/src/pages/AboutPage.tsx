import React, { useEffect } from 'react';

export const AboutPage = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="page">
      <h1>About page</h1>
    </div>
  );
};
