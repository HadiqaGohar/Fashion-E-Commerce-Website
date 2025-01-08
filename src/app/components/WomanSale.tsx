import Link from "next/link";
import Image from "next/image";
import { HiMiniSquares2X2 } from "react-icons/hi2";



const WomanSale = () => {
    return (
        <div>
            {/* <h1 className="font-semibold text-2xl md:text-4xl text-gray-900 text-center my-6">LATEST SALES</h1> */}
            <div className="flex gap-2 md:gap-3 text-center justify-center">
                <div className="ml-2 text-teal-500 text-3xl sm:text-2xl md:ml-6 mt-8  md:mt-6" aria-label="Shopping Cart Icon">
                    <HiMiniSquares2X2 size={40} />
                </div>
                <h2 className="  md:text-4xl  text-center my-6 text-2xl sm:text-4xl text-gray-700 font-semibold mb-6 mt-10 md:mt-6">Latest Sales</h2>
            </div>
            <ul className="flex flex-wrap items-center justify-center space-x-6 space-y-4">
                <Link href="./sale/winter" className="animate-slideInTopToBottom">
                    <li className="flex flex-col items-center cursor-pointer mt-3">
                        <Image 
                            src="/woman/sale/winter/p1/img1.jpeg" 
                            alt="Daily Wear Prints" 
                            width={200} // Match to the dimensions of `w-32` in tailwind (32 * 4 = 128px)
                            height={200} 
                            className="rounded-full object-cover object-top mb-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                            quality={100} // Ensures highest quality
                        />
                        <span className="font-bold">WINTER</span>
                    </li>
                </Link>

                <Link href="./sale/summer" className="animate-slideInTopToBottom animate-slideIn-1s">
                    <li className="flex flex-col items-center cursor-pointer">
                        <Image 
                            src="/woman/sale/summer/p1/img1.jpeg" 
                            alt="Glam Prints" 
                            width={200} 
                            height={200} 
                            className="rounded-full object-cover object-top mb-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                            quality={100}
                        />
                        <span className="font-bold">SUMMER</span>
                    </li>
                </Link>

                <Link href="./sale/spring" className="animate-slideInTopToBottom animate-slideIn-2s">
                    <li className="flex flex-col items-center cursor-pointer">
                        <Image
                            src="/woman/sale/spring/p1/img1.jpeg" 
                            alt="Modern Prints" 
                            width={200} 
                            height={200} 
                            className="rounded-full object-cover object-top mb-2 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                            quality={100}
                        />
                        <span className="font-bold">SPRING</span>
                    </li>
                </Link>

            </ul>
          
        </div>
    );
};

export default WomanSale;
