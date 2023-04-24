import { useEffect, useState } from 'react';

interface FetchData {
  popularMovies: any;
  topMovies: any;
  popularShows: any;
  topShows: any;
}

interface UseFetchResult {
  data: FetchData | null;
  error: string | null;
}

const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<FetchData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData({
          popularMovies: actualData.results,
          topMovies: actualData.results,
          popularShows: actualData.results,
          topShows: actualData.results,
        });
      } catch (err: any) {
        setError(err.message);
      }
    };
    getData();
  }, [url]);

  return { data, error };
};

export default useFetch;
