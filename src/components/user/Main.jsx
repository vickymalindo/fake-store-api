import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { FaStar } from 'react-icons/fa';
import Footer from '../front/Footer';
import Nav from '../front/Nav'
import { Navigate, useNavigate } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'

const Main = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [query, setQuery] = useState('')
  const navigate = useNavigate();

  const buyProduct = async (id) => {
    navigate(`/product/${id}`)
  }

  useEffect(() =>{
    const getAll = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      setAllProduct(response.data)
    }
    const timer = setTimeout(() => {
      getAll()
    }, 1000);
    return () => clearTimeout(timer)
  }, [])

  const token = localStorage.getItem('token')
  
  return (
    <div>
      {
        token ? 
        <div>
          <Nav />
          <div className='border border-gray-600 rounded m-auto mt-5 flex items-center'>
            <input className='w-9/12' type="text" placeholder='Search here...' onChange={(e) => setQuery(e.target.value)}/>
            <button><FaSearch /></button>
          </div>
          {allProduct.length === 0 ? 
            <div className='w-full h-screen flex justify-center items-center'>
              <div className='p-3 bg-green-300 text-green-900'>...loading</div>
            </div> 
          : 
            <div className='grid grid-cols-2 md:grid-cols-5 items-center justify-items-stretch gap-1 md:gap-3 p-6 md:p-12'>
              {allProduct.map(val => {
                return (
                  <div className="border border-gray-500 border-solid rounded-md shadow-lg px-1.5 py-1 w-36 md:px-3 md:py-2 md:w-48" key={val.id}>
                    <div className='w-full border-none rounded overflow-hidden aspect-square m-auto'>
                      <img src={val.image} alt="gambar" className='m-auto object-cover object-center' />
                    </div>
                      <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis'>{val.title}</p>
                      <p className='text-sm md:text-base'>$ {val.price}</p>
                      <div className='flex items-center '>
                        <FaStar className='text-sm md:text-base text-yellow-400'/>
                        <p className='text-sm md:text-base ml-1'>{val.rating.rate}</p>
                      </div>
                        <p className='text-sm md:text-base'>Stock : {val.rating.count}</p>
                        <button className='bg-green-300 text-green-900 px-2 py-1 rounded-md font-semibold text-md hover:scale-95' onClick={() => buyProduct(val.id)}>buy now</button>
                  </div>
                  )})
              }
            </div>
          }
          <Footer />
        </div> : <Navigate to='/login'/>
      }
      
        
    </div>
  )
}

export default Main