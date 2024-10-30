import React from 'react';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="mt-28 relative h-screen">
      <div className="px-32">
        <h1 className="lg:text-[96px] md:text-[70px] sm:text-[60px] text-[30px] text-secondary font-bold">
          NETHRA GROUPS
        </h1>
        <div className="flex flex-row gap-4">
          <div className="h-30 bg-secondary w-1 ml-10" />
          <p className="lg:text-[30px] md:text-[26px] sm:text-[34px] text-[22px] font-judson text-white w-[850px]">
            Founded by Elangovan in 2020, the Nethra Groups <br />
            is a global enterprise, headquartered in
            <br /> Salem,India.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
