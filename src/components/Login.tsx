import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from './page-layout';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <PageLayout>
      <div className='flex items-center justify-center h-screen'>
        <div>
          <h1>Please login with Auth0</h1>
          <button
            className='uppercase border px-14 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
            onClick={loginWithRedirect}
          >
            Log In
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
