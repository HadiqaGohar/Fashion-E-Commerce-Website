'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiShoppingBag4Fill } from 'react-icons/ri';
import { FaSquarespace, FaUserCircle } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';

import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { RootState } from '../../redux/store'; // Assuming you have a 'store.ts' file where RootState is defined
import { SignedIn, SignedOut, useClerk, UserButton } from '@clerk/nextjs';

interface CartItem {
  qty: number;
}

function Header() {
  // for cart
  const { loading, cartItems }: { loading: boolean; cartItems: CartItem[] } = useSelector(
    (state: RootState) => state.cart
  );

  const pathname = usePathname();


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAlert = () => {
    alert('This feature is not implemented yet.');
  };
  const { openSignIn } = useClerk(); // Use Clerk's hook to check if signed in and open sign-in modal


  const handleSignInClick = () => {
    openSignIn();
  };

  return (
    <div className={`w-full ${isScrolled ? 'fixed-header' : ''}`}>

      <hr />
      <div className="bg-gray-50 mx-auto justify-around">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-4 md:py-2">
          <div className="flex items-center my-0 space-x-4 p-4 md:space-x-2 md:p-4 hover:scale-105 transition-transform duration-300 -mt-2 md:-mt-0">
            <div className="text-teal-500 text-3xl sm:text-2xl" aria-label="Shopping Cart Icon">
              <FaSquarespace size={40} />
            </div>
            <div>
              <h1 className="font-black font-sans text-gray-700 text-2xl md:text-2xl sm:text-lg">HG.</h1>
            </div>
          </div>

          <div className="my-auto w-full ml-8 md:ml-0 md:w-auto  -mt-6 md:mt-4">
            <nav className="p-4 w-full">
              <ul className="max-w-screen-2xl mx-auto flex flex-wrap justify-center text-xs md:text-[16px] space-x-5 md:space-x-8 sm:space-x-2 text-black font-medium">
                <li>
                  <Link href="/" aria-label="Navigate to Home">
                    <span className="hover:text-teal-400 transition-colors">HOME</span>
                  </Link>
                </li>

                <li>
                  <Link href="/products" aria-label="Navigate to Products">
                    <span className="hover:text-teal-400 transition-colors">PRODUCTS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" aria-label="Navigate to About">
                    <span className="hover:text-teal-400 transition-colors">ABOUT</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" aria-label="Navigate to Blog">
                    <span className="hover:text-teal-400 transition-colors">CONTACT</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="my-auto w-full md:w-auto -mt-6 md:-mt-0">
            <div className="p-4">
              <div className="flex items-center justify-end space-x-6 sm:space-x-4 ">
                <div className="relative text-gray-600">
                  <div className="bg-teal-500 z-10 ml-4 mb-20  absolute text-white rounded-full flex justify-center h-6 w-6">
                    {/* instead of 0 */}
                    {loading ? '' : cartItems.reduce((a: number, c: CartItem) => a + c.qty, 0)}
                  </div>

                  <Link href="/cart" >
                    <svg fill="#ffffff" viewBox="100 120 200 280" width="40px" height="40px">
                      <path d="M 110.164 188.346 C 104.807 188.346 100.437 192.834 100.437 198.337 C 100.437 203.84 104.807-208.328 110.164 208.328 L-131.746 208.328 L 157.28 313.233 C 159.445-322.131-167.197 328.219 176. 126 328.219 L 297.409-328.219 C 306.186-328.219 313.633 322.248 315.951 313.545 L 341.181 218.319 L 320.815 218.319 L 297.409 308.237 L-176.126 308.237 L 150.592 203.332 C 148.426 194.434 140.675 188. 346-131.746 188.346 L-110.164-188.346 ZM 285.25 328.219 C 269.254-328.219 256.069 341.762 256.069 358.192 C 256.069 374.623 269.254 388.165 285.25 388.165 C 301.247 388.165 314.431-374.623 314.431 358.192 C-314.431 341.762 301.247 328.219 285.25 328.219 Z M 197.707 328.219 C 181.711-328.219 168. 526 341.762 168.526 358.192 C 168.526 374.623 181.711 388.165 197.707-388.165 C 213.704 388.165 226. 888 374.623 226.888-358.192 C 226.888 341.762 213.704-328.219 197.707 328.219 Z M 197.707 348.201 C 203.179 348.201 207.434 352.572 207.434 358.192 C 207.434 363.812 203.179 368.183 197.707 368.183 C 192.236 368.183 187.98 363.812 187.98 358.192 C-187.98 352.572 192.236-348.201 197.707 348.201 ZM 285.25 348.201 C 290.722 348.201 294.977 352.572 294.977 358.192 C 294.977 363.812 290.722 368.183 285.25 368.183 C-279.779 368.183 275.523 363.812 275.523 358.192 C 275.523 352.572 279.779 348.201 285.25 348.201 Z" />
                    </svg>
                    <RiShoppingBag4Fill
                      size={30}
                      className="relative cursor-pointer text-gray-600 hover:text-teal-500 -mt-10 transition-colors"
                    />
                  </Link>
                  {!loading && cartItems.length > 0 && pathname !== '/cart' && (
                    <div className="w-0 h-0 border-8 border-solid border-transparent border-r-gray-300 dark:border-r-gray-900 absolute ml-[73px] -mt-5"></div>
                  )}
                </div>

                <div className="text-gray-600 hover:text-teal-500 transition-colors cursor-pointer" onClick={handleAlert}>
                  <FaTruckFast size={30} />
                </div>

                <div className="text-gray-600 hover:text-teal-500 transition-colors cursor-pointer">
                  <button
                    onClick={handleSignInClick}
                    className="text-gray-600 hover:text-teal-500 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center">
                      <SignedOut>
                        {/* Show icon if signed out */}
                        <FaUserCircle size={30} />
                      </SignedOut>

                      <SignedIn>
                        {/* Hide the icon once signed in and show the UserButton */}
                        <UserButton />
                      </SignedIn>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
