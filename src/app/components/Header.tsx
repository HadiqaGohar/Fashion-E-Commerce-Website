'use client';

import React, { useState, useEffect } from 'react';
import TopMessage from './TopMessage';
import Link from 'next/link';
// import { TiShoppingCart } from 'react-icons/ti'; // If not used, remove this
import { RiShoppingBag4Fill } from 'react-icons/ri';
import { FaSquarespace, FaUserCircle } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import Alert from './Alert'; // If you plan to use it, keep it

function Header() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSignInClick = () => {
    setShowAlert(true); // If you plan to show alert on sign-in, keep this
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Keep this for closing the alert
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isShopListVisible, setIsShopListVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleCartVisibility = () => setIsCartVisible((prevState) => !prevState);
  const toggleShopList = () => setIsShopListVisible((prevState) => !prevState);

  const shopCategories = [
    'Women',
    'Men',
    'Accessories',
    'Glasses',
    'Jewellery',
    'Footwear',
    'Bag',
    'Fragrance',
    'Scarves',
    'Watch',
    'Hair',
  ];

  return (
    <div className={`w-full ${isScrolled ? 'fixed-header' : ''}`}>
      <TopMessage />
      <hr />
      <div className="bg-gray-50 mx-auto justify-around">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-4 py-2">

          {/* Logo Section */}
          <div className="flex items-center space-x-4 p-4 md:space-x-2 md:p-4 hover:scale-105 transition-transform duration-300">
            <div className="text-teal-500 text-3xl sm:text-2xl" aria-label="Shopping Cart Icon">
              <FaSquarespace size={40} />
            </div>
            <div>
              <h1 className="font-black font-sans text-gray-700 text-2xl md:text-2xl sm:text-lg">HG.</h1>
            </div>
          </div>

          {/* Navbar */}
          <div className="my-auto w-full md:w-auto">
            <nav className="p-4 w-full">
              <ul className="max-w-screen-2xl mx-auto flex flex-wrap justify-center space-x-5 md:space-x-8 sm:space-x-2 text-black font-medium">
                <li>
                  <Link href="/" aria-label="Navigate to Home">
                    <span className="hover:text-teal-400 transition-colors">HOME</span>
                  </Link>
                </li>
                <li>
                  <span
                    onClick={toggleShopList}
                    className="cursor-pointer hover:text-teal-400 transition-colors"
                  >
                    SHOP
                  </span>
                  {isShopListVisible && (
                    <ul className="absolute bg-black text-white opacity-60 shadow-lg rounded mt-2 py-2 w-72 z-10">
                      {shopCategories.map((category, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 p-2 text-white hover:text-black hover:bg-gray-200 transition-all delay-100 group"
                        >
                          <HiMiniSquares2X2
                            className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity delay-200"
                            size={20}
                          />
                          <span>{category}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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

          {/* Nav Icons */}
          <div className="my-auto w-full md:w-auto">
            <div className="p-4">
              <div className="flex items-center justify-end space-x-6 sm:space-x-4">
                <div className="relative text-gray-600">
                  <RiShoppingBag4Fill
                    size={30}
                    className="cursor-pointer text-gray-600 hover:text-teal-500 transition-colors"
                    onClick={toggleCartVisibility}
                  />
                  {isCartVisible && (
                    <div className="absolute right-0 text-black bg-white shadow-lg rounded border mt-2 w-64 z-10">
                      <h2 className="p-2 border-b">Cart</h2>
                      <p className="p-2 text-center">Your cart is empty</p>
                    </div>
                  )}
                </div>
                <div className="text-gray-600 hover:text-teal-500 transition-colors cursor-pointer">
                  <FaTruckFast size={30} />
                </div>

                <div className="text-gray-600 hover:text-teal-500 transition-colors cursor-pointer">
                  {/* <FaUserCircle size={30} /> */}
                  <button
                    onClick={handleSignInClick}
                    className="text-gray-600 hover:text-teal-500 transition-colors cursor-pointer"
                  >
                    <span><FaUserCircle size={30} /></span>
                  </button>

                  {showAlert && (
                    <Alert
                      message="Sign in to your account to continue shopping."
                      onClose={handleCloseAlert}
                    />
                  )}
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
