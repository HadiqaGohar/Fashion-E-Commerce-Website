import React from 'react'
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md'

function Arrow() {
  return (
    <div>
         {/* Arrow */}
         <div className="flex justify-center gap-2 mt-5 xl:ml-48">
          <div className="h-[45px] w-[45px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
            <span className="text-black">
              <MdOutlineArrowBack size={25} />
            </span>
          </div>
          <div className="h-[45px] w-[45px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
            <span className="text-black">
              <MdOutlineArrowForward size={25} />
            </span>
          </div>
        </div>
    </div>
  )
}

export default Arrow