import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Loading from '../loader/Loading';

const Product = () => {
  const [limitProducts, setLimitProducts] = useState([])
  const navigate = useNavigate();

  const getLimit = async () => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=5')
    setLimitProducts(response.data)
  }

  const buyProduct = async (id) => {
    const getToken = localStorage.getItem('token');
    getToken ? navigate(`product/${id}`) : navigate('login')
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      getLimit()
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {limitProducts.length === 0 ?
        <Loading />
        :
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-content-around place-items-center gap-1 md:gap-3 p-1 md:p-3'>{
          limitProducts.map(val => {
            return (
              <div className="border border-gray-500 border-solid rounded-md shadow-lg px-1.5 py-1 w-36 md:px-3 md:py-2 md:w-48" key={val.id}>
                <div className='w-full border-none rounded overflow-hidden aspect-square m-auto'>
                  <img src={val.image} alt="gambar" className='m-auto object-cover object-center' />
                </div>
                <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis'>{val.title}</p>
                <p className='text-sm md:text-base'>$ {val.price}</p>
                <div className='flex items-center '>
                  <FaStar className='text-sm md:text-base text-yellow-400' />
                  <p className='text-sm md:text-base ml-1'>{val.rating.rate}</p>
                </div>
                <p className='text-sm md:text-base'>Stock : {val.rating.count}</p>
                <button className='bg-green-300 text-green-900 px-2 py-1 rounded-md font-semibold text-md hover:scale-95' onClick={() => buyProduct(val.id)}>buy now</button>
              </div>
            )
          })
        }
        </div>
      }
    </div>
  )
}

export default Product