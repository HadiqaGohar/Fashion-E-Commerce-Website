import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-5">
       
        <Link href="/woman" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] rounded-full group">
            <Image
              src="/woman/shirts/p2/img1.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-top absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6 px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Woman</div>
        </Link>

        {/* Add more categories similarly */}

        <Link href="/man" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/categoriesList/man.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-top absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Man</div>
        </Link>


        <Link href="/accessories" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/accessoriesList/bag.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-cover absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Accessories</div>
        </Link>

        <Link href="/woman/shirts" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/categoriesList/shirt.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-top absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Shirts</div>
        </Link>

       
        <Link href="/fragrance" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/categoriesList/fragrance.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-cover absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Fragrance</div>
        </Link>

       
        <Link href="/woman/sale/summer" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/categoriesList/summer.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-top absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center  justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Summer Collections</div>
        </Link>

       
        <Link href="/woman/sale/winter" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/categoriesList/winter.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-top absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Winter Collections</div>
        </Link>

       
        <Link href="/woman/sale/spring" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/categoriesList/spring.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-top absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center  mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Spring Collections</div>
        </Link>

       
        <Link href="/woman/bottom" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/accessoriesList/foot.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-cover absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Bottoms</div>
        </Link>

        <Link href="/woman/bottom" className="flex-shrink-0">
          <div className="relative bg-slate-100 w-[250px] h-[250px] group">
            <Image
              src="/categoriesList/bottom.jpeg" // Replaced with local image path
              alt="Crockery"
              width={250}
              height={250}
              className="object-cover absolute inset-0 w-full h-full"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              {/* Icon at top-left */}
              <div className="flex flex-col items-center justify-center p-2 ml-48">
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center justify-center">
                  <IoMdHeartEmpty className="text-gray-800" />
                </div>
                <div className="bg-white h-[30px] w-[30px] rounded-full flex items-center mt-1 justify-center">
                  <IoEyeOutline className="text-gray-800" />
                </div>
              </div>
              {/* Button at the bottom */}
              <div className="w-full p-2">
                <button className="w-full -mb-6  px-4 py-2 bg-gray-800 text-white rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 font-light text-lg tracking-wide">Bottoms</div>
        </Link>

       

      </div>
    </div>
  );
};

export default CategoryList;
