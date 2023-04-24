import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthenticationGuard } from './components/authentication-guard';

import './App.css';
import HomePage from './components/HomePage';
import Movies from './components/Movies';
import Shows from './components/Shows';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/shows' element={<Shows />} />
        <Route
          path='/movie/:id'
          element={<AuthenticationGuard component={DetailsPage} />}
        />
        <Route
          path='/show/:id'
          element={<AuthenticationGuard component={DetailsPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
