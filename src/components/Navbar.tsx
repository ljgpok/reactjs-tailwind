import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ReactComponent as Logo } from '../logo.svg';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  return (
    <div className='sticky bg-[#b1b8d3] top-0 z-[1000] flex items-center px-10 md:px-2 h-[72px]'>
      <Logo className='h-20 w-20' />
      {isAuthenticated && (
        <div className='hidden md:flex items-center space-x-6'>
          <Link className='header-link group cursor-pointer' to='/'>
            <span className='span'>Home</span>
          </Link>
          <Link className='header-link group cursor-pointer' to='/movies'>
            <span className='span'>Movies</span>
          </Link>
          <Link className='header-link group cursor-pointer' to='/shows'>
            <span className='span'>Shows</span>
          </Link>
        </div>
      )}
      {!isAuthenticated ? (
        <button
          className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
          onClick={loginWithRedirect}
        >
          Login
        </button>
      ) : (
        <div className='flex ml-auto'>
          <img
            src={user?.picture}
            className='ml-5 mr-5 h-12 w-12 rounded-full object-cover cursor-pointer'
            alt=''
          />
          <button
            className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
            onClick={() => logout()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
