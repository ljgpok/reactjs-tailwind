import { PageLayout } from './page-layout';
import MoviesCollection from './MovieCollection';
import useFetch from './useFetch';
import Slider from './Slider';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';

function Movie() {
  const { isAuthenticated }: any = useAuth0();

  const { data1 } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data2 } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data3 } = useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data4 } = useFetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  return (
    <div>
      {/* {!isAuthenticated ? (
        <Login />
      ) : ( */}
        <PageLayout>
          <>
            <Slider />
            <MoviesCollection results={data1} title='Popular Movies' />
            <MoviesCollection results={data2} title='Top Rated Movies' />
            <MoviesCollection results={data3} title='Popular Shows' />
            <MoviesCollection results={data4} title='Top Rated Shows' />
          </>
        </PageLayout>
       {/* )} */}
    </div>
  );
}

export default Movie;
