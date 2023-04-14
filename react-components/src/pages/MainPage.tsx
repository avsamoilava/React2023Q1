import { Search } from '../components/UI/Search';
import { CardList } from '../components/Card/CardList';
import { Loader } from '../components/UI/Loader';
import { useAppSelector } from '../hooks';
import { useFetchAllCharsQuery } from '../services/CharService';
import { Helmet } from 'react-helmet';

export const MainPage = ({ title }: { title: string }) => {
  const { data, isLoading, isSuccess } = useFetchAllCharsQuery(
    useAppSelector((state) => state.search).value
  );

  return (
    <div className="page main">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="main__search">
        <Search />
      </div>
      <div className="main__catalog">
        {isSuccess ? (
          <CardList chars={data?.results} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <h1>Characters not found</h1>
        )}
      </div>
    </div>
  );
};
