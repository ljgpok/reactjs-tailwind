import { PageLayout } from './page-layout';
import MoviesCollection from './MoviesCollection';
import useFetch from './useFetch';
import Slider from './Slider';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import ShowsCollection from './ShowsCollection';

interface Auth0Result {
  isAuthenticated: boolean;
}

function HomePage() {
  const { isAuthenticated }: Auth0Result = useAuth0();

  const { data: popularMovies } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data: topMovies } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data: popularShows } = useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  const { data: topShows } = useFetch(
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
            {popularMovies && (
              <MoviesCollection
                results={popularMovies.popularMovies}
                title='Popular Movies'
              />
            )}
            {topMovies && (
              <MoviesCollection
                results={topMovies.topMovies}
                title='Top Rated Movies'
              />
            )}
            {popularShows && (
              <ShowsCollection
                results={popularShows.popularShows}
                title='Popular Shows'
              />
            )}
            {topShows && (
              <ShowsCollection
                results={topShows.topShows}
                title='Top Rated Shows'
              />
            )}
          </>
        </PageLayout>
      {/* )} */}
    </div>
  );
}

export default HomePage;
