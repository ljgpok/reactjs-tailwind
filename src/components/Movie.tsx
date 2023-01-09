import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from './page-layout';

function Movie() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <PageLayout>
      <>{isAuthenticated && user?.name}</>
    </PageLayout>
  );
}

export default Movie;
