import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Loader } from './Loader';
import { NavBar } from './Navbar';

interface Props {
  children: JSX.Element;
}

export const PageLayout: React.FC<Props> = ({ children }) => {
  const { isLoading }: any = useAuth0();

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};
