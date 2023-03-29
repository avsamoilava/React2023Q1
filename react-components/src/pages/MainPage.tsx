import { Search } from '../components/UI/Search';
import React, { useEffect } from 'react';
import { products } from '../data/data';
import { CardList } from '../components/CardList';

export const MainPage = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="page main">
      <div className="main__search">
        <Search />
      </div>
      <div className="main__catalog">
        <CardList list={products} />
      </div>
    </div>
  );
};
