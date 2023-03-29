import { Search } from '../components/UI/Search';
import React, { useEffect } from 'react';
import { products } from '../data/data';
import { CardList } from '../components/CardList';
import { PageProps } from '../types';

export const MainPage = (props: PageProps) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

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
