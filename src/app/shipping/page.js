'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../redux/slices/cartSlice';
import CheckoutWizard from '../components/CheckoutWizard';
import Round from '../components/Round'

function ShippingAddressPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    // Check if shippingAddress is available before setting values
    if (shippingAddress) {
      setValue('fullName', shippingAddress.fullName);
      setValue('address', shippingAddress.address);
      setValue('city', shippingAddress.city);
      setValue('postalCode', shippingAddress.postalCode);
      setValue('country', shippingAddress.country);
    }
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );

    router.push('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <CheckoutWizard activeStep={1} />
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">Shipping Address</h2>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              autoFocus
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register('fullName', { required: 'Please enter full name' })}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-teal-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register('address', {
                required: 'Please enter address',
                minLength: { value: 3, message: 'Address must be at least 3 characters long' },
              })}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-teal-500">{errors.address.message}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              id="city"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register('city', { required: 'Please enter city' })}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-teal-500">{errors.city.message}</p>
            )}
          </div>

          {/* Postal Code */}
          <div>
            <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              id="postalcode"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register('postalcode', { required: 'Please enter postal code' })}
            />
            {errors.postalCode && (
              <p className="mt-1 text-sm text-teal-500">{errors.postalCode.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              id="country"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register('country', { required: 'Please enter country' })}
            />
            {errors.country && (
              <p className="mt-1 text-sm text-teal-500">{errors.country.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-md shadow-sm text-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <div className='my-10'>
        <Round />
      </div>
    </div>
  );
}

export default ShippingAddressPage;
