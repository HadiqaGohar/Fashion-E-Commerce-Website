'use client';

import Link from 'next/link';
import React, { useState } from 'react';
// import { FaSquarespace } from 'react-icons/fa';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import Image from 'next/image';
// import { data } from '@/app/utils/data'
// import ProductItem from '@/app/components/ProductItem'

const Products = () => {


//   const { products } = data


  // Array of products with id, name, price, and multiple image URLs
  const products = [
      {
          id: 1,
          name: "Sequin Jacket",
          price: "$255.00",
          href: "/products/1",
          images: [
              '/woman/shirts/p1/img1.jpeg',
              '/woman/shirts/p1/img2.jpeg',
              '/woman/shirts/p1/img3.jpeg',
              '/woman/shirts/p1/img4.jpeg',
              '/woman/shirts/p1/img5.jpeg',
              '/woman/shirts/p1/img6.jpeg',
              '/woman/shirts/p1/img7.jpeg',
              '/woman/shirts/p1/img8.jpeg',
              '/woman/shirts/p1/img9.jpeg',
          ]
      },
      {
          id: 2,
          name: "Embellished Sweater",
          price: "$106.00",
          href: "/products/2",
          images: [
              '/woman/shirts/p2/img1.jpeg',
              '/woman/shirts/p2/img2.jpeg',
              '/woman/shirts/p2/img3.jpeg',
              '/woman/shirts/p2/img4.jpeg',
              '/woman/shirts/p2/img5.jpeg',
              '/woman/shirts/p2/img6.jpeg',
              '/woman/shirts/p2/img7.jpeg',
              '/woman/shirts/p2/img8.jpeg',

          ]

      },
      {
          id: 3,
          name: "Dyed Silk Top",
          price: "$160.00",
          href: "/products/3",
          images: [
              '/woman/shirts/p3/img5.jpeg',
              '/woman/shirts/p3/img2.jpeg',
              '/woman/shirts/p3/img3.jpeg',
              '/woman/shirts/p3/img4.jpeg',
              '/woman/shirts/p3/img1.jpeg',
              '/woman/shirts/p3/img6.jpeg',
              '/woman/shirts/p3/img7.jpeg',
              '/woman/shirts/p3/img8.jpeg',
          ]

      },
      {
          id: 4,
          name: "Dyed Grip Co-Ord Set",
          price: "$236.00",
          href: "/products/4",
          images: [
              '/woman/shirts/p4/img1.jpeg',
              '/woman/shirts/p4/img2.jpeg',
              '/woman/shirts/p4/img3.jpeg',
              '/woman/shirts/p4/img4.jpeg',
              '/woman/shirts/p4/img5.jpeg',
              '/woman/shirts/p4/img6.jpeg',

          ]

      },
      // Add more products here if needed
      {
          id: 5,
          name: "Printed Satin Scarf",
          price: "$106.00",
          href: "/products/5",
          images: [
              '/woman/scarves/p1/img1.jpeg',
              '/woman/scarves/p1/img2.jpeg',
              '/woman/scarves/p1/img3.jpeg',
              '/woman/scarves/p1/img4.jpeg',
          ]
      },
      {
          id: 6,
          name: "Printed Viscose Scarf",
          price: "$106.00",
          href: "/products/6",
          images: [
              '/woman/scarves/p2/img1.jpeg',
              '/woman/scarves/p2/img2.jpeg',
              '/woman/scarves/p2/img3.jpeg',
              '/woman/scarves/p2/img4.jpeg',

          ]

      },
      {
          id: 7,
          name: "Printed Wool Scarf",
          price: "$106.00",
          href: "/products/7",
          images: [
              '/woman/scarves/p3/img1.jpeg',
              '/woman/scarves/p3/img2.jpeg',
              '/woman/scarves/p3/img3.jpeg',
              '/woman/scarves/p3/img4.jpeg',]


      },
      {
          id: 8,
          name: "Floral Printed Viscose Scarf",
          price: "$106.00",
          href: "/products/8",
          images: [
              '/woman/scarves/p4/img1.jpeg',
              '/woman/scarves/p4/img2.jpeg',
              '/woman/scarves/p4/img3.jpeg',
              '/woman/scarves/p4/img4.jpeg',

          ]

      },
      {
          id: 9,
          name: "Embellished Crew Neck Sweater",
          price: "$225.00",
          href: "/products/9",
          images: [
              '/woman/sale/winter/p1/img1.jpeg',
              '/woman/sale/winter/p1/img2.jpeg',
              '/woman/sale/winter/p1/img3.jpeg',
              '/woman/sale/winter/p1/img4.jpeg',
              '/woman/sale/winter/p1/img5.jpeg',
              '/woman/sale/winter/p1/img6.jpeg',
              '/woman/sale/winter/p1/img7.jpeg',
              '/woman/sale/winter/p1/img8.jpeg',

          ]
      },
      {
          id: 10,
          name: "Woolen Fur Cape Shawl",
          price: "$346.00",
          href: "/products/10",
          images: [
              '/woman/sale/winter/p2/img1.jpeg',
              '/woman/sale/winter/p2/img2.jpeg',
              '/woman/sale/winter/p2/img3.jpeg',
              '/woman/sale/winter/p2/img4.jpeg',
              '/woman/sale/winter/p2/img5.jpeg',
              '/woman/sale/winter/p2/img6.jpeg',
              '/woman/sale/winter/p2/img7.jpeg',
              '/woman/sale/winter/p2/img8.jpeg',

          ]

      },
      {
          id: 11,
          name: "Embellished Woolen Sweater",
          price: "$536.00",
          href: "/products/11",
          images: [
              '/woman/sale/winter/p3/img1.jpeg',
              '/woman/sale/winter/p3/img2.jpeg',
              '/woman/sale/winter/p3/img3.jpeg',
              '/woman/sale/winter/p3/img4.jpeg',
              '/woman/sale/winter/p3/img5.jpeg',
              '/woman/sale/winter/p3/img6.jpeg',
              '/woman/sale/winter/p3/img7.jpeg',
          ]

      },
      {
          id: 12,
          name: "Glittered Sweater",
          price: "$216.00",
          href: "/products/12",
          images: [

              '/woman/sale/winter/p4/img1.jpeg',
              '/woman/sale/winter/p4/img2.jpeg',
              '/woman/sale/winter/p4/img3.jpeg',
              '/woman/sale/winter/p4/img4.jpeg',
              '/woman/sale/winter/p4/img5.jpeg',
              '/woman/sale/winter/p4/img6.jpeg',
              '/woman/sale/winter/p4/img7.jpeg',
          ]

      },
      {
          id: 13,
          name: "Embroidered Net Top",
          price: "$315.00",
          href: "/products/13",
          images: [
              '/woman/sale/summer/p1/img1.jpeg',
              '/woman/sale/summer/p1/img2.jpeg',
              '/woman/sale/summer/p1/img3.jpeg',
              '/woman/sale/summer/p1/img4.jpeg',
              '/woman/sale/summer/p1/img5.jpeg',
              '/woman/sale/summer/p1/img6.jpeg',

          ]
      },
      {
          id: 14,
          name: "Printed Grip Top",
          price: "$536.00",
          href: "/products/14",
          images: [

              '/woman/sale/summer/p2/img1.jpeg',
              '/woman/sale/summer/p2/img2.jpeg',
              '/woman/sale/summer/p2/img3.jpeg',
              '/woman/sale/summer/p2/img4.jpeg',
              '/woman/sale/summer/p2/img5.jpeg',
              '/woman/sale/summer/p2/img6.jpeg',
          ]

      },
      {
          id: 15,
          name: "Dyed Raw Silk Co-Ord Set",
          price: "$326.00",
          href: "/products/15",
          images: [

              '/woman/sale/summer/p3/img1.jpeg',
              '/woman/sale/summer/p3/img2.jpeg',
              '/woman/sale/summer/p3/img3.jpeg',
              '/woman/sale/summer/p3/img4.jpeg',
              '/woman/sale/summer/p3/img5.jpeg',
              '/woman/sale/summer/p3/img6.jpeg',]

      },
      {
          id: 16,
          name: "Viscose Top-Dyed",
          price: "$236.00",
          href: "/products/16",
          images: [
              '/woman/sale/summer/p4/img1.jpeg',
              '/woman/sale/summer/p4/img2.jpeg',
              '/woman/sale/summer/p4/img3.jpeg',
              '/woman/sale/summer/p4/img4.jpeg',
              '/woman/sale/summer/p4/img5.jpeg',

          ]

      },
      // Add more products here if needed
      {
          id: 17,
          name: "Dyed Silk Top",
          price: "$325.00",
          href: "/products/17",
          images: [
              '/woman/sale/spring/p1/img1.jpeg',
              '/woman/sale/spring/p1/img2.jpeg',
              '/woman/sale/spring/p1/img3.jpeg',
              '/woman/sale/spring/p1/img4.jpeg',
              '/woman/sale/spring/p1/img5.jpeg',
              '/woman/sale/spring/p1/img6.jpeg',
          ]
      },
      {
          id: 18,
          name: "Embroidered Grip Top",
          price: "$246.00",
          href: "/products/18",
          images: [
              '/woman/sale/spring/p2/img1.jpeg',
              '/woman/sale/spring/p2img2.jpeg',
              '/woman/sale/spring/p2/img3.jpeg',
              '/woman/sale/spring/p2/img4.jpeg',
              '/woman/sale/spring/p2/img5.jpeg',
              '/woman/sale/spring/p2/img6.jpeg',

          ]

      },
      {
          id: 19,
          name: "Embellished Raw Silk Top",
          price: "$346.00",
          href: "/products/19",
          images: [

              '/woman/sale/spring/p3/img1.jpeg',
              '/woman/sale/spring/p3/img2.jpeg',
              '/woman/sale/spring/p3/img3.jpeg',
              '/woman/sale/spring/p3/img4.jpeg',
              '/woman/sale/spring/p3/img5.jpeg',
              '/woman/sale/spring/p3/img6.jpeg',]


      },

      {
          id: 20,
          name: "Woolen Cardigan",
          price: "$546.00",
          href: "/products/20",
          images: [
              '/woman/sale/spring/p4/img1.jpeg',
              '/woman/sale/spring/p4/img2.jpeg',
              '/woman/sale/spring/p4/img3.jpeg',
              '/woman/sale/spring/p4/img4.jpeg',
              '/woman/sale/spring/p4/img5.jpeg',
              '/woman/sale/spring/p4/img6.jpeg',

          ]

      },
      {
          id: 21,
          name: "Dyed Grip Pants",
          price: "$235.00",
          href: "/products/21",
          images: [
              '/woman/bottom/p1/img1.jpeg',
              '/woman/bottom/p1/img2.jpeg',
              '/woman/bottom/p1/img3.jpeg',
              '/woman/bottom/p1/img4.jpeg',

          ]
      },
      {
          id: 22,
          name: "Leather Pants",
          price: "$426.00",
          href: "/products/22",
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
          id: 23,
          name: "Basic Skinny Jeans",
          price: "$436.00",
          href: "/products/23",
          images: [
              '/woman/bottom/p3/img1.jpeg',
              '/woman/bottom/p3/img2.jpeg',
              '/woman/bottom/p3/img3.jpeg',
              '/woman/bottom/p3/img4.jpeg',
              '/woman/bottom/p3/img5.jpeg',
          ]
      },
      {
          id: 24,
          name: "Snake Print Jersey Pants",
          price: "$436.00",
          href: "/products/24",
          images: [
              '/woman/bottom/p4/img1.jpeg',
              '/woman/bottom/p4/img2.jpeg',
              '/woman/bottom/p4/img3.jpeg',
              '/woman/bottom/p4/img4.jpeg',
          ]

      },
      // Add more products here if needed
      {
          id: 25,
          name: "Classic Bucket Handbag",
          price: "$535.00",
          href: "/products/25",
          images: [
              '/accessories/bag/p1/1.jpeg',
              '/accessories/bag/p1/2.jpeg',
              '/accessories/bag/p1/3.jpeg',
              '/accessories/bag/p1/4.jpeg',

          ]
      },
      {
          id: 26,
          name: "Engraved Clutch",
          price: "$6.00",
          href: "/products/26",
          images: [
              '/accessories/bag/p2/1.jpeg',
              '/accessories/bag/p2/2.jpeg',
              '/accessories/bag/p2/3.jpeg',
              '/accessories/bag/p2/4.jpeg',

          ]

      },
      {
          id: 27,
          name: "Stitch Pattern Clutch",
          price: "$346.00",
          href: "/products/27",
          images: [


              '/accessories/bag/p3/1.jpeg',
              '/accessories/bag/p3/2.jpeg',
              '/accessories/bag/p3/3.jpeg',
              '/accessories/bag/p3/4.jpeg',
              '/accessories/bag/p3/5.jpeg',]

      },

      {
          id: 28,
          name: "Classic Tote Bag",
          price: "$456.00",
          href: "/products/28",
          images: [

              '/accessories/bag/p4/1.jpeg',
              '/accessories/bag/p4/2.jpeg',
              '/accessories/bag/p4/3.jpeg',
              '/accessories/bag/p4/4.jpeg',
              '/accessories/bag/p4/5.jpeg',
          ]

      },
      // Add more products here if needed

      {
          id: 29,
          name: "Classic Heels",
          price: "$266.00",
          href: "/products/29",
          images: [
              '/accessories/footwear/woman/p1/img1.jpeg',
              '/accessories/footwear/woman/p1/img2.jpeg',
              '/accessories/footwear/woman/p1/img3.jpeg',
              '/accessories/footwear/woman/p1/img4.jpeg',
          ]
      },
      {
          id: 30,
          name: "Braided Sliders",
          price: "$326.00",
          href: "/products/30",
          images: [
              '/accessories/footwear/woman/p2/img1.jpeg',
              '/accessories/footwear/woman/p2/img2.jpeg',
              '/accessories/footwear/woman/p2/img3.jpeg',
              '/accessories/footwear/woman/p2/img4.jpeg',
              '/accessories/footwear/woman/p2/img5.jpeg',

          ]

      },
      {
          id: 31,
          name: "Abstract Floral Earrings",
          price: "$345.00",
          href: "/products/31",
          images: [
              '/accessories/jewellery/p1/1.jpeg',
              '/accessories/jewellery/p1/2.jpeg',
          ]
      },
      {
          id: 32,
          name: "Sturdy Open Bangle",
          price: "$346.00",
          href: "/products/32",
          images: [

              '/accessories/jewellery/p2/1.jpeg',
              '/accessories/jewellery/p2/2.jpeg',
              '/accessories/jewellery/p2/3.jpeg',
              '/accessories/jewellery/p2/4.jpeg',
          ]

      },
      {
          id: 33,
          name: "Classic Watch",
          price: "$425.00",
          href: "/products/33",
          images: [
              '/accessories/watch/p1/img1.jpeg',
              '/accessories/watch/p1/img2.jpeg',
              '/accessories/watch/p1/img3.jpeg',
              '/accessories/watch/p1/img4.jpeg',
          ]
      },
      {
          id: 34,
          name: "Classic Leather Watch ",
          price: "$216.00",
          href: "/products/34",
          images: [
              '/accessories/watch/p2/img1.jpeg',
              '/accessories/watch/p2/img2.jpeg',
              '/accessories/watch/p2/img3.jpeg',
              '/accessories/watch/p2/img4.jpeg',
          ]

      },


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



  return (
    <div className="max-w-screen-2xl mx-auto">

      {/* Breadcrumb */}
      <p className="text-xs sm:text-sm text-gray-600 my-6 md:ml-6">
        <Link href="/" className="hover:text-teal-500">Home</Link> / <Link href="/products" className="hover:text-teal-500">Products</Link>
      </p>

      <div className="flex gap-2">
        <div className="text-teal-500 text-3xl sm:text-2xl md:ml-6 mt-10 md:mt-6" aria-label="Shopping Cart Icon">
          <HiMiniSquares2X2 size={40} />
        </div>
        <h2 className="text-3xl sm:text-4xl text-gray-700 font-semibold mb-6 mt-10 md:mt-6">All Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto justify-center my-8">

        {products.map((product) => (
          <div key={product.id} className="relative flex flex-col justify-center items-center">










            {/* Carousel Image */}
            <div className="relative w-full h-[450px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden mb-2">
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

export default Products;
