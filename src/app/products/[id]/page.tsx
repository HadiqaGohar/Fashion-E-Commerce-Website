'use client'
import Review from '@/app/components/Review';
import React, { useState, useEffect } from 'react';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { data } from '@/utils/data'
import AddToCart from '@/app/components/AddToCart'

// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     shirt: string;
//     fabric: string;
//     color: string;
//     weight: string;
//     rate: number;
//     instruction: string;
//     disclaimer: string;
//     code: string;
//     images: string[];
//     countInStock: number

// };


const ProductId = () => {  // Accept params as a prop


    const { products } = data
    const params = useParams(); // Retrieve dynamic route params

    const productId = Number(params?.id);
    const selectedProduct = products.find((item) => item.id === productId);
    const [selectedImage, setSelectedImage] = useState<string>(
        selectedProduct?.images[0] || ''
    );
    const [isCareInstructionsOpen, setCareInstructionsOpen] = useState(false);
    const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);

    useEffect(() => {
        if (selectedProduct) {
            setSelectedImage(selectedProduct.images[0]);
        }
    }, [selectedProduct]);

    if (!selectedProduct) {
        return (
            <div className="max-w-screen-xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Item not found</h1>
                <p>The item you are looking for does not exist.</p>
            </div>
        );
    }

    const renderStars = (rating: number): JSX.Element[] => {
        return Array.from({ length: 5 }, (_, i) =>
            i < rating ? (
                <IoMdStar key={i} className="text-yellow-500" />
            ) : (
                <IoMdStarOutline key={i} className="text-yellow-500" />
            )
        );
    };

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    return (
        <div className=" max-w-screen-2xl mx-auto">
            <div className="flex flex-col  lg:flex-row justify-center lg:justify-between m-10 mt-16">
                {/* Left: Product Image and Thumbnails */}
                <div className="flex flex-col lg:flex-row justify-center lg:w-1/3 gap-4">
                    <div className="relative">
                        <Image
                            src={selectedImage}
                            alt="Selected Product"
                            width={800}
                            height={600}
                            className="max-w-full md:h-[600px] h-[400px] object-cover mx-auto"
                        />
                    </div>

                    <div className="flex flex-row lg:flex-col gap-1 mt-4 lg:mt-0 lg:ml-2 mx-auto">
                        {selectedProduct.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                width={64}
                                height={64}
                                alt={`Product ${index}`}
                                className={`w-10 h-10 md:w-28 md:h-16 cursor-pointer border-2 ${selectedImage === image ? 'border-blue-500' : 'border-gray-300'}`}
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Center Column: Product Details */}
                <div className="flex flex-col lg:w-1/4">
                    <h1 className="text-3xl font-serif md:mt-0 mt-6">{selectedProduct.name}</h1>
                    <p className="mt-2 text-xl font-serif"><span className='text-teal-600 font-black'>$</span>{selectedProduct.price}.00</p>

                    <div className="flex mt-2">{renderStars(selectedProduct.rate)}</div>

                    <div className=''>
                        <AddToCart
                            showQty={false}
                            product={selectedProduct}
                            increasePerClick={true}
                            redirect={true}
                        />

                    </div>
                    {/* 48:53 */}

                    {/* Care Instructions Dropdown */}
                    <div>
                        <p
                            className="cursor-pointer text-gray-700 font-semibold my-4"
                            onClick={() => setCareInstructionsOpen(!isCareInstructionsOpen)}
                        >
                            Care Instructions <MdOutlineKeyboardArrowDown />
                        </p>
                        {isCareInstructionsOpen && <p className="my-4 text-gray-600">{selectedProduct.instruction}</p>}
                    </div>

                    {/* Disclaimer Dropdown */}
                    <div>
                        <p
                            className="cursor-pointer text-gray-700 font-semibold my-4"
                            onClick={() => setDisclaimerOpen(!isDisclaimerOpen)}
                        >
                            Disclaimer <MdOutlineKeyboardArrowDown />
                        </p>
                        {isDisclaimerOpen && <p className="my-4 text-gray-600">{selectedProduct.disclaimer}</p>}
                    </div>
                    <Review />
                </div>

                {/* Right Column: Additional Product Info */}
                <div className="flex flex-col lg:w-1/4">
                    <h3 className="mt-16 text-xl font-semibold text-gray-700 sm:mt-8 md:mt-12 lg:mt-16">Description</h3>
                    <hr className="h-1 bg-gray-600 rounded-full w-14 sm:w-16 md:w-20 lg:w-24" />
                    <h2 className="mt-4 text-lg font-medium text-gray-700">Shirt</h2>
                    <p className="m-2 text-gray-600">{selectedProduct.shirt}</p>
                    <p className="m-2 text-gray-600 font-semibold">
                        Fabric : <span className="font-medium text-gray-500">{selectedProduct.fabric}</span>
                    </p>
                    <h2 className="mt-4 text-lg font-medium text-gray-700">Other Details</h2>
                    <p className="m-2 text-gray-600 font-semibold">
                        Color : <span className="font-medium text-gray-500">{selectedProduct.color}</span>
                    </p>
                    <p className="m-2 text-gray-600 font-semibold">
                        Weight : <span className="font-medium text-gray-500">{selectedProduct.weight}</span>
                    </p>
                    <p className="m-2 text-gray-600 font-semibold">
                        Code : <span className="font-medium text-gray-500">{selectedProduct.code}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductId;