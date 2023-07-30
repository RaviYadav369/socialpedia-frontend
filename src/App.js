import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import FriendListPage from './pages/FriendListPage';
import SignupPage from './pages/SignupPage';
import { useDispatch } from 'react-redux';
import { getMySelf } from './store/reducers/user/user.action';
import { getPost } from './store/reducers/post/post.action';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMySelf());
    dispatch(getPost())
  }, [localStorage])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<SignupPage />} />
          <Route path='/feed' element={<HomePage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
          <Route path='/friends' element={<FriendListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
