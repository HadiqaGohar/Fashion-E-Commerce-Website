import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div className="bg-white px-4 py-8 sm:px-6 md:py-12 max-w-screen-2xl mx-auto">
            {/* Breadcrumb */}
            <p className="text-xs sm:text-sm  text-gray-600 mb-4"><Link href='/' className='hover:text-teal-400'>Home</Link> / <Link href='/not-found' className='hover:text-teal-400'>404 Error</Link></p>
            <h2 className='md:text-7xl text-4xl text-center mt-16 font-semibold text-teal-600'><span className='text-teal-600'>404</span> Not Found</h2>
            <p className='text-center my-10'>Your visited page is not found. You may go back to the home page.</p>
            <div className="flex justify-center">
                <Link href='/'>
                    <button className="my-16 w-[300px] py-3 px-3 mt-4 bg-teal-400 text-white rounded">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
