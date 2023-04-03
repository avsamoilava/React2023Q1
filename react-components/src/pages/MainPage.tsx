import { Search } from '../components/UI/Search';
import React, { useEffect, useState } from 'react';
import { CardList } from '../components/Card/CardList';
import { CharsApi } from '../API/charsApi';

export const MainPage = ({ title }: { title: string }) => {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CharsApi.getAll();
      console.log(data.results);
      setChars(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="page main">
      <div className="main__search">
        <Search />
      </div>
      <div className="main__catalog">
        <CardList chars={chars} />
      </div>
    </div>
  );
};
