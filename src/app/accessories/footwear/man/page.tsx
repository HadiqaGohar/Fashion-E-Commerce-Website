import Image from "next/image";

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
          <h1 className='text-2xl md:text-4xl text-center font-bold'>LATEST FOOTWEAR COLLECTION </h1>
          
            <div className="flex flex-row space-x-4 overflow-x-auto mx-auto justify-center my-8">
                {/* COMMENT */}
            <p className='font-light'>No more Products...</p>
               
            </div >
           
        </div>
    );
};

export default ManFootwearList;
