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
                    <div className="border border-black rounded-lg px-3 py-2 w-36" key={val.id}>
                        <p>{val.title}</p>
                        <div className='px-2 py-1 text-center'>
                            <img src={val.image} alt="" className='w-10 h-14' />
                        </div>
                        <p>{val.price}</p>
                        <div className='flex justify-between items-center'>
                            <FaStar className='text-yellow-400'/>
                            <p>{val.rating.rate}</p>
                        </div>
                            <p>Stok : {val.rating.count}</p>
                        <button>buy now</button>
                    </div>
                )
            })
            }
        </div>
  )
}

export default Product