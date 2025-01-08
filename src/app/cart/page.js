'use client';

import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

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
      <div>
        Cart is empty. <Link href="/products">Go shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 text-xl">Shopping Cart</div>
      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="overflow-x-auto md:col-span-3">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="p-5 text-left">Product</th>
                <th className="p-5 text-right">Quantity</th>
                <th className="p-5 text-right">Price</th>
                <th className="p-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td>
                    <Link href={`/products/${item.id}`} className="flex items-center">
                      <Image
                        src={item.images[0] || "/images/default-product.jpg"}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="p-1"
                      />
                      {item.name}
                    </Link>
                  </td>
                  <td className="p-5 text-right">
                    <select
                      value={item.qty}
                      onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-5 text-right">${item.price}</td>
                  <td className="p-5 text-center">
                    <button
                      className="bg-teal-400 px-4 py-2"
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
        <div className="card p-5">
          <ul>
            <li>
              <div className="pb-3 text-xl">
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) : ${itemsPrice}
              </div>
            </li>
            <li>
              <button
                onClick={() => router.push('/shipping')}
                className="bg-black text-white px-6 py-3"
              >
                Proceed to checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartPage;








































// 'use client'

// import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'
// import { useRouter } from 'next/navigation'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Image from 'next/image'

// function CartPage() {

//   const dispatch = useDispatch()
//   const router = useRouter()
//   const { loading, cartItem, itemsPrice } = useSelector((state) => state.cart)

//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id))
//   }

//   const addToCartHandler = async (product, qty) => {
//     dispatch(addToCart({ ...product, qty }))
//   }

//   return (
//     <div>

//       <div className='mb-4 text-xl'>Shopping Cart</div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : cartItem.length === 0 ? (
//         <div>
//           Cart is empty. <Link className='/products'>Go shopping</Link>
//         </div>
//       ) : (
//         <div className='grid md:grid-cols-4 md:gap-5'>
//           <div className='overflow-x-auto md:col-span-3'>
//             <table className='min-w-full'>
//               <thead className='border-b'>
//                 <tr>
//                   <th className='p-5 text-left'>Product</th>
//                   <th className='p-5 text-right'>Quantity</th>
//                   <th className='p-5 text-right'>Price</th>
//                   <th className='p-5'>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItem.map((item) => (
//                   <tr key={item.id} className='border-b'>
//                     <td>
//                       <Link href={`/product/${item.id}`}
//                         className='flex items-center'>
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           width={50}
//                           hight={50}
//                           className='p-1'
//                         />
//                       </Link>
//                     </td>
//                     <td className='p-5 text-right'>
//                       <select
//                         value={item.qty}
//                         onChange={(e) =>
//                           addToCartHandler(item, Number(e.target.value))
//                         }>
//                         {[...Array(item.countInStock).keys].map((x) => (
//                           <option key={x + 1} value={x + 1}>
//                             {x + 1}
//                           </option>
//                         ))}
//                       </select>
//                     </td>
//                     <td className='p-5 text-right'>${item.price}</td>
//                     <td className='p-5 text-center'>
//                       <button
//                         className='bg-teal-400 px-4 py-2'
//                         onClick={() => removeFromCartHandler(item.id)}>
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className='card p-5'>
//             <ul>
//               <li>
//                 <div className='pb-3 text-xl'>
//                   Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) : $
//                   {itemsPrice}
//                 </div>
//               </li>
//               <li>
//                 <button
//                 onClick={() => router.push('/shipping')}
//                 className='bg-black text-white px-6 py-3'>
//                   Proceed to checkout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default CartPage
