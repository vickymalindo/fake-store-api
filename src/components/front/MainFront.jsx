import React from 'react'
import Categories from './Categories'
import Footer from './Footer'
import Nav from './Nav'
import Product from './Product'
import Thumbnail from './Thumbnail'

const MainFront = () => {
  return (
    <>
        <Nav />
        <Thumbnail />
        <Categories />
        <Product />
        <Footer />
    </>
  )
}

export default MainFront