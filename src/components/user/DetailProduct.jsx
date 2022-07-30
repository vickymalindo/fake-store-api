import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
import Footer from "../front/Footer";
import Nav from "../front/Nav";
import { FaStar, FaRegStar, FaCartPlus} from 'react-icons/fa'

const DetailProduct = () => {
    const [productId, setProductId] = useState({})
    const [quantity, setQuantity] = useState(0)
    const {id} = useParams();

    const changeQuantity = (symbol) => {
        if(symbol === '-') {
            return setQuantity((prev) => prev - 1 === -1 ? 0 : prev - 1)
        }
        setQuantity((prev) => prev + 1)
    }

    useEffect(() => {
        const getDetailProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProductId(response.data)
        }
        getDetailProduct();
    }, [id])

    if(Object.entries(productId).length === 0){
        return <div>Loading....</div>
    }

    return (
        <>
            <Nav />
            <div className="w-full h-screen container flex flex-col md:flex-row justify-center md:justify-beetwen items-center gap-7 px-4 mb-10 md:mb-0 mt-16 sm:mt-16 md:mt-0">
                <img src={productId.image} alt="" className="w-64 h-96"/>
                <div>
                    <h3 className="font-bold text-lg sm:text-2xl">{productId.title}</h3>
                    <div className="flex items-center mt-3">
                        <span className="text-green-700 text-base decoration-solid">{productId?.rating?.rate}</span>
                        {(productId?.rating?.rate > 0 && productId?.rating?.rate <= 1.0) && 
                            <div className="flex items-center justify-center gap-1">
                                <FaRegStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/> 
                                <FaRegStar className="text-yellow-400"/> 
                                <FaRegStar className="text-yellow-400"/>
                            </div>}
                        {(productId?.rating?.rate > 1.0 && productId?.rating?.rate <= 2.0) && 
                            <div className="flex justify-center items-center gap-1">
                                <FaStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                            </div>}
                        {(productId?.rating?.rate > 2 && productId?.rating?.rate <= 3.0) && 
                            <div className="flex justify-center items-center gap-1">
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                            </div>}
                        {(productId?.rating?.rate > 3 && productId?.rating?.rate <= 4.0) && 
                            <div className="flex justify-center items-center gap-1">
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                            </div>}
                        {(productId?.rating?.rate > 4 && productId?.rating?.rate < 5.0) && 
                            <div className="flex justify-center items-center gap-1">
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaRegStar className="text-yellow-400"/>
                            </div>}
                        {productId?.rating?.rate === 5.0 && 
                            <div className="flex justify-center items-center gap-1">
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                                <FaStar className="text-yellow-400"/>
                            </div>
                        }
                    </div>
                    <h4 className="text-lg lg:text-xl font-semibold text-green-700 tracking-wide lg:tracking-wider">$ {productId.price}</h4>
                    <div className="mt-3">
                        <div className="flex items-center gap-1">
                            <span className="mr-2">Voucher Toko</span>
                            <span className="mr-2 bg-green-300 text-green-800 px-2 py-1 border border-none rounded">Rp. 1Rb Off</span>
                            <span className="mr-2 bg-green-300 text-green-800 px-2 py-1 border border-none rounded">Rp. 2Rb Off</span>
                            <span className="bg-green-300 text-green-800 px-2 py-1 border border-none rounded">Rp. 5Rb Off</span>
                        </div>
                        <div className="mt-3.5 flex items-center gap-1">
                            <span className="mr-3">Paket Diskon</span>
                            <span className="text-green-500 px-2 py-1 border border-green-500 rounded">Pilih 5, diskon Rp. 3000</span>
                        </div>
                        <div className="mt-3.5 flex items-center gap-4">
                            <span className="mr-8">Proteksi</span>
                            <span>Proteksi Kerusakan Produk</span>
                            <Link to='#' className="text-blue-400">Learn More</Link>
                        </div>
                        <div className="mt-3.5 flex items-center">
                            <span className="mr-8">Kuantitas</span>
                            <button className="border border-gray-300 px-3 py-1" onClick={() => changeQuantity('-')}>-</button>
                            <span className="border border-gray-300 px-3 py-1">{quantity}</span>
                            <button className="border border-gray-300 px-3 py-1" onClick={() => changeQuantity('+')}>+</button>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <button className="flex items-center gap-1 border border-green-500 bg-green-200 px-3 py-2 text-green-500 rounded-sm"><FaCartPlus className="text-green-500"/> Add to Cart</button>
                            <button className="px-3 py-2 bg-green-400 text-green-900 border-none rounded-sm">Buy Now</button>
                        </div>
                        <p className="mt-3">{productId?.description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailProduct;