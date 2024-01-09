import hero from "../img/hero1.jpg";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
const Hero = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  return (
    <div className="h-screen relative">
      <img src={hero} alt="" className="h-full w-full object-cover" />
      <div className="absolute top-0 h-[100%] w-full bg-gray-500/50 flex flex-col justify-center ">
        <h2 className="text-white text-5xl font-bold w-[450px] ml-10">
          Buy or rent properties with no commission
        </h2>
        <div>
          <div className="ml-20">
            <button className="bg-slate-400 ml-1 w-16 rounded hover:bg-slate-300">
              Buy
            </button>
            <button className="bg-slate-400 ml-1 w-16 rounded hover:bg-slate-300">
              Rent
            </button>
            <button className="bg-slate-400 ml-1 w-16 rounded hover:bg-slate-300">
              Sell
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-slate-300/70 rounded-md  mx-10 items-center justify-between  gap-8 px-5 py-10">
            <div className="relative bg-slate-100 py-3 flex items-center justify-between text-gray-700">
              <span className="pl-3">Category</span>
              <FaAngleDown
                className="mr-3"
                onClick={() => setOpenCategory(!openCategory)}
              />
              <div
                className={
                  openCategory
                    ? "absolute bottom-10 bg-white w-full p-3"
                    : "hidden"
                }
              >
                <p className="hover:text-yellow-600 font-bold">Apartments</p>
                <p className="hover:text-yellow-600 font-bold">Condos</p>
                <p className="hover:text-yellow-600 font-bold">Houses</p>
                <p className="hover:text-yellow-600 font-bold">Villas</p>
              </div>
            </div>
            <div className="relative bg-slate-100 py-3  text-gray-700 flex items-center justify-between">
              <input
                placeholder="Location"
                className="bg-transparent px-2 outline-none"
              />
              <FaAngleDown
                className="mr-3"
                onClick={() => setOpenLocation(!openLocation)}
              />
              <div
                className={
                  openLocation
                    ? "bg-white absolute top-10 w-full p-3"
                    : "hidden"
                }
              >
                <p className="hover:text-yellow-600 font-bold">Mexico</p>
                <p className="hover:text-yellow-600 font-bold">Piasa</p>
                <p className="hover:text-yellow-600 font-bold">Saris</p>
                <p className="hover:text-yellow-600 font-bold">Bole</p>
              </div>
            </div>
            <div className="bg-yellow-400 px-10 py-3 text-gray-700">
              <h2>Advanced</h2>
            </div>
            <div className="bg-yellow-400 px-3 py-3  flex items-center">
              <CiSearch />
              <input placeholder="Search Property" className="bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
