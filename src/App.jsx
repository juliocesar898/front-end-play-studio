import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import BetFormPage from './pages/BetFormPage';
import BetsPage from './pages/BetsPage';
import { BetProvider } from './context/BetsContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <AuthProvider>
      <BetProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path='/bets' element={<BetsPage />} />
              <Route path='/welcome' element={<WelcomePage />} />
              <Route path='/add-bet' element={<BetFormPage />} />
              <Route path='/bet/:id' element={<h1>Update Bet</h1>} />
              <Route path='/profile' element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BetProvider>
    </AuthProvider>
  );
}

export default App;
