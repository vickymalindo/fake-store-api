import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

const Category = () => {
    const [categoryItems, setCategoryItems] = useState([])
    let {cat} = useParams();

    const getDetailCategory = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${cat}`)
        setCategoryItems(response.data)
    }

    useEffect(() => {
        getDetailCategory()
    }, [])

    return(
        <>
        <Nav />
            <div className="flex flex-col md:flex-row items-center gap-3 justify-between px-10 md:w-full md:h-screen">
                {categoryItems.map((category) => {
                    return (
                            <div className="border border-black rounded-lg px-3 py-2 w-36" key={category.id}>
                                <p>{category.title}</p>
                                <div className='px-2 py-1 text-center'>
                                    <img src={category.image} alt="" className='w-10 h-14' />
                                </div>
                                <p>{category.price}</p>
                                <div className='flex justify-between items-center'>
                                    <FaStar className='text-yellow-400'/>
                                    <p>{category.rating.rate}</p>
                                </div>
                                    <p>Stok : {category.rating.count}</p>
                                <button>buy now</button>
                            </div>
                        
                    )
                })}
            </div>
        </>
    )
}

export default Category;