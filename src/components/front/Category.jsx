import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Category = () => {
    const [categoryItems, setCategoryItems] = useState([])
    let {cat} = useParams();
    const navigate = useNavigate()

    const handleBuy = (id) => {
        const token = localStorage.getItem('token');
        token ? navigate(`/product/${id}`) : navigate('/login');
    }

    useEffect(() => {
        const getDetailCategory = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${cat}`)
            setCategoryItems(response.data)
        }
        getDetailCategory()
    }, [cat])

    return(
        <>
        {/* {console.log(categoryItems)} */}
            <Nav />
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:w-full md:h-screen">
                    {categoryItems.map((category) => {
                        return (
                            <div className="border border-black rounded-lg px-3 py-2 w-48" key={category.id}>
                                <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis">{category.title}</p>
                                <div className='h-24 border-none rounded'>
                                    <img src={category.image} alt="" className='m-auto w-full h-24' />
                                </div>
                                <p>{category.price}</p>
                                <div className='flex items-center'>
                                    <FaStar className='text-yellow-400'/>
                                    <p className="ml-1">{category.rating.rate}</p>
                                </div>
                                <p>Stok : {category.rating.count}</p>
                                <button className="bg-green-300 text-green-900  px-2 py-1 rounded-md font-semibold text-md hover:scale-95" onClick={() => handleBuy(category.id)}>buy now</button>
                            </div>
                        )
                    })}
                </div>
            <Footer />
        </>
    )
}

export default Category;