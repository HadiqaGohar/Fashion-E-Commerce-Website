import Link from 'next/link';
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

function TopText() {
    return (
        <div className="flex items-center justify-center h-12 w-full  bg-black text-white mx-auto ">
            {/* Empty Left Side */}
            <div className="w-1/4 hidden md:block"></div>

            {/* Center Text */}
            <h2 className="w-full text-center font-light text-sm md:text-md md:ml-16">
                Summer Sale For All Swim Suit And Free Express Delivery - OFF 50%!
                <span className="font-semibold ml-2 underline">
                    <Link href="/products">
                        Shop Now
                    </Link>
                </span>
            </h2>

            {/* Right-Side Dropdown */}
            <div className="w-1/3 hidden md:flex justify-end md:mr-28">
                <div className="flex relative group items-center">
                    <button className="text-white">English</button>
                    <RiArrowDropDownLine size={40} />
                </div>
            </div>
        </div>
    );
}

export default TopText;