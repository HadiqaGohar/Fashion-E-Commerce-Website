import React from 'react'
import Image from 'next/image'
import { RxDragHandleDots1 } from 'react-icons/rx'
import Link from 'next/link'

function BigPoster() {
  return (
    <div className='w-full mx-auto p-10 text-[#1c3456] bg-[#e2e3de] '>
           <div className="max-w-screen-xl px-10 text-[#1c3456] bg-[#e2e3de] flex flex-col w-full md:flex-row items-center justify-around  mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4 ">
          <h6 className="text-sm uppercase tracking-widest">Best Deal Forever</h6>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Best Fashion <br /> Collection
          </h2>
          <p className="text-sm">
            There are many variations of passages of Lorem Ipsum <br /> available, but
            the majority have been altered.
          </p>
          <div>
            <Link href='/woman'>
            <button className="bg-white text-[#1c3456] font-medium px-8 py-3 rounded-full shadow hover:shadow-lg transition-transform transform hover:scale-105">
              GET IT NOW
            </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/img1.png" // Replace with the correct path to your image in the public folder
            alt="Fashion Collection"
            width={500}
            height={500}
            className="rounded-lg "
          />
          <div className=' absolute text-white opacity-90 mt-32 -mr-20 md:-mr-96 animate-pulse md:mt-[350px]'>
            <RxDragHandleDots1 size={200} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default BigPoster