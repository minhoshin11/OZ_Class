import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to={'/'}>Home </Link>
      <Link to={'/about'}>About </Link>
      <Link to={'/profile'}>Profile </Link>
    {/* a태그를 썼으면 새로고침이 계속 되니까 안좋아서 Link태그로 쓰는 것임.*/}
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About/>} />
    </Routes>
    <footer>footer입니다.</footer>
    </BrowserRouter>
  );
}

export default App;
