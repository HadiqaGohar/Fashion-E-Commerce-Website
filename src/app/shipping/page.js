'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../redux/slices/cartSlice'
import CheckoutWizard from '../components/CheckoutWizard'

function ShippingAddressPage() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
    } = useForm()

    const router = useRouter()
    const dispatch = useDispatch()
    const { shippingAddress } = useSelector((state) => state.cart)

    useEffect(() => {
        // Check if shippingAddress is available before setting values
        if (shippingAddress) {
            setValue('fullName', shippingAddress.fullName)
            setValue('address', shippingAddress.address)
            setValue('city', shippingAddress.city)
            setValue('postalCode', shippingAddress.postalCode)
            setValue('country', shippingAddress.country)
        }
    }, [setValue, shippingAddress])

    const submitHandler = ({ fullName, address, city, postalCode, country }) => {
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode, country })
        )

        router.push('/payment')
    }

    return (
        <div>
            <CheckoutWizard activeStep={1} />
            {/* Add the form structure here */}

            <form
                className='mx-auto max-w-screen-md'
                onSubmit={handleSubmit(submitHandler)}
            >
                <h2 className='mb-4 text-xl'>Shipping Address</h2>

                {/* For FullName */}

                <div className='mb-4'>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        className='w-full'
                        id='fullName'
                        autoFocus
                        {...register('fullName', {
                            required: 'Please enter full name',
                        })}
                    />
                    {
                        errors.fullName && (
                            <div className='text-teal-500'>{errors.fullName.message}</div>
                        )
                    }
                </div>

                {/* For Address */}

                <div className='mb-4'>
                    <label htmlFor='address'>Address</label>
                    <input
                        className='w-full'
                        id='address'
                        
                        {...register('address', {
                            required: 'Please enter address',
                            minLength: {
                                value: 3,
                                message:  'Address is more than 2 char',
                            }
                        })}
                    />
                    {
                        errors.address && (
                            <div className='text-teal-500'>{errors.address.message}</div>
                        )
                    }
                </div>

                {/* For City */}

                <div className='mb-4'>
                    <label htmlFor='fullName'>City</label>
                    <input
                        className='w-full'
                        id='city'
                       
                        {...register('city', {
                            required: 'Please enter city',
                        })}
                    />
                    {
                        errors.city && (
                            <div className='text-teal-500'>{errors.city.message}</div>
                        )
                    }
                </div>

                {/* Postal Code */}

                <div className='mb-4'>
                    <label htmlFor='fullName'>Postal Code</label>
                    <input
                        className='w-full'
                        id='postalcode'
                        autoFocus
                        {...register('postalcode', {
                            required: 'Please enter postal code',
                        })}
                    />
                    {
                        errors.postalCode && (
                            <div className='text-teal-500'>{errors.postalCode.message}</div>
                        )
                    }
                </div>

                {/* For Country */}

                <div className='mb-4'>
                    <label htmlFor='fullName'>Country</label>
                    <input
                        className='w-full'
                        id='country'
                        autoFocus
                        {...register('country', {
                            required: 'Please enter country',
                        })}
                    />
                    {
                        errors.country && (
                            <div className='text-teal-500'>{errors.country.message}</div>
                        )
                    }
                </div>

                <div className='mb-4 flex justify-between'>
                    <button className='bg-black text-white px-6 py-3'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddressPage
