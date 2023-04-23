import { PageLayout } from './page-layout';
import MoviesCollection from './MovieCollection';
import useFetch from './useFetch';
import Slider from './Slider';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';

interface Auth0Result {
  isAuthenticated: boolean;
}

function Movie() {
  const { isAuthenticated }: Auth0Result = useAuth0();

  const { data: data1 } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data: data2 } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data: data3 } = useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data: data4 } = useFetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  return (
    <div>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <PageLayout>
          <>
            <Slider />
            {data1 && (
              <MoviesCollection results={data1.data1} title='Popular Movies' />
            )}
            {data2 && (
              <MoviesCollection
                results={data2.data2}
                title='Top Rated Movies'
              />
            )}
            {data3 && (
              <MoviesCollection results={data3.data3} title='Popular Shows' />
            )}
            {data4 && (
              <MoviesCollection results={data4.data4} title='Top Rated Shows' />
            )}
          </>
        </PageLayout>
      )}
    </div>
  );
}

export default Movie;
