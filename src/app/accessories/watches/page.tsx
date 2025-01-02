
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const WatchList = () => {
    // Array of products with id, name, price, and multiple image URLs
    const products = [
        {
            id: 1,
            name: "Classic Watch",
            price: "$5.00",
            href: "/accessories/watches/1",
            images: [
                '/accessories/watch/p1/img1.jpeg',
                '/accessories/watch/p1/img2.jpeg',
                '/accessories/watch/p1/img3.jpeg',
                '/accessories/watch/p1/img4.jpeg',
            ]
        },
        {
            id: 2,
            name: "Classic Leather Watch ",
            price: "$6.00",
            href: "/accessories/watches/2",
            images: [
                '/accessories/watch/p2/img1.jpeg',
                '/accessories/watch/p2/img2.jpeg',
                '/accessories/watch/p2/img3.jpeg',
                '/accessories/watch/p2/img4.jpeg',
            ]

        },

        // Add more products here if needed
    ];


 // State to keep track of the selected image index for each product
 const [imageIndexes, setImageIndexes] = useState<{
  [key: number]: number;
}>(
  products.reduce((acc, product) => {
      acc[product.id] = 0; // Initial image index is 0 for each product
      return acc;
  }, {} as { [key: number]: number })
);

const handleImageChange = (productId: number, index: number) => {
  setImageIndexes((prevIndexes) => ({
      ...prevIndexes,
      [productId]: index,
  }));
};





    // State to keep track of the selected image index for each product
    // const [imageIndexes, setImageIndexes] = useState(
    //     products.reduce((acc, product) => {
    //         acc[product.id] = 0; // Initial image index is 0 for each product
    //         return acc;
    //     }, {})
    // );

    // const handleImageChange = (productId: number, index: number) => {
    //     setImageIndexes((prevIndexes) => ({
    //         ...prevIndexes,
    //         [productId]: index
    //     }));
    // };

    return (
        <div className='max-h-screen max-w-screen-2xl mx-auto'>

            <div className='flex flex-col items-center justify-center mb-0'>
                <div className='mx-auto mt-2'>
                    <video src="/accessories/watch/watch.mp4" className='w-[1530px] h-[400px]'></video>
                </div>
            </div>
            <h1 className='text-2xl md:text-4xl text-center font-bold my-5'>LATEST WATCHES COLLECTION </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto justify-center my-8">
      
      {products.map((product) => (
        <div key={product.id} className="relative flex flex-col justify-center items-center">
          {/* Carousel Image */}
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden mb-2">
            <Link href={product.href}>
              <Image
                src={product.images[imageIndexes[product.id]]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out"
              />
            </Link>
            {/* Radio Buttons to switch images */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <label key={index} className="cursor-pointer">
                  <input
                    type="radio"
                    name={`image-radio-${product.id}`}
                    checked={imageIndexes[product.id] === index}
                    onChange={() => handleImageChange(product.id, index)}
                    className="hidden"
                  />
                  <span
                    className={`w-3 h-3 rounded-full inline-block border-2 border-gray-600 ${imageIndexes[product.id] === index ? 'bg-gray-600' : 'bg-transparent'
                      }`}
                  ></span>
                </label>
              ))}
            </div>
          </div>
  
          {/* Product Name and Price */}
          <div className="mt-1 text-left">
            <h1 className="text-sm font-bold">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  
        </div>
    );
};

export default WatchList;
