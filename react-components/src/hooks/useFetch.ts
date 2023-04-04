import { useState } from 'react';

type CB = () => Promise<void>;

export const useFetch = (cb: CB): [() => Promise<void>, boolean, boolean] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(true);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await cb();
      setError(true);
    } catch (e) {
      e instanceof Response && setError(e.ok);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
