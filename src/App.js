import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/front/Categories';
import Login from './components/user/Login';
import Register from './components/user/Register';
import MainFront from './components/front/MainFront';
import Category from './components/front/Category';
import DetailProduct from './components/user/DetailProduct';
import Main from './components/user/Main';
import Cart from './components/user/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainFront />} />
        <Route path='categories' element={<Categories />} />
        <Route path='login' element={<Login />} />
        <Route path='daftar' element={<Register />} />
        <Route path='product/:id' element={<DetailProduct />} />
        <Route path='user' element={<Main />} />
        <Route path='user/cart' element={<Cart />} />
        <Route path='category/:cat' element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
