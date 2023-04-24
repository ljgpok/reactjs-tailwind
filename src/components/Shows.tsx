import React, { useState } from 'react';
import useFetch from './useFetch';
import { PageLayout } from './page-layout';
import { Link } from 'react-router-dom';

const Shows: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data: showData } = useFetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=1`
  );

  const { data: popularShows } = useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const displayResults = searchQuery ? showData?.popularMovies : popularShows?.popularMovies;

  return (
    <PageLayout>
      <div>
        <div className='search-container mb-4 p-4 flex justify-center'>
          <input
            type='text'
            placeholder='Search for shows...'
            value={searchQuery}
            onChange={handleSearchChange}
            className='search-input w-1/3 p-2 border border-gray-300 rounded shadow focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='grid grid-cols-4 gap-4'>
          {displayResults &&
            displayResults.map((result: any) => (
              <Link to={`/show/${result.id}`} key={result.id}>
                <div className='bg-white rounded shadow p-4'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                    alt={result.title}
                    className='w-full rounded'
                  />
                  <h3 className='mt-2 font-semibold'>{result.name}</h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Shows;
