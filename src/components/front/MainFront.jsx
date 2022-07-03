import React from 'react'
import Categories from './Categories'
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
    </>
  )
}

export default MainFront