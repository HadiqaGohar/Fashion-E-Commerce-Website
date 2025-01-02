'use client';

import Image from 'next/image';

const BagsList = () => {
    

  
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='flex flex-col items-center justify-center mb-6'>
                <div className='mx-auto mt-2'>
                    <Image
                        src="/man/img.jpeg"
                        alt="Woman Collection Banner"
                        height={500}
                        width={1530}
                        className='justify-center items-center'
                    />
                </div>
            </div>

            <h1 className='text-2xl md:text-4xl text-center font-bold'>MENS COLLECTION</h1>
            <hr className='border-2 w-56 mx-auto border-teal-700' />

            
            <p className='font-light text-center'>No more Products...</p>
        </div>
    );
};

export default BagsList;
