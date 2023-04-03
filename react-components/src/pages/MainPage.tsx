import { Search } from '../components/UI/Search';
import React, { useEffect, useState } from 'react';
import { CardList } from '../components/Card/CardList';
import { CharsApi } from '../API/charsApi';

export const MainPage = ({ title }: { title: string }) => {
  const [chars, setChars] = useState([]);
  const [searchStr, setSearchStr] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CharsApi.getAll(searchStr);
      setChars(data.results);
    };
    fetchData();
  }, [searchStr]);

  const goSearch = (param: string) => {
    setSearchStr(param);
  };

  return (
    <div className="page main">
      <div className="main__search">
        <Search cb={goSearch} />
      </div>
      <div className="main__catalog">
        <CardList chars={chars} />
      </div>
    </div>
  );
};
