'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../../redux/slices/cartSlice'
import CheckoutWizard from '../components/CheckoutWizard'
import Round from '../components/Round'
import Image from 'next/image'

function PaymentMethodPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm()

  const router = useRouter()
  const dispatch = useDispatch()
  const { shippingAddress, paymentMethod } = useSelector((state) => state.cart)

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping')
    }
    setValue('paymentMethod', paymentMethod)
  }, [paymentMethod, router, setValue, shippingAddress])

  const submitHandler = ({ paymentMethod }) => {
    dispatch(savePaymentMethod(paymentMethod))
    router.push('/placeorder')
  }

  return (
    <div className='py-6'>
      <CheckoutWizard activeStep={2} />
      <div className='flex flex-col lg:flex-row max-w-screen-xl mt-16 mx-auto px-4'>
        {/* Payment Form */}
        <form
          className='w-full lg:w-1/2 bg-white p-6 mt-10 rounded-lg shadow-lg mx-auto'
          onSubmit={handleSubmit(submitHandler)}
        >
          <h2 className='text-2xl font-semibold text-center mb-6 text-teal-800'>
            Select Payment Method
          </h2>

          {/* Render Payment Methods */}
          {['Paypal', 'Stripe', 'CashOnDelivery'].map((payment) => (
            <div key={payment} className='mb-4'>
              <input
                name='paymentMethod'
                className='p-2 border border-teal-300 rounded-lg'
                id={payment}
                type='radio'
                value={payment}
                {...register('paymentMethod', {
                  required: 'Please select a payment method',
                })}
              />
              <label className='ml-2 text-teal-700' htmlFor={payment}>
                {payment}
              </label>
            </div>
          ))}

          {/* Display error message if payment method is not selected */}
          {errors.paymentMethod && (
            <div className='text-teal-500 text-sm mb-4'>
              {errors.paymentMethod.message}
            </div>
          )}

          <div className='mb-4 flex justify-center'>
            <button className='w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300'>
              Next
            </button>
          </div>
        </form>

        {/* Image Component */}
        <div className='w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
          <Image
            src='/mobile.png' // Add your image path here
            alt='Payment Methods'
            width={300}
            height={200}
            className='rounded-lg'
          />
        </div>
      </div>

      {/* Round Component */}
      <div className='mt-10'>
        <Round />
      </div>
    </div>
  )
}

export default PaymentMethodPage
