import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthenticationGuard } from './components/authentication-guard';

import './App.css';
import Login from './components/Login';
import Movie from './components/Movie';

function App() {
  const { isAuthenticated }: any = useAuth0();
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
