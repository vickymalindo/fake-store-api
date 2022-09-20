/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../front/Footer';
import Nav from '../front/Nav';
import Loading from '../loader/Loading';
import ChildCart from './ChildCart';

function Cart() {
  const [userCart, setUserCart] = useState(null);
  const [checkout, setCheckout] = useState([])

  const handleClick = (e, id) => {
    const { checked } = e.target
    if (checked === true) {
      setUserCart(userCart.map((item) => {
        return item.id === id ? { ...item, check: true } : item
      }))
    } else {
      setUserCart(userCart.map((item) => {
        return item.id === id ? { ...item, check: false } : item
      }))
    }
  }

  const handleAdd = (id) => {
    setUserCart(userCart.map((item) => {
      return item.id === id ? { ...item, productCount: item.productCount + 1 } : item
    }))
  }

  const handleMinus = (id) => {
    setUserCart(userCart.map((item) => {
      return item.id === id ? { ...item, productCount: item.productCount === 1 ? item.productCount = 1 : item.productCount - 1 } : item
    }))
  }

  const handleCheckout = () => {
    const result = userCart.filter((item) => {
      return item.check === true
    })
    setCheckout(result)
  }

  const handleDelete = () => {
    console.log('klik')
  }

  const GetTotal = () => {
    let sum = 0
    const result = userCart.filter((item) => {
      return item.check === true
    })
    result.map((ele) => {
      return sum += ele.productCount * ele.price
    })
    return (
      <div>
        <span>Total &#40;{result.length}&#41;:</span>
        <h5>$ {sum.toFixed(2)}</h5>
      </div>
    )
  }

  const total = <GetTotal />

  const gatAllCheckbox = (e) => {
    const { checked } = e.target
    const input = document.querySelectorAll('.input')
    if (checked) {
      input.forEach((item) => {
        item.checked = true
      })
      setUserCart(userCart.map((ele) => {
        return { ...ele, check: true }
      }))
    } else {
      input.forEach((item) => {
        item.checked = false
      })
      setUserCart(userCart.map((ele) => {
        return { ...ele, check: false }
      }))
    }
  }

  useEffect(() => {
    const getUserCart = async () => {
      const response = await axios.get('https://fakestoreapi.com/carts/5');
      const { products } = response.data;
      const obj = await Promise.all(products.map(async (product) => {
        const responseProduct = await axios.get(`https://fakestoreapi.com/products/${product.productId}`);
        const productCount = product.quantity;
        const check = false
        const viewProduct = { check, productCount, ...responseProduct.data };
        return viewProduct;
      }));
      setUserCart(obj);
    };
    getUserCart();
  }, []);

  return (
    <div>
      <Nav />
      {userCart
        ? (
          <div className='relative'>
            {userCart.map((cart) => {
              return (
                <div key={cart.id} className='mx-auto my-3 flex justify-around gap-3 items-center px-14 py-2 text-start border w-5/6'>
                  <input type="checkbox" className='input inline-block w-4 h-4' onClick={(e) => handleClick(e, cart.id)} />
                  <img src={cart.image} alt="imageItem" className='object-contain w-20 h-20 p-1' />
                  <h5 className='w-32 overflow-hidden whitespace-nowrap text-ellipsis'>{cart.title}</h5>
                  <h5 className='w-14'>$ {cart.price}</h5>
                  <div className='flex items-center'>
                    <button className='border border-gray-300 px-3 py-1' onClick={() => handleMinus(cart.id)}>-</button>
                    <span className='border border-gray-300 py-1 w-11 text-center'>{cart.productCount}</span>
                    <button className='border border-gray-300 px-3 py-1' onClick={() => handleAdd(cart.id)}>+</button>
                  </div>
                  <span>$ {(cart.productCount * cart.price).toFixed(2)}</span>
                </div>
              )
            })}
            <ChildCart className='sticky bottom-0 border flex items-center justify-around w-5/6 mx-auto' onClickDelete={handleDelete} sum={total} onClickCheckout={handleCheckout} handleClick={gatAllCheckbox} />
          </div>
        )
        : <Loading />}
      <Footer />
    </div>
  );
}

export default Cart;
