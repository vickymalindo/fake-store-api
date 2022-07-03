import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = () => {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories').then((response) => {
      setCategories(response.data)
    })
  }
  useEffect(() => {
    getCategories()
  }, [])
  
  return (
    <div className='flex flex-wrap md:flex-row gap-6 justify-center mt-2'>
      {categories.map((cat, index) => {
        return (
          <div key={index} className='w-24 h-24 p-1.5 text-center hover:scale-95 bg-gray-700'>
            <p>{cat}</p>
          </div>
        )
      })}
      {/* <div className='w-20 h-20 p-1.5 hover:scale-95 bg-green-700'>
        <p>jewelery</p>
      </div>
      <div className='w-20 h-20 p-1.5 hover:scale-95 bg-yellow-700'>
        <p>men's clothing</p>
      </div>
      <div className='w-20 h-20 p-1.5 hover:scale-95 bg-red-700'>
        <p>women's clothing</p>
      </div> */}
    </div>
  )
}

export default Categories