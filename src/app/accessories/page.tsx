import React from 'react'
import Accessories from '../components/Accessories'
import Image from 'next/image'
import { HiMiniSquares2X2 } from 'react-icons/hi2'



function AccessoriesCollection() {
    return (
        <div className=' max-w-screen-2xl mx-auto'>


            <div className='flex flex-col items-center justify-center'>
                <div className='mx-auto mt-2'>
                    <Image
                        src="/accessories/1.jpeg"
                        alt="Woman Collection Banner"
                        height={400}
                        width={1530}
                        className='justify-center items-center'
                    />
                </div>
            </div>
            {/* <Scroll /> */}
            <div className="flex gap-2 md:gap-3 text-center justify-center">
                <div className="ml-2 text-teal-500 text-3xl sm:text-2xl md:ml-6 mt-8  md:mt-6" aria-label="Shopping Cart Icon">
                    <HiMiniSquares2X2 size={40} />
                </div>
                <h2 className="  md:text-4xl  text-center my-6 text-2xl sm:text-4xl text-gray-700 font-semibold mb-6 mt-10 md:mt-6">Accessories Collections</h2>
            </div>

            <div className='my-6'>
                <Accessories />
            </div>


        </div>
    )
}

export default AccessoriesCollection


