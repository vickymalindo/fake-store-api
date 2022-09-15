import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import handphoneIcons from '../../images/icons/handphone.png'
import jeweleryIcons from '../../images/icons/ring.png'
import menIcons from '../../images/icons/tshirt.png'
import womenIcons from '../../images/icons/woman-clothes.png'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate();

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories').then((response) => {
      setCategories(response.data)
    })
  }

  const goCategory = (cat) => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate(`/user/category/${cat}`)
    } else {
      navigate(`/category/${cat}`)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className='my-8'>
      <div className='flex flex-wrap md:flex-row gap-6 justify-center mt-2'>
        {categories.map((cat, index) => {
          return (
            <div key={index} onClick={() => goCategory(cat)} className='cursor-pointer w-24 h-25 p-1.5 hover:scale-95 text-center border border-gray-500 border-solid rounded-md shadow-lg'>
              {index === 0 && <img src={handphoneIcons} alt="hp" className='w-12 h-12 ml-4 mt-2' />}
              {index === 1 && <img src={jeweleryIcons} alt="hp" className='w-12 h-12 ml-4 mt-2' />}
              {index === 2 && <img src={menIcons} alt="hp" className='w-12 h-12 ml-4 mt-2' />}
              {index === 3 && <img src={womenIcons} alt="hp" className='w-12 h-12 ml-4 mt-2' />}
              <p className='text-gray-900'>{cat}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories