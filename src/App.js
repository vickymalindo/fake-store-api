import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/front/Categories';
import Login from './components/user/Login';
import Daftar from './components/user/Daftar';
import MainFront from './components/front/MainFront';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainFront />} />
          <Route path="categories" element={<Categories />} />
          <Route path="login" element={<Login />} />
          <Route path="daftar" element={<Daftar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
