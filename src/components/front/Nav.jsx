import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const status = localStorage.getItem('status');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <nav className="sticky z-10 top-0 flex items-center justify-between px-2 py-3 bg-green-500">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          {status ?
            <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/user">Tokopaedi</Link>
            :
            <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/">Tokopaedi</Link>
          }
          <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}><FaBars />
          </button>
        </div>
        <div
          className={
            "lg:flex items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:items-center lg:ml-auto">
            <li className={status ? 'hidden' : 'nav-item'}>
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/daftar"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              {!status && <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to='/login'>Sign In</Link>}
              {status && <button className="border rounded border-none bg-green-700 text-white text-base font-semibold px-2 py-1.5 hover:scale-105" onClick={handleLogout}>Sign Out</button>}
            </li>
            <li className="nav-item">
              <Link to={status ? '/user/cart' : '/login'} className="px-3 py-2 flex items-center md:ml-1.5 lg:ml-0 uppercase font-bold text-white hover:opacity-75 ">
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
