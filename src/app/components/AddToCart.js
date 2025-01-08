'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/redux/slices/cartSlice';

function AddToCart({
    product,
    showQty = true,
    redirect = false,
    increasePerClick = false,
}) {
    const dispatch = useDispatch();
    const router = useRouter();
    const [qty, setQty] = useState(1);

    // Safely retrieve cartItem from Redux state
    const { cartItem = [] } = useSelector((state) => state.cart || { cartItem: [] });

    const addToCartHandler = () => {
        let newQty = qty;

        // Handle quantity increase per click
        if (increasePerClick) {
            const existItem = Array.isArray(cartItem)
                ? cartItem.find((x) => x.id === product.id)
                : null;

            if (existItem) {
                if (existItem.qty + 1 <= product.countInStock) {
                    newQty = existItem.qty + 1;
                } else {
                    alert('No more product exists in stock.');
                    return;
                }
            }
        }

        // Dispatch action to Redux store
        dispatch(addToCart({ ...product, qty: newQty }));

        // Redirect to cart page if enabled
        if (redirect) router.push('/cart');
    };

    return (
        <div>
            {product.countInStock > 0 && showQty && (
                <div className='mb-2 flex justify-between'>
                    <div>Qty</div>
                    <div>
                        <select
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        >
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
            <div className='flex justify-center md:-ml-10'>
                {product.countInStock > 0 ? (
                    <button
                        className='bg-black text-white h-12 w-[80%] rounded-xl my-8 shadow-lg'
                        onClick={addToCartHandler}
                    >
                        Add to Cart
                    </button>
                ) : (
                    <button disabled className='bg-gray-400 text-white h-12 w-[80%] rounded-xl my-8 shadow-lg'>
                        Out of Stock
                    </button>
                )}
            </div>
        </div>
    );
}

export default AddToCart;
