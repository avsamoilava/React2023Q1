import { Search } from '../components/UI/Search';
import React, { useEffect, useState } from 'react';
import { CardList } from '../components/Card/CardList';
import { CharsApi } from '../API/charsApi';
import { Loader } from '../components/UI/Loader';
import { useFetch } from '../hooks/useFetch';

export const MainPage = ({ title }: { title: string }) => {
  const [chars, setChars] = useState([]);
  const [searchStr, setSearchStr] = useState(localStorage.getItem('searchValue') || '');

  const [fetchData, isLoading, error] = useFetch(async () => {
    const data = await CharsApi.getAll(searchStr);
    setChars(data.results);
  });

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
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
        {isLoading && <Loader />}
        {chars && error ? <CardList chars={chars} /> : <h1>Characters not found</h1>}
      </div>
    </div>
  );
};
