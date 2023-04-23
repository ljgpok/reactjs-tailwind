interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className='my-6 w-full'>
      <input
        className='w-full p-2 rounded-md shadow-md border-gray-300 focus:outline-none focus:border-blue-500'
        type='text'
        placeholder='Search movies...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
