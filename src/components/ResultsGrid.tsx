import { LazyLoadImage } from 'react-lazy-load-image-component';

interface MovieOrShow {
  id: number;
  poster_path: string;
}

interface Props {
  results: MovieOrShow[];
}

function ResultsGrid({ results }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {results.map((result) => (
        <div
          key={result.id}
          className="flex flex-col justify-center items-center w-full h-full rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
        >
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default ResultsGrid;
