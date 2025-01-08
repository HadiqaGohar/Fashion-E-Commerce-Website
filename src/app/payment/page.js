'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../../redux/slices/cartSlice'
import CheckoutWizard from '../components/CheckoutWizard'

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
    <div>
      <CheckoutWizard activeStep={2} />
      <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
        <h2 className='mb-4 text-xl'>Payment Method</h2>

        {/* Render Payment Methods */}
        {['Paypal', 'Stripe', 'CashOnDelivery'].map((payment) => (
          <div key={payment} className='mb-4'>
            <input
              name='paymentMethod'
              className='p-2 outline-none focus:ring-0'
              id={payment}
              type='radio'
              value={payment}
              {...register('paymentMethod', {
                required: 'Please select a payment method',
              })}
            />
            <label className='p-2' htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}

        {/* Display error message if payment method is not selected */}
        {errors.paymentMethod && (
          <div className='text-teal-500'>
            {errors.paymentMethod.message}
          </div>
        )}

        <div className='mb-4 flex justify-between'>
          <button className='bg-black text-white px-6 py-3'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default PaymentMethodPage
