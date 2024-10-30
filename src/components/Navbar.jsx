import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { navLinks } from '../../constants';
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  

  return (
    <div className="bg-gradient h-[70px]">
      <div className="px-10 flex flex-row  items-center justify-between h-[100%] relative">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[160px] h-[50px]" />
        </Link>
        <RiMenu3Fill
          className="sm:hidden block text-white cursor-pointer"
          size={30}
          onClick={() => setShowMenu(true)}
        />
        <ul className="sm:flex sm:flex-row hidden gap-10 text-white text-[20px] font-semibold">
          {navLinks.map((item, index) => (
            <Link key={item.index} to={item.path}>
              <li className="cursor-pointer font-bold">{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        {showMenu && (
          <div className="text-white sm:hidden block absolute right-0 top-0 bg-gradient w-72 p-4 z-50 transition">
            <IoCloseSharp
              size={30}
              className="cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
            <hr />
            <ul className="flex flex-col gap-10 py-4  text-center h-screen z-1">
              {navLinks.map((item, index) => (
                <li key={item.index} className="cursor-pointer font-bold">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
