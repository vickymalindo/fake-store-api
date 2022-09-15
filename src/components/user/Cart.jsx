/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../loader/Loading';

function Cart() {
  const [userCart, setUserCart] = useState(null);

  useEffect(() => {
    const getUserCart = async () => {
      const response = await axios.get('https://fakestoreapi.com/carts/5');
      const { products } = response.data;
      console.log(response.data)
      const obj = await Promise.all(products.map(async (product) => {
        const responseProduct = await axios.get(`https://fakestoreapi.com/products/${product.productId}`);
        const productCount = product.quantity;
        const checkbox = false
        const viewProduct = { checkbox, productCount, ...responseProduct.data };
        return viewProduct;
      }));
      setUserCart(obj);
    };
    getUserCart();
  }, []);

  console.log(userCart);
  return (
    <div>
      {userCart
        ? (
          <table border="1">
            <thead>
              <tr>
                <th>Product</th>
                <th>Kuantitas</th>
              </tr>
            </thead>
            <tbody>
              {userCart.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.title}</td>
                  <td>{cart.productCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
        : <Loading />}
    </div>
  );
}

export default Cart;
