import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
            <nav className="sticky top-0 flex items-center justify-between px-2 py-3 bg-green-500 mb-2">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        to="/"
                        >
                        Tokopaedi
                        </Link>
                        <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars />
                        </button>
                    </div>
                    <div
                        className={
                        "lg:flex items-center" +
                        (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:items-center lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/daftar"
                                >
                                daftar
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/login"
                                >
                                    login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='cart' className="px-3 py-2 flex items-center md:ml-1.5 lg:ml-0 uppercase font-bold text-white hover:opacity-75 ">
                                <FaShoppingCart />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Nav
