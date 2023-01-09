import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData.results);
    };
    getData();
  }, [url]);
  return { data };
};

export default useFetch;
