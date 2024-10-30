import React from 'react';
import { social_media } from '../../constants';

const Contacts = () => {
  return (
    <div className="w-[80%] mx-auto mt-5 text-white">
      <div className="bg-[#280c2b] p-10 rounded-2xl">
        <h1 className="lg:text-[40px] md:text-[30px] sm:text-[30px] text-[20px] text-secondary font-bold">
          CONTACT US
        </h1>
        <div className="px-10 py-5 flex flex-row justify-around flex-wrap gap-4">
          <div>
            <div>
              <h1 className="text-[#8a019a] text-3xl  font-bold">Email:</h1>
              <p className="ml-4 font-semibold">nethragroups96@gmail.com</p>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              {social_media.map((item, index) => (
                <div key={index} className="flex flex-row gap-4">
                  <img src={item.img} alt={item.name} className="h-10 w-10" />
                  <h1 className="text-xl font-bold">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <form action="" className="flex flex-col sm:w-[400px] w-[100%]">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                required
                className="px-4 py-3 rounded-3xl bg-secondary text-primary placeholder-primary "
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                className="px-4 py-3 rounded-3xl bg-secondary text-primary placeholder-primary "
              />
              <br />
              <textarea
                name="message"
                rows={4}
                placeholder="MESSAGE"
                className="px-4 py-3 rounded-3xl bg-secondary text-primary placeholder-primary "
              />
              <button className="text-primary px-4 py-2 bg-secondary rounded-3xl mt-2 w-fit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
