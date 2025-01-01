'use client'
import Review from '@/app/components/Review';
import React, { useState, useEffect } from 'react';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import Image from 'next/image';


interface Product {
    id: number;
    name: string;
    price: string;
    rate: number;
    images: string[];
    instruction: string;
    disclaimer: string;
    shirt: string;
    fabric: string;
    color: string;
    weight: string;
    code: string;
}

interface Params {
    id: string;
}


function WomanShirtId({ params }: { params: Params }) {  // Accept params as a prop
    const products : Product[] = [
        {
            id: 1,
            name: "Sequin Jacket",
            price: "$5.00",
            shirt: "Jacket",
            fabric: "Woolen Blend",
            color: "Brown",
            weight: "544g",
            rate: 5, // Rating: 5 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
            code: "I8528JK-FRE-BNW",
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
            price: "$6.00",
            shirt: "Rhinestone embellished sweater ",
            fabric: "Wool",
            color: "IBeige",
            weight: "354g",
            rate: 4, // Rating: 4 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",


            code: "I8174ST-MED-BGE",
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
            price: "$6.00",
            shirt: "Dyed button down top",
            fabric: "Silk",
            color: "Red",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "W1748TP-XSL-565",
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
            price: "$6.00",
            shirt: "Gold paste print shirt 1.83 M,",
            fabric: "Khaddar",
            color: "Black",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "U3695SH-SSH-034",
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
            price: "$5.00",
            shirt: "Printed scarf",
            fabric: "Satin",
            color: "Multi Color",
            weight: "182g",
            rate: 5, // Rating: 5 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
            code: "I6847SC-FRE-PT1",
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
            price: "$6.00",
            shirt: "Printed scarf ",
            fabric: "Satin",
            color: "Multi Color",
            weight: "182g",
            rate: 4, // Rating: 4 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",


            code: " I6845SC-FRE-P64",
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
            price: "$6.00",
            shirt: "Printed Scarf",
            fabric: "Satin",
            color: "Multi Color",
            weight: "182g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: " I6845SC-FRE-219",
            images: [
                '/woman/scarves/p3/img1.jpeg',
                '/woman/scarves/p3/img2.jpeg',
                '/woman/scarves/p3/img3.jpeg',
                '/woman/scarves/p3/img4.jpeg', 

            ]
        },
        {
            id: 8,
            name: "Floral Printed Viscose Scarf",
            price: "$6.00",
            shirt: "Floral printed scarf",
            fabric: "Viscose",
            color: "Multi Color",
            weight: "182g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "U3695SH-SSH-034",
            images: [

                '/woman/scarves/p4/img1.jpeg',
                '/woman/scarves/p4/img2.jpeg',
                '/woman/scarves/p4/img3.jpeg',
                '/woman/scarves/p4/img4.jpeg',
            
            ]
        },
        // Add more products here if needed
        {
            id: 9,
            name: "Embellished Crew Neck Sweater",
            price: "$5.00",
            shirt: "Rhinestone crew neck embellished sweater ",
            fabric: "Wool",
            color: "Beige",
            weight: "544g",
            rate: 5, // Rating: 5 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
            code: "I8528JK-FRE-BNW",
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
            price: "$6.00",
            shirt: "Dyed cape shawl with fur neck ",
            fabric: "Wool",
            color: "IBrown",
            weight: "354g",
            rate: 4, // Rating: 4 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",


            code: "I8174ST-MED-BGE",
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
            price: "$6.00",
            shirt: "Dyed embellished sweater, Full sleeves",
            fabric: "Silk",
            color: "Maroon",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "W1748TP-XSL-565",
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
            price: "$6.00",
            shirt: "Glittered crew neck sweater , Full sleeves,",
            fabric: "Wool",
            color: "Black",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "U3695SH-SSH-034",
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
            price: "$5.00",
            shirt: "Dyed sequin embroidered top",
            fabric: "Net, Cambric",
            color: "Pink",
            weight: "544g",
            rate: 5, // Rating: 5 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
            code: "I8528JK-FRE-BNW",
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
            price: "$6.00",
            shirt: "Printed neck top",
            fabric: "Grip",
            color: "IBrown",
            weight: "354g",
            rate: 4, // Rating: 4 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",


            code: "I8174ST-MED-BGE",
            images: [
           
                '/woman/sale/summer/p2/img1.jpeg',
                '/woman/sale/summer/p2/img2.jpeg',
                '/woman/sale/summer/p2/img3.jpeg',
                '/woman/sale/summer/p2/img4.jpeg',
                '/woman/sale/summer/p2/img5.jpeg',
                '/woman/sale/summer/p2/img6.jpeg',]
        },
        {
            id: 15,
            name: "Dyed Raw Silk Co-Ord Set",
            price: "$6.00",
            shirt: "Dyed top ",
            fabric: "Grip",
            color: "Yellow",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "W1748TP-XSL-565",
            images: [
              
                '/woman/sale/summer/p3/img1.jpeg',
                '/woman/sale/summer/p3/img2.jpeg',
                '/woman/sale/summer/p3/img3.jpeg',
                '/woman/sale/summer/p3/img4.jpeg',
                '/woman/sale/summer/p3/img5.jpeg',
                '/woman/sale/summer/p3/img6.jpeg',
            ]
        },
        {
            id: 16,
            name: "Viscose Top-Dyed",
            price: "$6.00",
            shirt: "Dyed top with cuff sleeves",
            fabric: "Viscos",
            color: "Red",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "U3695SH-SSH-034",
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
            price: "$5.00",
            shirt: "Dyed button down top",
            fabric: "Silk",
            color: "Ice-Blue",
            weight: "544g",
            rate: 5, // Rating: 5 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
            code: "I8528JK-FRE-BNW",
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
            price: "$6.00",
            shirt: "Dyed sequins embroidered loose fit top",
            fabric: "Grip",
            color: "Blue",
            weight: "354g",
            rate: 4, // Rating: 4 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",


            code: "I8174ST-MED-BGE",
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
            price: "$6.00",
            shirt: "Dyed sequins embellished top ",
            fabric: "Raw Silk",
            color: "Green",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "W1748TP-XSL-565",
            images: [
                '/woman/sale/spring/p3/img1.jpeg',
                '/woman/sale/spring/p3/img2.jpeg',
                '/woman/sale/spring/p3/img3.jpeg',
                '/woman/sale/spring/p3/img4.jpeg',
                '/woman/sale/spring/p3/img5.jpeg',
                '/woman/sale/spring/p3/img6.jpeg',


            ]
        },
       
        {
            id: 20,
            name: "Woolen Cardigan",
            price: "$6.00",
            shirt: "Dyed open front cardigan with fur on sleeves",
            fabric: "Wool",
            color: "Black",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "U3695SH-SSH-034",
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
            price: "$5.00",
            shirt: "Zip and hooked closure on the front, Wide leg, Belt loops for using belts",
            fabric: "Grip",
            color: "Maroon",
            weight: "294g",
            rate: 5, // Rating: 5 stars

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
            id: 22,
            name: "Leather Pants",
            price: "$6.00",
            shirt: "Button and zip closure on the front, Two side fake pockets, Two back pockets, Zip closure on the hem for easy wear, Narrow leg, Durable material ",
            fabric: "Faux leather",
            color: "Black",
            weight: "455g",
            rate: 4, // Rating: 4 stars

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
            id: 23,
            name: "Basic Skinny Jeans",
            price: "$6.00",
            shirt: "Dyed narrow-leg high-rise waist jeans, Two front pockets with mini coin pocket, Two back pockets, Belt loops, Front zip and button closure",
            fabric: "SDenim",
            color: "Blue",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

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
            id: 24,
            name: "Snake Print Jersey Pants",
            price: "$6.00",
            shirt: "Snake printed narrow leg pants, Elasticized waistband",
            fabric: "Jersey",
            color: "Snack Brown & Black",
            weight: "344g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "V0282TR-EXS-BGE",
            images: [
                '/woman/bottom/p4/img1.jpeg',
                '/woman/bottom/p4/img2.jpeg',
                '/woman/bottom/p4/img3.jpeg',
                '/woman/bottom/p4/img4.jpeg',
          
            ]
        },
        {
            id: 25,
            name: "Classic Bucket Handbag",
            price: "$5.00",
            shirt: "Classic bucket handbag, Top handle, Magnetic fastener lock, Single compartment, Detachable shoulder strap",
            fabric: "Rexine",
            color: "Navy",
            weight: "544g",
            rate: 5, // Rating: 5 stars

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
            id: 26,
            name: "Engraved Clutch",
            price: "$6.00",
            shirt: "Engraved clutch with metallic brooch, Magnetic fastener lock, Single compartment with a mini zipped pocket, Metallic shoulder chain",
            fabric: "Rexine",
            color: "Olive",
            weight: "354g",
            rate: 4, // Rating: 4 stars

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
            id: 27,
            name: "Stitch Pattern Clutch",
            price: "$6.00",
            shirt: "Stitch pattern clutch with metallic brooch, Twist lock, One compartment with zip closure, One open compartment with a zipped pocket, Shoulder strap with handle ",
            fabric: "Rexine",
            color: "Green",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

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
            id: 28,
            name: "Classic Tote Bag",
            price: "$6.00",
            shirt: "Classic tote bag, Zip closure, Single compartments, One mini zipped pocket, Two chain top handles",
            fabric: "Rexine",
            color: "Brown",
            weight: "400g",

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",

            rate: 4, // Rating: 4 stars

            code: "U3695SH-SSH-034",
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
            price: "$5.00",
            shirt: "Classic heels with pointed toe",
            fabric: "Rexine",
            color: "White",
            weight: "544g",
            rate: 5, // Rating: 5 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
            code: "I8528JK-FRE-BNW",
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
            price: "$6.00",
            shirt: "Engraved clutch with metallic brooch, Magnetic fastener lock, Single compartment with a mini zipped pocket, Metallic shoulder chain",
            fabric: "Rexine",
            color: "Pink",
            weight: "354g",
            rate: 4, // Rating: 4 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",


            code: "I8174ST-MED-BGE",
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
            price: "$5.00",
            shirt: "Abstract floral earrings, Push back closure",
            fabric: "Rexine",
            color: "White",
            weight: "544g",
            rate: 5, // Rating: 5 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
            code: "I8528JK-FRE-BNW",
            images: [
                '/accessories/jewellery/p1/1.jpeg',
                '/accessories/jewellery/p1/2.jpeg',
           
            ]
        },
        {
            id: 32,
            name: "Sturdy Open Bangle",
            price: "$6.00",
            shirt: "Red rhinestone open bangle , No closure",
            fabric: "Rexine",
            color: "Pink",
            weight: "354g",
            rate: 4, // Rating: 4 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",


            code: "I8174ST-MED-BGE",
            images: [
                '/accessories/jewellery/p2/1.jpeg',
                '/accessories/jewellery/p2/2.jpeg',
                '/accessories/jewellery/p2/3.jpeg',
                '/accessories/jewellery/p2/4.jpeg',
           
            ]
        },
        {
            id: 32,
            name: "Classic Watch",
            price: "$5.00",
            shirt: "Classic watch with metallic case",
            fabric: "Rexine",
            color: "White",
            weight: "544g",
            rate: 5, // Rating: 5 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",
            code: "I8528JK-FRE-BNW",
            images: [
                '/accessories/watch/p1/img1.jpeg',
                '/accessories/watch/p1/img2.jpeg',
                '/accessories/watch/p1/img3.jpeg',
                '/accessories/watch/p1/img4.jpeg',
            ]
        },
        {
            id: 34,
            name: "Classic Leather Watch",
            price: "$6.00",
            shirt: "Classic watch with metallic case",
            fabric: "Rexine",
            color: "Black",
            weight: "354g",
            rate: 4, // Rating: 4 stars

            instruction: "Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.",
            disclaimer: "Actual colors of the product may vary from the colors being displayed on your device.",


            code: "I8174ST-MED-BGE",
            images: [
                '/accessories/watch/p2/img1.jpeg',
                '/accessories/watch/p2/img2.jpeg',
                '/accessories/watch/p2/img3.jpeg',
                '/accessories/watch/p2/img4.jpeg',]
        },
    
    ];



    const selectedProduct = products.find((item) => item.id === Number(params.id));

    if (!selectedProduct) {
        return (
            <div className="max-w-screen-xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Item not found</h1>
                <p>The item you are looking for does not exist.</p>
            </div>
        );
    }

    const [selectedImage, setSelectedImage] = useState<string>(selectedProduct.images[0]);
    const [isCareInstructionsOpen, setCareInstructionsOpen] = useState(false);
    const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);

    const handleImageClick = (imageUrl: string) => {
        console.log('Clicked Image:', imageUrl);
        setSelectedImage(imageUrl);
    };

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<IoMdStar key={i} className="text-yellow-500" />);
            } else {
                stars.push(<IoMdStarOutline key={i} className="text-yellow-500" />);
            }
        }
        return stars;
    };

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between m-10 mt-16">
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
                    <h1 className="text-3xl font-serif">{selectedProduct.name}</h1>
                    <p className="mt-2 text-xl font-serif">{selectedProduct.price}</p>

                    <div className="flex mt-2">{renderStars(selectedProduct.rate)}</div>
                    <button className="bg-black text-white h-12 w-[80%] rounded-xl my-8 shadow-lg">Add to Cart</button>

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
                    <Review/>
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

export default WomanShirtId;