import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";


const Accessories = () => {
  const accessories = [
    { name: "Bags", href: "./accessories/bags", image: "/accessoriesList/bag.jpeg" },
    { name: "Scarves", href: "./accessories/scarves", image: "/accessoriesList/scarves.jpeg" },
    { name: "Footwear", href: "./accessories/footwear", image: "/accessoriesList/foot.jpeg" },
    { name: "Jewellery", href: "./accessories/jewellery", image: "/accessoriesList/jewellery.jpeg" },
    { name: "Watches", href: "./accessories/watches", image: "/accessoriesList/watch.jpeg" },
    { name: "Sunglasses", href: "./accessories/sunglasses", image: "/accessoriesList/glass.jpeg" },
    { name: "Hair", href: "./accessories/hair", image: "/accessoriesList/hair.jpeg" },
  ];

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4">
        {accessories.map((item, index) => (
          <Link href={item.href} key={index} className="flex-shrink-0">
            <div className="relative bg-slate-100 w-[250px] h-[250px] group">
              <Image
                src={item.image}
                alt={item.name}
                width={250}
                height={250}
                className="object-cover absolute inset-0 w-full h-full"
              />
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                {/* Icons at top-left */}
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
            <div className="mt-8 font-light text-lg tracking-wide">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
