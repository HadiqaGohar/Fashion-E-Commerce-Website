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
// type WomanBottomIdProps = {
//   params: { id: string };
// };





const products: Product[] = [
  {
    id: 1,
    name: "Dyed Grip Pants",
    price: "$5.00",
    shirt: "Zip and hooked closure on the front, Wide leg, Belt loops for using belts",
    fabric: "Grip",
    color: "Maroon",
    weight: "294g",
    rate: 5,
    instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
    disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
    code: "I8528JK-FRE-BNW",
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
    shirt: "Button and zip closure on the front, Two side fake pockets, Two back pockets, Zip closure on the hem for easy wear, Narrow leg, Durable material",
    fabric: "Faux leather",
    color: "Black",
    weight: "455g",
    rate: 4,
    instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
    disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
    code: "W1351PT-SML-001",
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
    price: "$6.00",
    shirt: "Dyed narrow-leg high-rise waist jeans, Two front pockets with mini coin pocket, Two back pockets, Belt loops, Front zip and button closure",
    fabric: "SDenim",
    color: "Blue",
    weight: "400g",
    rate: 4,
    instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
    disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
    code: "W1664JN-026-BLU",
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
    price: "$6.00",
    shirt: "Snake printed narrow leg pants, Elasticized waistband",
    fabric: "Jersey",
    color: "Snack Brown & Black",
    weight: "344g",
    rate: 4,
    instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
    disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
    code: "V0282TR-EXS-BGE",
    images: [
      '/woman/bottom/p4/img1.jpeg',
      '/woman/bottom/p4/img2.jpeg',
      '/woman/bottom/p4/img3.jpeg',
      '/woman/bottom/p4/img4.jpeg',
    ]
  },
];





const WomanBottomId = () => {


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
  

  // const [selectedImage, setSelectedImage] = useState<string>("");
  // const [isCareInstructionsOpen, setCareInstructionsOpen] = useState(false);
  // const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);

  // const selectedProduct = products.find((item) => item.id === Number(params.id));

  // useEffect(() => {
  //   if (selectedProduct) {
  //     setSelectedImage(selectedProduct.images[0] || ""); // Ensure a valid default image
  //   }
  // }, [selectedProduct]);

  // if (!selectedProduct) {
  //   return (
  //     <div className="max-w-screen-xl mx-auto p-4">
  //       <h1 className="text-2xl font-bold mb-4">Item not found</h1>
  //       <p>The item you are looking for does not exist.</p>
  //     </div>
  //   );
  // }

  // const renderStars = (rating: number): JSX.Element[] => {
  //   return Array.from({ length: 5 }, (_, i) =>
  //     i < rating ? (
  //       <IoMdStar key={i} className="text-yellow-500" />
  //     ) : (
  //       <IoMdStarOutline key={i} className="text-yellow-500" />
  //     )
  //   );
  // };

  // const handleImageClick = (imageUrl: string) => {
  //   setSelectedImage(imageUrl);
  // };


  // const [isCareInstructionsOpen, setCareInstructionsOpen] = useState(false);
  // const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState<string>(products[0].images[0]);

  // const renderStars = (rating: number) => {
  //   const stars: JSX.Element[] = [];
  //   for (let i = 0; i < 5; i++) {
  //     if (i < rating) {
  //       stars.push(<IoMdStar key={i} className="text-yellow-500" />);
  //     } else {
  //       stars.push(<IoMdStarOutline key={i} className="text-yellow-500" />);
  //     }
  //   }
  //   return stars;
  // };

  // const selectedProduct = products.find((item) => item.id === Number(params.id));

  // if (!selectedProduct) {
  //   return (
  //     <div className="max-w-screen-xl mx-auto p-4">
  //       <h1 className="text-2xl font-bold mb-4">Item not found</h1>
  //       <p>The item you are looking for does not exist.</p>
  //     </div>
  //   );
  // }

  // const handleImageClick = (imageUrl: string) => {
  //   console.log("Clicked Image:", imageUrl);
  //   setSelectedImage(imageUrl);
  // };

  // useEffect(() => {
  //   console.log("Selected Image Updated:", selectedImage);
  // }, [selectedImage]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between m-10 mt-16">
        {/* Left in big screen, top in small screen */}
        <div className="flex flex-col lg:flex-row justify-center lg:w-1/3 gap-4">
          {/* Main Image Section */}
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Product"
              width={800}
              height={600}
              className="max-w-full md:h-[600px] h-[400px] object-cover mx-auto"
            />
          </div>

          {/* Thumbnail Images Section */}
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
          <h1 className="text-3xl font-serif">{selectedProduct.name}</h1>
          <p className="mt-2 text-xl font-serif">{selectedProduct.price}</p>

          {/* Render Star Rating */}
          <div className="flex mt-2">{renderStars(selectedProduct.rate)}</div>

          {/* Add to Cart Button */}
          <button className="bg-black text-white h-12 w-[80%] rounded-xl my-8 shadow-lg">
            Add to Cart
          </button>

          {/* Care Instructions Dropdown */}
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

          {/* Disclaimer Dropdown */}
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

        {/* Right Column: Product Info */}
        <div className="flex flex-col lg:w-1/4">
          <div>
            <h3 className="mt-16 text-xl font-semibold text-gray-700 sm:mt-8 md:mt-12 lg:mt-16">
              Description
            </h3>
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
    </div>
  );
}

export default WomanBottomId;
