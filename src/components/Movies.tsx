import React, { useState } from 'react';
import useFetch from './useFetch';
import MoviesCollection from './MovieCollection';
import { PageLayout } from './page-layout';

interface MovieSearchProps {
  query: string;
}

const Movies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data: data1 } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=1`
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <PageLayout>
      <div>
        <div className='search-container'>
          <input
            type='text'
            placeholder='Search for movies...'
            value={searchQuery}
            onChange={handleSearchChange}
            className='search-input'
          />
        </div>
        {data1 && (
          <MoviesCollection results={data1.data1} title='Search Results' />
        )}
      </div>
    </PageLayout>
  );
};

export default Movies;
