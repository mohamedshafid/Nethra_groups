import React from 'react'

const AboutUs = () => {
  return (
    <div className="mt-10 flex flex-col w-[70%] gap-4 mx-auto text-white">
      <div className="bg-[#280c2b] p-10 rounded-3xl">
        <h1 className="lg:text-[40px] md:text-[30px] sm:text-[30px] text-[20px] text-secondary font-bold">
          ABOUT US
        </h1>
        <p className='ml-4 font-bold text-[25px]'>
          Founded by Elangovan in 2020, the Nethra Groups is a global
          enterprise, headquartered in Salem,India.
        </p>
      </div>
    </div>
  );
}

export default AboutUs
