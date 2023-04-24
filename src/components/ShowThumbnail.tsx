import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ShowThumbnail({ result }: any) {
  const navigate = useNavigate();

  const BASE_URL = 'https://image.tmdb.org/t/p/';
  const smallImageUrl = `${BASE_URL}w185${result.poster_path}`;
  const mediumImageUrl = `${BASE_URL}w342${result.poster_path}`;
  const largeImageUrl = `${BASE_URL}w500${result.poster_path}`;

  const handleClick = () => {
    navigate(`/show/${result.id}`);
  };

  return (
    <div
      className='flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300'
      onClick={handleClick}
    >
      <picture>
        <source media='(max-width: 480px)' srcSet={smallImageUrl} />
        <source media='(max-width: 768px)' srcSet={mediumImageUrl} />
        <source srcSet={largeImageUrl} />
        <LazyLoadImage
          src={smallImageUrl}
          className='rounded-lg'
          alt=''
          width={330}
          height={210}
        />
      </picture>
    </div>
  );
}

export default ShowThumbnail;
