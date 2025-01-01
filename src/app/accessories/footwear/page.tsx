import Link from "next/link";
import Image from "next/image";

const Footwear = () => {
    const accessories = [
        { name: "Woman", href: "./footwear/woman", image: "/accessories/footwear/1.jpeg" },
        { name: "Man", href: "./footwear/man", image: "/accessories/footwear/2.jpeg" },
       
    ];

    return (
        <div className="max-h-screen max-w-screen-2xl mx-auto">
         
            <div className='flex flex-col items-center justify-center mb-6'>
                <div className='mx-auto mt-2'>
                    <Image
                        src="/accessories/footwear/3.jpeg"
                        alt="Woman Collection Banner"
                        height={400}
                        width={1530}
                        className='justify-center items-center'
                    />
                </div>
            </div>
          
           <h1 className='text-2xl md:text-4xl text-center font-bold mb-4'>FOOTWEARS </h1>
            <hr className='border-2 w-32 mb-4 mx-auto border-teal-700'/>
         

            <div className="overflow-x-auto max-w-full">
                <ul className="flex space-x-6 justify-center mx-auto items-center text-center">
                    {accessories.map((item, index) => (
                        <Link href={item.href} key={index}>
                            <li className="flex flex-col items-center cursor-pointer">
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    width={128}
                                    height={128}
                                    className="rounded-full w-32 h-32 object-cover mb-2"
                                />
                                <span>{item.name}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
     
        </div>
    );
};

export default Footwear;
