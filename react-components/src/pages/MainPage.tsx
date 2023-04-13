import { Search } from '../components/UI/Search';
import { useEffect, useState } from 'react';
import { CardList } from '../components/Card/CardList';
import { CharsApi } from '../API/charsApi';
import { Loader } from '../components/UI/Loader';
import { useAppSelector } from '../hooks';

export const MainPage = ({ title }: { title: string }) => {
  const [chars, setChars] = useState([]);
  const [searchStr, setSearchStr] = useState(localStorage.getItem('searchValue') || '');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await CharsApi.getAll(searchStr);
      setChars(data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [searchStr]);

  const goSearch = (param: string) => {
    setSearchStr(param);
  };

  return (
    <div className="page main">
      <div className="main__search">
        <Search />
      </div>
      <div className="main__catalog">
        {isLoading && <Loader />}
        {chars ? <CardList chars={chars} /> : <h1>Characters not found</h1>}
      </div>
    </div>
  );
};
