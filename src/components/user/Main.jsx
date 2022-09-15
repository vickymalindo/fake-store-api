import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaStar, FaSearch } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '../front/Footer';
import Nav from '../front/Nav';
import Message from '../loader/Message';
import Thumbnail from '../front/Thumbnail';
import Categories from '../front/Categories';
import Loading from '../loader/Loading';

function Main() {
  const [allProduct, setAllProduct] = useState([]);
  const [containerSearch, setContainerSearch] = useState(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const buyProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const search = () => {
    if (query) {
      const productsSearch = allProduct.filter((results) => results.title.toLowerCase().includes(query));
      setContainerSearch(productsSearch);
    } else {
      setContainerSearch(allProduct);
    }
  };

  const handleClickPress = (e) => {
    const code = e.key || e.which
    if (code === 'Enter' || code === undefined) {
      search()
    }
  }

  useEffect(() => {
    const getAll = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setAllProduct(response.data);
    };
    const timer = setTimeout(() => {
      getAll();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const token = localStorage.getItem('token');

  return (
    <div>
      {
        token
          ? (
            <div>
              <Nav />
              <div className="container border border-gray-600 rounded m-auto mt-5 flex items-center px-3 py-1 gap-1">
                <input className="w-full focus:outline-none" type="text" placeholder="Search here..." onKeyPress={handleClickPress} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleClickPress}><FaSearch className="bg-green-300 p-1.5 text-3xl rounded" /></button>
              </div>
              <Thumbnail />
              <Categories />
              {
                containerSearch?.length === 0 && <Message status="Oops... Not Found" />
              }
              {allProduct.length === 0
                ? <Loading />
                : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-center place-content-around gap-1 md:gap-3 gap-y-3 p-1.5 md:p-2.5">
                    {(containerSearch || allProduct).map((val) => (
                      <div className="border border-gray-500 border-solid rounded-md shadow-lg px-1.5 py-1 w-36 md:px-3 md:py-2 md:w-48" key={val.id}>
                        <div className="w-full border-none rounded overflow-hidden aspect-square m-auto">
                          <img src={val.image} alt="gambar" className="m-auto object-cover object-center" />
                        </div>
                        <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis">{val.title}</p>
                        <p className="text-sm md:text-base">
                          $
                          {val.price}
                        </p>
                        <div className="flex items-center ">
                          <FaStar className="text-sm md:text-base text-yellow-400" />
                          <p className="text-sm md:text-base ml-1">{val.rating.rate}</p>
                        </div>
                        <p className="text-sm md:text-base">
                          Stock :
                          {val.rating.count}
                        </p>
                        <button className="bg-green-300 text-green-900 px-2 py-1 rounded-md font-semibold text-md hover:scale-95" onClick={() => buyProduct(val.id)}>buy now</button>
                      </div>
                    ))}
                  </div>
                )
              }
              <Footer />
            </div>
          ) : <Navigate to="/login" />
      }
    </div>
  );
}

export default Main;
