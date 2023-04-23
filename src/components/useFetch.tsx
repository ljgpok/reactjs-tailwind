import { useEffect, useState } from 'react';

interface FetchData {
  data1: any;
  data2: any;
  data3: any;
  data4: any;
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
          data1: actualData.results,
          data2: actualData.results,
          data3: actualData.results,
          data4: actualData.results,
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
