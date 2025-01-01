import React from 'react'
import Accessories from '../components/Accessories'
import Image from 'next/image'



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

            <div className='my-6'>
                <Accessories />
            </div>


        </div>
    )
}

export default AccessoriesCollection


