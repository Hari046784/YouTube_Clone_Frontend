import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import SignIn from './pages/SignIn/SignIn';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home/Home';
import { useSelector } from 'react-redux';
import Search from './pages/Search/Search';
import Video from './pages/Video/Video';

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/signin' element={currentUser ? <Home /> : <SignIn />}/>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home type='random' />} />
            <Route path='trends' element={<Home type='trend' />} />
            <Route path='subscriptions' element={<Home type='sub' />} />
            <Route path='search' element={<Search />} />
            <Route path='video'>
              <Route path=':id' element={<Video />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;