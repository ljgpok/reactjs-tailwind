import React from 'react';

export const Loader: React.FC = () => {
  const loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';

  return (
    <div className='h-10 w-10 m-auto mt-20'>
      <img src={loadingImg} alt='Loading...' />
    </div>
  );
};
