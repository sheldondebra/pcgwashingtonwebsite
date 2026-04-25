import React, { useState } from 'react'
import { MdOutlineAttachMoney } from 'react-icons/md';
import { Link } from 'react-router'
import { HiOutlineBars4 } from "react-icons/hi2";


const Navbar = () => {

  const [mobMenu, setMobMenu] = useState(false)


  return (
    <div className="bg-white shadow py-1 top-0  w-full z-50 flex items-center">
      <div className="flex mx-auto container justify-between items-center  px-6 ">
        <Link to="/">
          <img src="/assets/logo.png" className="w-43 " />
        </Link>
        <div className="text-sm gap-4 md:flex text-gray-600 hidden">
          <Link to="/" onClick={() => setMobMenu(false)}>
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={() => {
              setTimeout(() => setMobMenu(false), 100);
            }}
          >
            About
          </Link>
          <Link to='/committees'>Committees</Link>
          <Link>Groups</Link>
          <Link to='/leadership'>Leadership</Link>
          <Link>Congregation</Link>
          <Link>Gallery</Link>
          <Link >Events</Link>
          <Link >Contact Us</Link>
        </div>
        <button className="md:flex items-center bg-red-600 text-white py-2 px-6 gap-5 rounded-full hidden">
          <MdOutlineAttachMoney />
          Give
        </button>
        <HiOutlineBars4
          onClick={() => setMobMenu(!mobMenu)}
          className="h-10 w-10 md:hidden"
        />
        <div
          className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${mobMenu ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-8 ">
            <Link to="/">
              <img src="/assets/logo.png" className="w-43 mb-5 " />
            </Link>

            <div className="flex flex-col gap-3">
              <Link to="/">Home</Link>
              <Link
                to="/aboutus"
                onClick={() => {
                  setTimeout(() => setMobMenu(false), 100);
                }}
              >
                About
              </Link>
              <Link>Committees</Link>
              <Link>Groups</Link>
              <Link>Leadership</Link>
              <Link>Congregation</Link>
              <Link>Gallery</Link>
              <Link>Events</Link>
              <Link>Contact Us</Link>
            </div>
            <button className="flex items-center bg-red-600 text-white py-2 px-6 gap-5 mt-6 rounded-full">
              <MdOutlineAttachMoney />
              Give
            </button>
          </div>
        </div>
        {mobMenu && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobMenu(false)}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Navbar
