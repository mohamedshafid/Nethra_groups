import React from 'react';
import recording from "../assets/recording.png";
import dubbling from "../assets/dubbling.png";
import guitar from "../assets/guitar.png";
import keyboard from "../assets/keyboard.png";
import vio from "../assets/vio.png";
import drums from "../assets/drums.png";

const Musiq = () => {
    return (
      <div className="w-[80%] mx-auto mt-5 text-white">
        <div className="bg-[#280c2b] p-10 rounded-2xl relative">
          <h1 className="lg:text-[50px] md:text-[30px] sm:text-[30px] text-[20px] text-secondary font-bold  relative">
            NETHRA MUSIQ
          </h1>
          <div className="flex flex-row justify-between px-52">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-[35px]">Recording</h1>
              <img src={recording} alt="" className="w-[200px] h-[150px]" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-[35px]">Dubbing</h1>
              <img src={dubbling} alt="" className="w-[200px] h-[150px]" />
            </div>
          </div>
          <div className='flex flex-row justify-around mt-5'>
            <img src={drums} alt="" className="w-[120px] h-[120px]" />
            <img src={keyboard} alt="" className="w-[120px] h-[120px]" />
            <h1 className='font-bold text-[30px]'>Cover Song</h1>
            <img src={vio} alt="" className="w-[120px] h-[120px]" />
            <img src={guitar} alt="" className="w-[120px] h-[120px]" />
          </div>
          <div className="w-full grid place-content-center">
            <button className="mt-10 bg-secondary p-5 text-primary text-[25px] font-semibold">
              Contact Us for place Your Order
            </button>
          </div>
        </div>
      </div>
    );
}

export default Musiq;
