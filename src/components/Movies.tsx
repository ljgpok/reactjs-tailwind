import React, { useState } from 'react';
import useFetch from './useFetch';
import { PageLayout } from './page-layout';
import { Link } from 'react-router-dom';

const Movies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data: movieData } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=1`
  );

  const { data: popularMovies } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const displayResults = searchQuery ? movieData?.popularMovies : popularMovies?.popularMovies;

  return (
    <PageLayout>
      <div>
        <div className='search-container mb-4 p-4 flex justify-center'>
          <input
            type='text'
            placeholder='Search for movies...'
            value={searchQuery}
            onChange={handleSearchChange}
            className='search-input w-1/3 p-2 border border-gray-300 rounded shadow focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='grid grid-cols-4 gap-4'>
          {displayResults &&
            displayResults.map((result: any) => (
              <Link to={`/movie/${result.id}`} key={result.id}>
                <div className='bg-white rounded shadow p-4'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                    alt={result.title}
                    className='w-full rounded'
                  />
                  <h3 className='mt-2 font-semibold'>{result.title}</h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Movies;
