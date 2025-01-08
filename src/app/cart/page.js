'use client';

import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import Round from "../components/Round"

function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItems = [] } = useSelector((state) => state.cart);
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 text-center">
        <div>
          <p className="text-xl font-semibold">Cart is empty.</p>
          <Link href="/products" className="text-teal-500 hover:underline mt-4 block">Go shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className=" max-w-6xl mx-auto">
      <div className="text-3xl font-bold text-teal-600 mb-6">Shopping Cart</div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className=" md:col-span-3 bg-white  shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-teal-100 text-teal-700">
              <tr>
                <th className="md:p-4 py-4 px-1 text-left">Product</th>
                <th className="md:p-4 py-4 px-1 text-right">Quantity</th>
                <th className="md:p-4 py-4 px-1 text-right">Price</th>
                <th className="md:p-4 py-4 px-1 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-teal-50">
                  <td className="md:p-4 py-4 px-1 flex items-center">
                    <Link href={`/products/${item.id}`} className="flex items-center space-x-4">
                      <Image
                        src={item.images[0] || "/images/default-product.jpg"}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <span>{item.name}</span>
                    </Link>
                  </td>
                  <td className="md:p-4 py-4 px-1 text-right">
                    <select
                      value={item.qty}
                      onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                      className="border border-teal-300 rounded px-2 py-1"
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="md:p-4 py-4 px-1 text-right text-teal-600">${item.price}</td>
                  <td className="md:p-4 py-4 px-2 text-center">
                    <button
                      className="bg-teal-400 text-white py-1 px-3 md:py-2 md:px-6 rounded hover:bg-teal-500 transition duration-200"
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white p-5 shadow-md rounded-lg">
          <ul className="space-y-4">
            <li className="text-xl font-semibold">
              Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) : ${itemsPrice}
            </li>
            <li>
              <button
                onClick={() => router.push('/shipping')}
                className="bg-teal-500 text-white px-6 py-3 w-full rounded-lg hover:bg-teal-600 transition duration-200"
              >
                Proceed to checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='my-10'>
        <Round />
      </div>
    </div>
  );
}

export default CartPage;
