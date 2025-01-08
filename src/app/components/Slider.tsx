"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        description: "Sale! Up to ",
        percentage: 50,
        img: "/img3.png",
        href : '/products',
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Winter Sale Collections",
        description: "Sale! Up to ",
        percentage: 50,
        img: "/img4.png",
        href : '/products',
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Spring Sale Collections",
        description: "Sale! Up to ",
        percentage: 50,
        img: "/img1.png",
        href : '/products',
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[400px] w-full  overflow-hidden relative">
            <div
                className="w-max h-[800px] flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-[400px] flex`} key={slide.id}>
                        <div className="max-w-screen-2xl text-center mx-auto w-full flex flex-col xl:flex-row items-center justify-between gap-8 p-4">
                            {/* TEXT CONTAINER */}
                            <div className="xl:w-1/2 text-center  xl:text-left">
                                <h2 className="text-lg sm:text-xl text-center lg:text-2xl 2xl:text-3xl font-light">
                                    {slide.description}{" "}
                                    <span className="bg-yellow-400 p-1 font-medium">
                                        {slide.percentage}% off!
                                    </span>
                                </h2>
                                <h1 className="text-2xl sm:text-3xl text-center lg:text-5xl 2xl:text-6xl mt-4 font-medium">
                                    {slide.title}
                                </h1>
                                <div className="justify-center flex mt-4">
                                <Link href={slide.href} className="text-center">
                                    <button className="mt-4  rounded-md bg-black text-white py-3 px-6 hover:bg-gray-800">
                                        SHOP NOW
                                    </button>
                                </Link>
                                </div>
                            </div>
                            {/* IMAGE CONTAINER */}
                            <div className="xl:w-1/2 p-">
                                <Image
                                    src={slide.img}
                                    alt={slide.title}
                                    height={300}
                                    width={400}
                                    className="object-contain w-full h-[300px] xl:h-[400px] rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute left-1/2 bottom-8 flex gap-4 transform -translate-x-1/2">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`w-3 h-3 rounded-full ring-1 ring-gray-600 p-1 cursor-pointer ${current === index ? "scale-150 bg-gray-400 " : ""}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
