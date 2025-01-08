'use client';

import Image from 'next/image';
import { HiMiniSquares2X2 } from 'react-icons/hi2';


const FragranceList = () => {
 

 

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='flex flex-col items-center justify-center mb-6'>
                <div className='mx-auto mt-2'>
                    <Image
                        src="/fragrance/img.jpeg"
                        alt="Woman Collection Banner"
                        height={400}
                        width={1530}
                        className='justify-center items-center'
                    />
                </div>
            </div>
            <div className="flex gap-2 md:gap-3 text-center justify-center">
                <div className="ml-2 text-teal-500 text-3xl sm:text-2xl md:ml-6 mt-8  md:mt-6" aria-label="Shopping Cart Icon">
                    <HiMiniSquares2X2 size={40} />
                </div>
                <h2 className="  md:text-4xl  text-center my-6 text-2xl sm:text-4xl text-gray-700 font-semibold mb-6 mt-10 md:mt-6">Classic Fragrance Collections</h2>
            </div>
            {/* <h1 className='text-2xl md:text-4xl text-center font-bold'>CLASSIC FRAGRANCE</h1> */}
            {/* <hr className='border-2 w-56 mx-auto border-teal-700' /> */}

            <p className='font-light text-center'>No more Products...</p>
        </div>
    );
};

export default FragranceList;
