import { useState } from 'react';
import ResultsGrid from './ResultsGrid';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  placeholder: string;
  onSearch: Dispatch<SetStateAction<string>>;
}

function SearchInput({ placeholder }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      );
      const data = await response.json();
      setSearchResults(data.results);
      onSearch(searchQuery); // add this line to update the search query in the parent component
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='relative'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full py-2 pl-10 pr-3 text-sm leading-tight text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline'
        />
        <button
          type='submit'
          className='absolute top-0 bottom-0 left-0 flex items-center justify-center w-10 h-full text-gray-400'
        >
          <svg viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
            <path
              fillRule='evenodd'
              d='M14.707,13.293l4.4,4.4l-1.414,1.414l-4.4,-4.4C12.672,14.527 11.375,15 10,15C5.582,15 2,11.418 2,7C2,2.582 5.582,0 10,0C14.418,0 18,3.582 18,8C18,9.375 17.527,10.672 16.707,11.586L14.707,13.293ZM10,13C13.313,13 16,10.314 16,7C16,3.686 13.313,1 10,1C6.687,1 4,3.686 4,7C4,10.314 6.687,13 10,13Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </form>
      {searchQuery && searchResults && (
        <div className='absolute top-full left-0 w-full z-10 bg-gray-800 text-gray-100 shadow'>
          <ResultsGrid results={searchResults} />
        </div>
      )}
    </div>
  );
}

export default SearchInput;
function onSearch(searchQuery: string) {
    throw new Error('Function not implemented.');
}

