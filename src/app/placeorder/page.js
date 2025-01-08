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
    <div>
      <CheckoutWizard activeStep={3} />
      <h2 className="mb-4 text-xl">Place Order</h2>

      {loading ? (
        <div>Loading...</div>
      ) : cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/products">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            {/* Shipping Address Section */}
            <div className="p-5">
              <h3 className="mb-2 text-lg">Shipping Address</h3>
              <div>
                {shippingAddress?.fullName}, {shippingAddress?.address},{' '}
                {shippingAddress?.city}, {shippingAddress?.postalCode},{' '}
                {shippingAddress?.country}
              </div>
              <div>
                <Link className="bg-teal-400 px-6 py-3 inline-block" href="/shipping">
                  Edit
                </Link>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="p-5">
              <h3 className="mb-2 text-lg">Payment Method</h3>
              <div>{paymentMethod}</div>
              <div>
                <Link className="bg-teal-400 px-6 py-3 inline-block" href="/payment">
                  Edit
                </Link>
              </div>
            </div>

            {/* Order Items Section */}
            <div className="overflow-x-auto p-5">
              <h3 className="mb-2 text-lg">Order Items</h3>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="p-5 text-right">Quantity</th>
                    <th className="p-5 text-right">Price</th>
                    <th className="px-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td>
                        <Link href={`/products/${item.id}`} className="flex items-center">
                          <Image
                            src={item.images[0] || '/images/default-product.jpg'}
                            alt={item.name}
                            width={50}
                            height={50}
                            style={{
                              maxWidth: '100%',
                              height: 'auto',
                            }}
                            className="p-1"
                          />
                          {item.name}
                        </Link>
                      </td>
                      <td className="p-5 text-right">{item.qty}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">${item.qty * item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link className="bg-teal-400 px-6 py-3 inline-block" href="/cart">
                  Edit
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="p-5">
            <h3 className="mb-2 text-lg">Order Summary</h3>
            <ul>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Items</div>
                  <div>${itemsPrice}</div>
                </div>
              </li>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Tax</div>
                  <div>${taxPrice}</div>
                </div>
              </li>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Shipping</div>
                  <div>${shippingPrice}</div>
                </div>
              </li>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Total</div>
                  <div>${totalPrice}</div>
                </div>
              </li>
              <li>
                <button
                  onClick={() => {
                    alert('Not implemented')
                  }}
                  className="bg-black text-white px-6 py-3">
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlaceOrderScreen
