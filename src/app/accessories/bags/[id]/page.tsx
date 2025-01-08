'use client'

import Review from '@/app/components/Review';
import React, { useState, useEffect } from 'react';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { useParams } from 'next/navigation';


type Product = {
  id: number;
  name: string;
  price: string;
  shirt: string;
  fabric: string;
  color: string;
  weight: string;
  rate: number;
  instruction: string;
  disclaimer: string;
  code: string;
  images: string[];
};



const products: Product[] = [
 
    {
      id: 1,
      name: "Classic Bucket Handbag",
      price: "$5.00",
      shirt: "Classic bucket handbag, Top handle, Magnetic fastener lock, Single compartment, Detachable shoulder strap",
      fabric: "Rexine",
      color: "Navy",
      weight: "544g",
      rate: 5,
      instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
      disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
      code: "I8528JK-FRE-BNW",
      images: [
        '/accessories/bag/p1/1.jpeg',
        '/accessories/bag/p1/2.jpeg',
        '/accessories/bag/p1/3.jpeg',
        '/accessories/bag/p1/4.jpeg',
      ]
    },
    {
      id: 2,
      name: "Engraved Clutch",
      price: "$6.00",
      shirt: "Engraved clutch with metallic brooch, Magnetic fastener lock, Single compartment with a mini zipped pocket, Metallic shoulder chain",
      fabric: "Rexine",
      color: "Olive",
      weight: "354g",
      rate: 4,
      instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
      disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
      code: "I8174ST-MED-BGE",
      images: [
        '/accessories/bag/p2/1.jpeg',
        '/accessories/bag/p2/2.jpeg',
        '/accessories/bag/p2/3.jpeg',
        '/accessories/bag/p2/4.jpeg',
      ]
    },
    {
      id: 3,
      name: "Stitch Pattern Clutch",
      price: "$6.00",
      shirt: "Stitch pattern clutch with metallic brooch, Twist lock, One compartment with zip closure, One open compartment with a zipped pocket, Shoulder strap with handle ",
      fabric: "Rexine",
      color: "Green",
      weight: "400g",
      rate: 4,
      instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
      disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
      code: "W1748TP-XSL-565",
      images: [
        '/accessories/bag/p3/1.jpeg',
        '/accessories/bag/p3/2.jpeg',
        '/accessories/bag/p3/3.jpeg',
        '/accessories/bag/p3/4.jpeg',
        '/accessories/bag/p3/5.jpeg',
      ]
    },
    {
      id: 4,
      name: "Classic Tote Bag",
      price: "$6.00",
      shirt: "Classic tote bag, Zip closure, Single compartments, One mini zipped pocket, Two chain top handles",
      fabric: "Rexine",
      color: "Brown",
      weight: "400g",
      rate: 4,
      instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
      disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
      code: "U3695SH-SSH-034",
      images: [
        '/accessories/bag/p4/1.jpeg',
        '/accessories/bag/p4/2.jpeg',
        '/accessories/bag/p4/3.jpeg',
        '/accessories/bag/p4/4.jpeg',
        '/accessories/bag/p4/5.jpeg',
      ]
    },
  ];

  const BagsId =  () => {


    const params = useParams(); // Retrieve dynamic route params
    const productId = Number(params?.id);
  
    const selectedProduct = products.find((item) => item.id === productId);
  
    const [selectedImage, setSelectedImage] = useState<string>(
      selectedProduct?.images[0] || ''
    );
    const [isCareInstructionsOpen, setCareInstructionsOpen] = useState(false);
    const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);
      //  const [cart, setCart] = useState<Product[]>([]); // Cart state
    
  
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


     
    // Define the addItem function
    // const addItem = (product: Product) => {
    //   setCart((prevCart) => [...prevCart, product]);
    // };
  
    if (!selectedProduct) {
      return (
        <div className="max-w-screen-xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Item not found</h1>
          <p>The item you are looking for does not exist.</p>
        </div>
      );
    }



  
    return (
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between m-10 mt-16">
          {/* Left Column */}
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
                  className={`w-10 h-10 md:w-28 md:h-16 cursor-pointer border-2 ${
                    selectedImage === image ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
  
          {/* Center Column */}
          <div className="flex flex-col lg:w-1/4">
            <h1 className="text-3xl font-serif">{selectedProduct.name}</h1>
            <p className="mt-2 text-xl font-serif">{selectedProduct.price}</p>
            <div className="flex mt-2">{renderStars(selectedProduct.rate)}</div>
           
              <button
              className="bg-black text-white h-12 w-[80%] rounded-xl my-8 shadow-lg"
              
            >
              Add to Cart
            </button>
            
            <div>
              <p
                className="cursor-pointer text-gray-700 font-semibold my-4"
                onClick={() => setCareInstructionsOpen(!isCareInstructionsOpen)}
              >
                Care Instructions <MdOutlineKeyboardArrowDown />
              </p>
              {isCareInstructionsOpen && (
                <p className="my-4 text-gray-600">{selectedProduct.instruction}</p>
              )}
            </div>
            <div>
              <p
                className="cursor-pointer text-gray-700 font-semibold my-4"
                onClick={() => setDisclaimerOpen(!isDisclaimerOpen)}
              >
                Disclaimer <MdOutlineKeyboardArrowDown />
              </p>
              {isDisclaimerOpen && (
                <p className="my-4 text-gray-600">{selectedProduct.disclaimer}</p>
              )}
            </div>
            <Review />
          </div>
  
          {/* Right Column */}
          <div className="flex flex-col lg:w-1/4">
            <h3 className="mt-16 text-xl font-semibold text-gray-700 sm:mt-8 md:mt-12 lg:mt-16">
              Description
            </h3>
            <hr className="h-1 bg-gray-600 rounded-full w-14 sm:w-16 md:w-20 lg:w-24" />
            <h2 className="mt-4 text-lg font-medium text-gray-700">Shirt</h2>
            <p className="m-2 text-gray-600">{selectedProduct.shirt}</p>
            <p className="m-2 text-gray-600 font-semibold">
              Fabric:{' '}
              <span className="font-medium text-gray-500">
                {selectedProduct.fabric}
              </span>
            </p>
            <h2 className="mt-4 text-lg font-medium text-gray-700">
              Other Details
            </h2>
            <p className="m-2 text-gray-600 font-semibold">
              Color:{' '}
              <span className="font-medium text-gray-500">
                {selectedProduct.color}
              </span>
            </p>
            <p className="m-2 text-gray-600 font-semibold">
              Weight:{' '}
              <span className="font-medium text-gray-500">
                {selectedProduct.weight}
              </span>
            </p>
            <p className="m-2 text-gray-600 font-semibold">
              Code:{' '}
              <span className="font-medium text-gray-500">
                {selectedProduct.code}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default BagsId;




  // const BagsId = () => {
  //   const params = useParams();
  //   const productId = Number(params?.id);
  //   const selectedProduct = products.find((item) => item.id === productId);
  
  //   const [selectedImage, setSelectedImage] = useState<string>(selectedProduct?.images[0] || '');
  //   const [isCareInstructionsOpen, setCareInstructionsOpen] = useState(false);
  //   const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);
  //   const [cart, setCart] = useState<Product[]>([]); // Cart state
    
  //   useEffect(() => {
  //     if (selectedProduct) {
  //       setSelectedImage(selectedProduct.images[0]);
  //     }
  //   }, [selectedProduct]);
  
  //   const renderStars = (rating: number): JSX.Element[] => {
  //     return Array.from({ length: 5 }, (_, i) =>
  //       i < rating ? (
  //         <IoMdStar key={i} className="text-yellow-500" />
  //       ) : (
  //         <IoMdStarOutline key={i} className="text-yellow-500" />
  //       )
  //     );
  //   };
  
  //   const handleImageClick = (imageUrl: string) => {
  //     setSelectedImage(imageUrl);
  //   };
  
  //   // Define the addItem function
  //   const addItem = (product: Product) => {
  //     setCart((prevCart) => [...prevCart, product]);
  //   };
  
  //   if (!selectedProduct) {
  //     return (
  //       <div className="max-w-screen-xl mx-auto p-4">
  //         <h1 className="text-2xl font-bold mb-4">Item not found</h1>
  //         <p>The item you are looking for does not exist.</p>
  //       </div>
  //     );
  //   }
  
  //   return (
  //     <div className="max-w-screen-2xl mx-auto">
  //       <div className="flex flex-col lg:flex-row justify-center lg:justify-between m-10 mt-16">
  //         {/* Left Column */}
  //         <div className="flex flex-col lg:flex-row justify-center lg:w-1/3 gap-4">
  //           <div className="relative">
  //             <Image
  //               src={selectedImage}
  //               alt="Selected Product"
  //               width={800}
  //               height={600}
  //               className="max-w-full md:h-[600px] h-[400px] object-cover mx-auto"
  //             />
  //           </div>
  //           <div className="flex flex-row lg:flex-col gap-1 mt-4 lg:mt-0 lg:ml-2 mx-auto">
  //             {selectedProduct.images.map((image, index) => (
  //               <Image
  //                 key={index}
  //                 src={image}
  //                 width={64}
  //                 height={64}
  //                 alt={`Product ${index}`}
  //                 className={`w-10 h-10 md:w-28 md:h-16 cursor-pointer border-2 ${
  //                   selectedImage === image ? 'border-blue-500' : 'border-gray-300'
  //                 }`}
  //                 onClick={() => handleImageClick(image)}
  //               />
  //             ))}
  //           </div>
  //         </div>
  
  //         {/* Center Column */}
  //         <div className="flex flex-col lg:w-1/4">
  //           <h1 className="text-3xl font-serif">{selectedProduct.name}</h1>
  //           <p className="mt-2 text-xl font-serif">{selectedProduct.price}</p>
  //           <div className="flex mt-2">{renderStars(selectedProduct.rate)}</div>
  //           <button
  //             className="bg-black text-white h-12 w-[80%] rounded-xl my-8 shadow-lg"
  //             onClick={() => addItem(selectedProduct)} // Add item to cart
  //           >
  //             Add to Cart
  //           </button>
  //           <div>
  //             <p
  //               className="cursor-pointer text-gray-700 font-semibold my-4"
  //               onClick={() => setCareInstructionsOpen(!isCareInstructionsOpen)}
  //             >
  //               Care Instructions <MdOutlineKeyboardArrowDown />
  //             </p>
  //             {isCareInstructionsOpen && (
  //               <p className="my-4 text-gray-600">{selectedProduct.instruction}</p>
  //             )}
  //           </div>
  //           <div>
  //             <p
  //               className="cursor-pointer text-gray-700 font-semibold my-4"
  //               onClick={() => setDisclaimerOpen(!isDisclaimerOpen)}
  //             >
  //               Disclaimer <MdOutlineKeyboardArrowDown />
  //             </p>
  //             {isDisclaimerOpen && (
  //               <p className="my-4 text-gray-600">{selectedProduct.disclaimer}</p>
  //             )}
  //           </div>
  //           <Review />
  //         </div>
  
  //         {/* Cart Display */}
  //         <div className="cart-list">
  //           <h2>Cart:</h2>
  //           {cart.length > 0 ? (
  //             <ul>
  //               {cart.map((product, index) => (
  //                 <li key={index}>{product.name} - {product.price}</li>
  //               ))}
  //             </ul>
  //           ) : (
  //             <p>No items in cart</p>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default BagsId;
  










  