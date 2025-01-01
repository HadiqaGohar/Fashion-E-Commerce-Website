
import WomanSale from '@/app/components/WomanSale'
import React from 'react'
import Image from 'next/image'

function Sale() {
    return (
        <div className=' max-w-screen-2xl mx-auto'>


           
            <div className='flex flex-col items-center justify-center'>
                <div className='mx-auto mt-2'>
                     <Image
                        src="/woman/sale/img1.jpeg"
                        alt="Woman Collection Banner"
                        height={400}
                        width={1530}
                        className='justify-center items-center'
                    /> 
                  
                </div>
                <WomanSale/>
            </div>
           
        </div>
    )
}

export default Sale