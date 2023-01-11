import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthenticationGuard } from './components/authentication-guard';

import './App.css';
import Movie from './components/Movie';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route
          path='/:id'
          element={<AuthenticationGuard component={DetailsPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
