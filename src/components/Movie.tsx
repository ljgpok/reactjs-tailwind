import { useAuth0 } from '@auth0/auth0-react';

function Movie() {
  const { isAuthenticated, user } = useAuth0();

  return <div>{isAuthenticated && user?.name}</div>;
}

export default Movie;
