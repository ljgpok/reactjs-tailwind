import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData1(actualData.results);
      setData2(actualData.results);
      setData3(actualData.results);
      setData4(actualData.results);
    };
    getData();
  }, [url]);
  return { data1, data2, data3, data4 };
};

export default useFetch;
