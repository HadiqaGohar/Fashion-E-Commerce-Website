'use client';

import Image from 'next/image';


const FragranceList = () => {
 

 

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='flex flex-col items-center justify-center mb-6'>
                <div className='mx-auto mt-2'>
                    <Image
                        src="/fragrance/img/jpeg"
                        alt="Woman Collection Banner"
                        height={400}
                        width={1530}
                        className='justify-center items-center'
                    />
                </div>
            </div>
            <h1 className='text-2xl md:text-4xl text-center font-bold'>CLASSIC FRAGRANCE</h1>
            <hr className='border-2 w-56 mx-auto border-teal-700' />


        </div>
    );
};

export default FragranceList;
