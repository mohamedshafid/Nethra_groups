import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gradient flex h-52 justify-center items-center w-full absolute bottom-0">
      <div className="flex flex-col gap-4 items-center">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Enter your Email:"
            className="outline-primary outline-2 rounded-2xl p-3 w-[100%] bg-transparent border-2 border-primary"
          />
          <button className="bg-primary text-white absolute right-0 top-[1px] p-[14px] rounded-2xl">
            Subscribe
          </button>
        </div>
        <p className='text-white font-semibold w-4/5 text-center'>
          Nethra Groups is a Developing Company, It is Located At Salem,India.
          The Journey will Started at 2020
        </p>
      </div>
    </div>
  );
}

export default Footer;
