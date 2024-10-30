import React from 'react';
import straw from '../assets/straw.png';
import bag from '../assets/bag.png';
import cup from "../assets/cup.png";
import bigcup from "../assets/bigcup.png";
import box from "../assets/box.png";
import tissue from "../assets/tissue.png";
import spoon from "../assets/spoon.png";

const Ecopackaging = () => {
    return (
      <div className="w-[80%] mx-auto mt-5 text-white">
        <div className="bg-[#280c2b] p-10 rounded-2xl relative">
          <h1 className="lg:text-[50px] md:text-[30px] sm:text-[30px] text-[20px] text-secondary font-bold  relative">
            NETHRA ECO-PACKAGING
            <span>
              <img
                src={bag}
                alt="bag"
                className="w-[120px] h-[120px] absolute top-0 right-72 hidden 2xl:block"
              />
            </span>
            <span>
              <img
                src={cup}
                alt="bag"
                className="w-[120px] h-[120px] absolute top-0 right-20 hidden 2xl:block"
              />
            </span>
          </h1>
          <p className="text-[30px] ml-10">Custom Printing For All Products</p>
          <div className="flex flex-row justify-around gap-10 flex-wrap mt-5">
            <div className="flex flex-col gap-10">
              <img src={bigcup} alt="" className="w-[120px] h-[120px]" />
              <img src={box} alt="" className="w-[120px] h-[120px]" />
            </div>
            <ul className="list-disc text-[30px]">
              <li>Paper Cups</li>
              <li>Paper Plates</li>
              <li>Paper Container</li>
              <li>Paper Bags</li>
              <li>Paper Trays</li>
              <li>Paper Straw</li>
              <li>Paper Pouch</li>
            </ul>
            <img src={straw} alt="straw" className="w-[150px] h-[150px]" />
            <ul className="list-disc text-[30px]">
              <li>Aluminium Foil Container</li>
              <li>Aluminium Paper Plates</li>
              <li>Aluminium Foil Bag</li>
              <li>Cardboard Boxes</li>
              <li>Paper Boxes</li>
              <li>Toilet Paper</li>
              <li>Cutley</li>
            </ul>
          </div>
          <img src={spoon} alt="tissue" className="w-[120px] h-[120px] absolute right-1 bottom-52" />
          <img src={tissue} alt="tissue" className="w-[120px] h-[120px] absolute right-1 bottom-1" />
          <div className="w-full grid place-content-center">
            <button className="mt-10 bg-secondary p-5 text-primary text-[25px] font-semibold">
              Contact Us for place Your Order
            </button>
          </div>
        </div>
      </div>
    );
}

export default Ecopackaging;
