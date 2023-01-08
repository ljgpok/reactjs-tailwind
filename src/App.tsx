import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Loader } from './components/Loader';
import { AuthenticationGuard } from './components/authentication-guard';

import './App.css';
import Login from './components/Login';
import Movie from './components/Movie';

function App() {
  const { isAuthenticated, isLoading }: any = useAuth0();
  console.log('isauth', isAuthenticated);

  if (isLoading) {
    return (
      <div className='page-layout'>
        <Loader />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <Route path='/' element={<Login />} />
        ) : (
          <Route path='/' element={<AuthenticationGuard component={Movie} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
