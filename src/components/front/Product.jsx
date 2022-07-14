import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

const Product = () => {
    const [limitProducts, setLimitProducts] = useState([])

    const getLimit = async ()  => {
        const response = await axios.get('https://fakestoreapi.com/products?limit=5')
        setLimitProducts(response.data)
    } 

    useEffect(() => {
        getLimit()
    },[])
  return (
        <div className='flex flex-col lg:flex-row gap-3 justify-between items-center p-12'>
            {limitProducts.map(val => {
                return (
                    <div className="border border-gray-500 border-solid rounded-md shadow-lg px-3 py-2 w-48 h-64" key={val.id}>
                        <div className='h-20 text-center border-none rounded'>
                            <img src={val.image} alt="" className='w-full h-20' />
                        </div>
                        {val.title.length <= 32 && <p>{val.title}</p>}
                        {val.title.length > 32 && <p>{`${val.title.slice(0,32)}...`}</p>}
                        <p>$ {val.price}</p>
                        <div className='flex items-center '>
                            <FaStar className='text-yellow-400'/>
                            <p>{val.rating.rate}</p>
                        </div>
                            <p>Stock : {val.rating.count}</p>
                        <button className='bg-green-300 text-green-900 px-2 py-1 rounded-md font-semibold text-md hover:scale-95'>buy now</button>
                    </div>
                )
            })
            }
        </div>
  )
}

export default Product