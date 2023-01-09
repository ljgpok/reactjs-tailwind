import { PageLayout } from './page-layout';
import MoviesCollection from './MovieCollection';
import useFetch from './useFetch';

function Movie() {
  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  return (
    <PageLayout>
      <MoviesCollection results={data} title='Popular Movies' />
    </PageLayout>
  );
}

export default Movie;
