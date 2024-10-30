import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <div className="mt-10 flex flex-col w-[70%] gap-4 mx-auto text-white overflow-hidden">
      <div className="bg-[#280c2b] p-10 rounded-3xl relative">
        <h1 className="lg:text-[50px] md:text-[30px] sm:text-[30px] text-[20px] text-secondary font-bold">
          NETHRA ECO-PACKAGING
        </h1>
        <div className="flex flex-row gap-10">
          <div className="h-30 bg-secondary w-1 ml-10" />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">
              The Nethra Eco-Packaging is a Manufacturing Company.
            </h1>
            <div className="flex flex-row  gap-24 items-center">
              <ul className="list-disc text-2xl">
                <li>Paper Cups</li>
                <li>Paper Plates</li>
                <li>Paper Containers</li>
              </ul>
              <ul className="list-disc text-2xl">
                <li>Paper Bags</li>
                <li>Paper Trays</li>
                <li>Cutlery Pouch</li>
              </ul>
              <ul className="list-disc text-2xl">
                <li>Aluminium Foil Container</li>
                <li>Aluminium Foil Bag</li>
                <li>Cardboard Boxes</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="bg-secondary px-6 py-2 absolute right-4 bottom-2 rounded-3xl flex flex-row gap-2 items-center">
          <Link to="/ecopackaging">
            <span>see More</span>
          </Link>
          <IoIosArrowDroprightCircle size={25} className="mt-1" />
        </h1>
      </div>

      <div className="flex flex-row gap-4">
        <div className="bg-[#280c2b] p-10 rounded-md flex-1 relative">
          <h1 className="lg:text-[40px] md:text-[30px] sm:text-[30px] text-[20px] text-secondary font-bold">
            NETHRA MUSIQ
          </h1>
          <div className="flex flex-row gap-10">
            <div className="h-30 bg-secondary w-1 ml-10" />
            <ul className="list-disc text-2xl relative">
              <li>Recording</li>
              <li>Dubbing</li>
              <li>Cover Songs</li>
              <p className="-ml-6">Others</p>
            </ul>
          </div>
          <h1 className="bg-secondary px-6 py-2 absolute right-4 bottom-2 rounded-3xl flex flex-row gap-2 items-center">
            <Link to="/musiq">
              <span>see More</span>
            </Link>
            <IoIosArrowDroprightCircle size={25} className="mt-1" />
          </h1>
        </div>
        <div className="bg-[#280c2b] p-10 rounded-md flex-1 relative">
          <h1 className="lg:text-[40px] md:text-[30px] sm:text-[30px] text-[20px] text-secondary font-bold">
            NETHRA STUDIO
          </h1>
          <div className="flex flex-row gap-10">
            <div className="h-30 bg-secondary w-1 ml-10" />
            <ul className="list-disc text-2xl relative">
              <li>Photo & Video Editing</li>
              <li>Designing logo</li>
              <li>Web Design</li>
              <li>Architecture Design</li>
              <p className="-ml-6">Others</p>
            </ul>
            <h1 className="bg-secondary px-6 py-2 absolute  right-4 bottom-2 rounded-3xl flex flex-row gap-2 items-center">
              <Link to="/ecopackaging">
                <span>see More</span>
              </Link>
              <IoIosArrowDroprightCircle size={25} className="mt-1" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
