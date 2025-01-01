import React from 'react';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { BsBank, BsCurrencyDollar } from 'react-icons/bs';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram, FaSackDollar } from 'react-icons/fa6';
import { RiLinkedinLine } from 'react-icons/ri';

import Image from 'next/image';
import Round from '../components/Round';
import Link from 'next/link';
import { HiMiniSquares2X2 } from 'react-icons/hi2';

function About() {
    return (
        <div className="bg-white px-4 py-8 sm:px-6 md:py-12 max-w-screen-2xl mx-auto">

            {/* Story Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    {/* Breadcrumb */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-4"><Link href='/' className='hover:text-teal-500'>Home</Link> / <Link href='/about' className='hover:text-teal-500'>About</Link></p>
                    <div className='flex gap-2'>
                        <div className="text-teal-500 text-3xl sm:text-2xl mt-10 md:mt-6" aria-label="Shopping Cart Icon">
                            <HiMiniSquares2X2 size={40} />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 mt-10 md:mt-6 text-gray-700 ">Our Story</h2>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora corrupti sed!
                        Tempore amet corporis quibusdam quaerat modi numquam reiciendis, culpa repellat neque rem
                        incidunt non iusto reprehenderit nisi nesciunt aperiam quis distinctio in deleniti, dolores temporibus!
                        Quis reiciendis odit rem ipsa eaque molestiae.
                        <br /><br />
                        Quasi labore fugiat minima nisi omnis in modi, sit sapiente consectetur nihil distinctio tempore
                        perspiciatis est ea pariatur! Aspernatur quis iste quam dolores corporis quia rem aut eum,
                        molestiae dolorem.
                    </p>
                </div>
                <div>
                    <Image
                        src="/friends.png"
                        alt="About us"
                        width={700}
                        height={500}
                        className="object-cover  h-[250px] sm:h-[350px] md:h-[500px] rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { id: 1, icon: <BsBank size={25} color="white" />, count: '10.5k', label: 'Sellers active on our site' },
                    { id: 2, icon: <BsCurrencyDollar size={25} color="white" />, count: '33k', label: 'Monthly Products Sale' },
                    { id: 3, icon: <BiSolidShoppingBags size={25} color="white" />, count: '45.5k', label: 'Customers active on our site' },
                    { id: 4, icon: <FaSackDollar size={25} color="white" />, count: '25k', label: 'Annual gross sale on our site' },
                ].map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center text-black justify-center h-[220px] bg-white border rounded-lg transition-all duration-300 hover:bg-teal-500 hover:border-2 hover:text-white"
                    >
                        <div className="bg-[#C1C1C1] rounded-full h-[70px] w-[70px] p-2.5 flex items-center justify-center">
                            <div className="rounded-full h-[50px] w-[50px] bg-black flex items-center justify-center">
                                {stat.icon}
                            </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold mt-2">{stat.count}</h2>
                        <p className="text-xs sm:text-sm text-center">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Team Section */}
            <div className="flex flex-wrap justify-around gap-6 ">
                {[
                    {
                        name: 'Tom Cruise',
                        position: 'Founder & Chairman',
                        image: '/tom.jpeg',
                    },
                    {
                        name: 'Emma Watson',
                        position: 'Managing Director',
                        image: '/emma.jpeg',
                    },
                    {
                        name: 'Will Smith',
                        position: 'Product Designer',
                        image: '/will.jpeg',
                    },
                ].map((member) => (
                    <div key={member.name} className="w-[400px] text-center mt-10">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={400}
                            height={400}
                            className="rounded-lg object-top w-full h-[300px] sm:h-[300px] lg:h-[400px] lg:w-[500px]"
                        />
                        <h3 className="text-xl sm:text-2xl font-semibold mt-3">{member.name}</h3>
                        <p className="text-sm">{member.position}</p>
                        <div className="flex justify-center space-x-4 mt-3">
                            <CiTwitter className="text-2xl cursor-pointer hover:text-teal-500" />
                            <FaInstagram className="text-2xl cursor-pointer hover:text-teal-500" />
                            <RiLinkedinLine className="text-2xl cursor-pointer hover:text-teal-500" />
                        </div>
                    </div>
                ))}
            </div>
            {/* ROUNDED DIV */}
            <div className='mt-52  mb-10 xl:my-10'>
                <Round />
            </div>

        </div>
    );
}

export default About;
