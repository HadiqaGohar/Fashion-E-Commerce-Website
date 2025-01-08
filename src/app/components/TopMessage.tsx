'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiMiniSquares2X2 } from 'react-icons/hi2';

function TopText() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-12 w-full bg-black text-white mx-auto">
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
            <div className="w-1/3 hidden md:flex justify-end md:mr-28" ref={dropdownRef}>
                <div
                    className="relative flex items-center cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {/* Dropdown Button */}
                    <button className="text-white">English</button>
                    <RiArrowDropDownLine size={40} className="text-white" />
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute z-10 top-12  right-32 bg-gray-800 text-white rounded-md shadow-lg w-28">
                        <ul className="py-2">
                            <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer group">
                                {/* Icon on Hover */}
                                <HiMiniSquares2X2
                                    size={20}
                                    className="text-teal-500 hidden group-hover:block mr-2"
                                />
                                English
                            </li>
                            <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer group">
                                {/* Icon on Hover */}
                                <HiMiniSquares2X2
                                    size={20}
                                    className="text-teal-500 hidden group-hover:block mr-2"
                                />
                                Urdu
                            </li>
                            <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer group">
                                {/* Icon on Hover */}
                                <HiMiniSquares2X2
                                    size={20}
                                    className="text-teal-500 hidden group-hover:block mr-2"
                                />
                                Arabic
                            </li>
                            <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer group">
                                {/* Icon on Hover */}
                                <HiMiniSquares2X2
                                    size={20}
                                    className="text-teal-500 hidden group-hover:block mr-2"
                                />
                                Spanish
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopText;
