import Link from 'next/link';
import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

function Contact() {
    return (
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white px-4 py-8 sm:px-6 md:py-12 max-w-screen-2xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-10 rounded shadow-md p-5">
                {/* Breadcrumb */}
                {/* <p className="text-xs sm:text-sm text-gray-600 mb-4">Home / Contact</p> */}

            <p className="text-xs sm:text-sm text-gray-600 mb-4"><Link href='/' className='hover:text-teal-500'>Home</Link> / <Link href='/contact' className='hover:text-teal-500'>Contact</Link></p>

                {/* Call To Us */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="bg-teal-500 h-[50px] w-[50px] rounded-full flex items-center justify-center text-white">
                            <IoCallOutline size={24} />
                        </div>
                        <h4 className="text-lg font-semibold">Call To Us</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                        We are available 24/7, 7 days a week.
                    </p>
                    <p className="text-gray-800 text-sm font-medium">Phone: +1234555676</p>
                </div>
                <hr className="my-10" />

                {/* Write To Us */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="bg-teal-500 h-[50px] w-[50px] rounded-full flex items-center justify-center text-white">
                            <FaRegEnvelope size={24} />
                        </div>
                        <h4 className="text-lg font-semibold">Write To Us</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Fill out the form and we will contact you within 24 hours.
                    </p>
                    <p className="text-gray-800 text-sm font-medium">Emails: customer@hg.com</p>
                    <p className="text-gray-800 text-sm font-medium">Emails: support@hg.com</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 rounded-lg shadow-md">
                <form action="" className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name*"
                            className="w-full bg-gray-100 px-4 py-2 border border-teal-300 rounded focus:outline-none focus:ring-2 focus:teal-red-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email*"
                            className="w-full bg-gray-100 px-4 py-2 border border-teal-300 rounded focus:outline-none focus:ring-2 focus:teal-red-500"
                        />
                    </div>

                    {/* Message */}
                    <textarea
                        placeholder="Your Message*"
                        rows={4} // Corrected to use numeric value
                        className="w-full bg-gray-100 px-4 py-2 border border-teal-300 rounded focus:outline-none focus:ring-2 focus:teal-red-500"
                    ></textarea>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
