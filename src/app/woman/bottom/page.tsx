'use client';

// src/app/man/page.tsx
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const WomanBottomList = () => {
    // Array of products with id, name, price, and multiple image URLs
    const products = [
        {
            id: 1,
            name: "Dyed Grip Pants",
            price: "$5.00",
            href: "/woman/bottom/1",
            images: [
                '/woman/bottom/p1/img1.jpeg',
                '/woman/bottom/p1/img2.jpeg',
                '/woman/bottom/p1/img3.jpeg',
                '/woman/bottom/p1/img4.jpeg',
            ]
        },
        {
            id: 2,
            name: "Leather Pants",
            price: "$6.00",
            href: "/woman/bottom/2",
            images: [
                '/woman/bottom/p2/img1.jpeg',
                '/woman/bottom/p2/img2.jpeg',
                '/woman/bottom/p2/img3.jpeg',
                '/woman/bottom/p2/img4.jpeg',
                '/woman/bottom/p2/img5.jpeg',
                '/woman/bottom/p2/img6.jpeg',

            ]

        },
        {
            id: 3,
            name: "Basic Skinny Jeans",
            price: "$10.00",
            href: "/woman/bottom/3",
            images: [
                '/woman/bottom/p3/img1.jpeg',
                '/woman/bottom/p3/img2.jpeg',
                '/woman/bottom/p3/img3.jpeg',
                '/woman/bottom/p3/img4.jpeg',
                '/woman/bottom/p3/img5.jpeg',
            ]
        },
        {
            id: 4,
            name: "Snake Print Jersey Pants",
            price: "$8.00",
            href: "/woman/bottom/4",
            images: [
                '/woman/bottom/p4/img1.jpeg',
                '/woman/bottom/p4/img2.jpeg',
                '/woman/bottom/p4/img3.jpeg',
                '/woman/bottom/p4/img4.jpeg',
            ]

        },
        // Add more products here if needed
    ];

    // State to keep track of the selected image index for each product
    const [imageIndexes, setImageIndexes] = useState(
        products.reduce((acc, product) => {
            acc[product.id] = 0; // Initial image index is 0 for each product
            return acc;
        }, {})
    );

    const handleImageChange = (productId: number, index: number) => {
        setImageIndexes((prevIndexes) => ({
            ...prevIndexes,
            [productId]: index
        }));
    };

    return (
        <div className=' max-w-screen-2xl mx-auto'>

            <div className='flex flex-col items-center justify-center'>
                <div className='mx-auto'>

                    <video src="https://cdn.shopify.com/videos/c/o/v/b726cbd3ec124fa29d9dc0b0215de877.mp4"
                        height={400}
                        width={1530}
                        
                        className='justify-center items-center mt-2'
                    >
                    </video>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-x-auto mx-auto justify-center my-8 ">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 mx-auto my-8"> */}


                {products.map((product) => (

                    <div key={product.id} className="relative flex flex-col justify-center items-center">
                        {/* Carousel Image */}
                        <div className="relative w-[320px] h-[300px] md:w-[350px] lg:w-[370px] md:h-[400px] overflow-hidden mb-2">
                            <Link href={product.href}>
                                <Image
                                    src={product.images[imageIndexes[product.id]]}
                                    alt={product.name}
                                    height={100}
                                    width={100}
                                    layout="responsive"
                                    className="w-full h-full object-top object-cover transition-all duration-500 ease-in-out "
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
                            {/* Product Link */}

                        </div>

                    </div>

                ))
                }
            </div >


        </div>
    );
};

export default WomanBottomList;