import Image from "next/image";
import { HiMiniSquares2X2 } from "react-icons/hi2";

const ManFootwearList = () => {
    // Array of products with id, name, price, and multiple image URLs

    return (
        <div className='max-h-screen max-w-screen-2xl mx-auto'>
           
            <div className='flex flex-col items-center justify-center mb-6'>
                <div className='mx-auto mt-2'>
                    <Image
                        src="/accessories/footwear/man/1.jpeg"
                        alt="Woman Collection Banner"
                        height={400}
                        width={1530}
                        className='justify-center items-center'
                    />
                </div>
            </div>
          {/* <h1 className='text-2xl md:text-4xl text-center font-bold'>LATEST FOOTWEAR COLLECTION </h1> */}
          <div className="flex gap-2 md:gap-3 text-center justify-center">
                <div className="ml-2 text-teal-500 text-3xl sm:text-2xl md:ml-6 mt-8  md:mt-6" aria-label="Shopping Cart Icon">
                    <HiMiniSquares2X2 size={40} />
                </div>
                <h2 className="  md:text-4xl  text-center my-6 text-2xl sm:text-4xl text-gray-700 font-semibold mb-6 mt-10 md:mt-6">Mens Footwears Collections</h2>
            </div>
            <div className="flex flex-row space-x-4 overflow-x-auto mx-auto justify-center my-8">
                {/* COMMENT */}
            <p className='font-light'>No more Products...</p>
               
            </div >
           
        </div>
    );
};

export default ManFootwearList;
