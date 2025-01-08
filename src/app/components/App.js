'use client'

import { hideLoading } from '@/redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import CartSidebar from './CartSidebar'
import Footer from './Footer'
import Header from './Header'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'


function App({ children }) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(hideLoading())
    }, [dispatch])

    const { cartItems, loading } = useSelector((state) => state.cart)  // Fixed the cartItems variable name

    const pathname = usePathname()

    return (
        <div>
            <div className={`${loading
                    ? ''
                    : cartItems.length > 0 && (pathname === '/' || pathname.indexOf('/products/') >= 0)
                        ? 'mr-32'
                        : ''
                }`}
            >
                <Header />
                <main className='p-4'>{children}</main>
            </div>
            <CartSidebar />
            <Footer />
        </div>
    )
}

export default App
