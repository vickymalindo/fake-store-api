import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/front/Categories';
import Login from './components/user/Login';
import Daftar from './components/user/Daftar';
import MainFront from './components/front/MainFront';
import Category from './components/front/Category';
import DetailProduct from './components/user/DetailProduct';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainFront />} />
          <Route path="categories" element={<Categories />} />
          <Route path="login" element={<Login />} />
          <Route path="daftar" element={<Daftar />} />
          <Route path="category/:cat" element={<Category />} />
          <Route path="product/:id" element={<DetailProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
