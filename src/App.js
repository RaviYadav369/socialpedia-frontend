import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import FriendListPage from './pages/FriendListPage';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<LoginPage />} /> */}
          <Route path='/' element={<HomePage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
          <Route path='/friends' element={<FriendListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
