'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import CheckoutWizard from '../components/CheckoutWizard'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function PlaceOrderScreen() {
  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    shippingAddress, // Shipping address should be here
    paymentMethod,
    loading,
  } = useSelector((state) => state.cart) // Using useSelector to fetch cart data from Redux store

  const router = useRouter()

  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment') // If no payment method, navigate to payment screen
    }
  }, [paymentMethod, router])

  // Debugging to ensure that the values are coming from Redux store
  useEffect(() => {
    console.log('cartItems:', cartItems)
    console.log('itemsPrice:', itemsPrice)
    console.log('shippingPrice:', shippingPrice)
    console.log('taxPrice:', taxPrice)
    console.log('totalPrice:', totalPrice)
  }, [cartItems, itemsPrice, shippingPrice, taxPrice, totalPrice])

  return (
    <div className="py-6 ">
      <CheckoutWizard activeStep={3} />
     <div className='max-w-screen-xl mx-auto'>
     <h2 className="mb-4 text-2xl font-semibold">Place Order</h2>

{loading ? (
  <div className="text-center">Loading...</div>
) : cartItems.length === 0 ? (
  <div className="text-center">
    Cart is empty. <Link href="/products" className="text-teal-600">Go shopping</Link>
  </div>
) : (
  <div className="grid md:grid-cols-3 gap-5">
    <div className="overflow-x-auto col-span-2">
      {/* Shipping Address Section */}
      <div className="bg-white shadow-lg p-5 mb-5 rounded-lg border border-gray-300">
        <h3 className="text-xl font-semibold mb-6">Shipping Address</h3>
        <div className='mb-2  border-b pb-2 font-bold text-gray-800'>Full Name : <span className='ml-4 font-medium text-gray-700'>{shippingAddress?.fullName}</span></div>
        <div className='mb-2  border-b pb-2 font-bold text-gray-800'>Shipping Address : <span className='ml-4 font-medium text-gray-700'>{shippingAddress?.address}</span></div>
        <div className='mb-2  border-b pb-2 font-bold text-gray-800'>Postal Code : <span className='ml-4 font-medium text-gray-700'> {shippingAddress?.city}, {shippingAddress?.postalCode}</span></div>
        <div className='mb-2  border-b pb-2 font-bold text-gray-800'>Country : <span className='ml-4 font-medium text-gray-700'>{shippingAddress?.country}</span></div>
        <Link href="/shipping" className="bg-black text-white  py-2 px-8 mt-3 inline-block rounded-lg">Edit</Link>
      </div>

      {/* Payment Method Section */}
      <div className="bg-white shadow-lg p-5 mb-5 rounded-lg border border-gray-300">
        <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
        <div>{paymentMethod}</div>
        <Link href="/payment" className="bg-black text-white  py-2 px-6 mt-3 inline-block rounded-lg">Edit</Link>
      </div>

      {/* Order Items Section */}
      <div className="bg-white shadow-lg p-5 rounded-lg mb-5 border border-gray-300">
        <h3 className="text-xl font-semibold mb-2">Order Items</h3>
        <table className="min-w-full border-collapse">
          <thead className="border-b">
            <tr>
              <th className="md:p-4 py-4 px-1  text-left">Item</th>
              <th className="md:p-4 py-4 px-1  text-right">Quantity</th>
              <th className="md:p-4 py-4 px-1  text-right">Price</th>
              <th className="md:p-4 py-4 px-1  text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="md:p-4 py-4 px-1  flex items-center">
                  <Link href={`/products/${item.id}`} className="flex items-center">
                    <Image
                      src={item.images[0] || '/images/default-product.jpg'}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-sm"
                    />
                    <span className="ml-2">{item.name}</span>
                  </Link>
                </td>
                <td className="md:p-4 py-4 px-1 text-right">{item.qty}</td>
                <td className="md:p-4 py-4 px-1  text-right">${item.price}</td>
                <td className="md:p-4 py-4 px-1  text-right">${item.qty * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="/cart" className="bg-black text-white  py-2 px-6 mt-3 inline-block rounded-lg">Edit</Link>
      </div>
    </div>

    {/* Order Summary Section */}
    <div className="bg-white md:h-[350px]  shadow-lg p-5 rounded-lg border border-gray-300">
      <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
      <ul>
        <li className="mb-2 flex justify-between border-b pb-2">
          <span>Items</span>
          <span>${itemsPrice}</span>
        </li>
        <li className="mb-2 flex justify-between border-b pb-2">
          <span>Tax</span>
          <span>${taxPrice}</span>
        </li>
        <li className="mb-2 flex justify-between border-b pb-2">
          <span>Shipping</span>
          <span>${shippingPrice}</span>
        </li>
        <li className="mb-2 flex justify-between border-b pb-2 font-semibold text-xl">
          <span>Total</span>
          <span>${totalPrice}</span>
        </li>
        <li>
          <button
            onClick={() => {
              alert('Not implemented')
            }}
            className="w-full bg-black text-white py-3 mt-4 rounded-lg">
            Place Order
          </button>
        </li>
      </ul>
    </div>
  </div>
)}
     </div>
    </div>
  )
}

export default PlaceOrderScreen
