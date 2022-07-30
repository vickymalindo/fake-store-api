import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/front/Categories';
import Login from './components/user/Login';
import Register from './components/user/Register';
import MainFront from './components/front/MainFront';
import Category from './components/front/Category';
import DetailProduct from './components/user/DetailProduct';
import Main from './components/user/Main';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainFront />} />
          <Route path='categories' element={<Categories />} />
          <Route path='login' element={<Login />} />
          <Route path='user' element={<Main />} />
          <Route path='daftar' element={<Register />} />
          <Route path='category/:cat' element={<Category />} />
          <Route path='product/:id' element={<DetailProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
