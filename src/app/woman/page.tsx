import Link from "next/link";
import Image from "next/image";

const Woman = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <div className='mx-auto'>
                    <Image
                        src="/woman/img1.jpeg"
                        alt="Woman Collection Banner"
                        height={400}
                        width={1530}
                        className='justify-center items-center'
                    />
                </div>
            </div>
            <h1 className="font-semibold text-2xl md:text-4xl text-gray-900 text-center my-6">WOMAN COLLECTIONS</h1>

            <ul className="flex flex-wrap items-center justify-center space-x-3 space-y-4">
                <Link href="./woman/shirts" className="animate-slideInTopToBottom">
                    <li className="flex flex-col items-center cursor-pointer mt-3">
                        <Image
                            src="/woman/img2.jpeg" alt="Daily Wear Prints"
                            width={180} // Match to the dimensions of `w-32` in tailwind (32 * 4 = 128px)
                            height={180}
                            className="rounded-full object-cover object-top mb-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                        // Ensures highest quality
                        />
                        <span className="font-bold">SHIRTS</span>
                    </li>
                </Link>

                <Link href="./woman/bottom" className="animate-slideInTopToBottom animate-slideIn-1s">
                    <li className="flex flex-col items-center cursor-pointer">
                        <Image
                            src="/woman/img3.jpeg" alt="Glam Prints"
                            width={180}
                            height={180}
                            className="rounded-full object-cover object-top mb-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                            quality={100}
                        />
                        <span className="font-bold">BOTTOMS</span>
                    </li>
                </Link>

                <Link href="./woman/scarves" className="animate-slideInTopToBottom animate-slideIn-2s">
                    <li className="flex flex-col items-center cursor-pointer">
                        <Image
                            src="/woman/img4.jpeg" alt="Modern Prints"
                            width={180}
                            height={180}
                            className="rounded-full object-cover object-center mb-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                            quality={100}
                        />
                        <span className="font-bold">SCARVES</span>
                    </li>
                </Link>

                <Link href="./woman/sale" className="animate-slideInTopToBottom animate-slideIn-3s">
                    <li className="flex flex-col items-center cursor-pointer">
                        <Image
                            src="/woman/img5.jpeg" alt="Sale"
                            width={180}
                            height={180}
                            className="rounded-full object-cover object-top mb-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                            quality={100}
                        />
                        <span className="font-bold">SALE</span>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Woman;
