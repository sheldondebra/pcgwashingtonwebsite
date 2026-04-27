import React, { useState } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { NavLink } from "react-router";

import { HiOutlineBars4 } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router";


const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);

 const groups = [
   {
     title: "Women's Fellowship",
     link: "/womenfellowship",
   },
   {
     title: "Men's Fellowship",
     link: "/mensfellowship",
   },
   {
     title: "Young Adults' Fellowship",
     link: "/yaf",
   },
   {
     title: "Young Peoples’ Guild",
     link: "/ypg",
   },
   {
     title: "Singing Band",
     link: "/singingband",
   },
   {
     title: "Choir",
     link: "/choir",
   },
   {
     title: "Bible Study & Prayer",
     link: "/biblestudy",
   },
   {
     title: "Presbyters' Conference",
     link: "/presbyters",
   },
 ];
  return (
    <div className="bg-white shadow py-1 w-full z-50 flex items-center">
      <div className="flex mx-auto container justify-between items-center px-6 w-full">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/logo.png" className="w-40" />
        </Link>

        {/* Desktop Menu */}
        <div className="text-sm gap-4 md:flex text-gray-600 hidden items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded transition ${
                isActive ? "bg-red-200 font-semibold" : "hover:bg-red-100"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `block px-3 py-2 rounded transition ${
                isActive ? "bg-red-200 font-semibold" : "hover:bg-red-100"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/committees"
            className={({ isActive }) =>
              `block px-3 py-2 rounded transition ${
                isActive ? "bg-red-200 font-semibold" : "hover:bg-red-100"
              }`
            }
          >
            Committees
          </NavLink>

          {/* Desktop Dropdown (Hover) */}
          <div className="relative group py-3">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Groups</span>
              <IoIosArrowDown className="text-xs" />
            </div>

            <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md  p-2 hidden group-hover:block w-56">
              {groups.map((item, index) => (
                <NavLink
                  to={item.link}
                  key={index}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded transition ${
                      isActive
                        ? "bg-red-500 text-white font-semibold"
                        : "hover:bg-red-100"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/leadership"
            className={({ isActive }) =>
              `block px-3 py-2 rounded transition ${
                isActive ? "bg-red-200 font-semibold" : "hover:bg-red-100"
              }`
            }
          >
            Leadership
          </NavLink>
          <NavLink
            to="/congregation"
            className={({ isActive }) =>
              `block px-3 py-2 rounded transition ${
                isActive ? "bg-red-200 font-semibold" : "hover:bg-red-100"
              }`
            }
          >
            Congregations
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `block px-3 py-2 rounded transition ${
                isActive ? "bg-red-200 font-semibold" : "hover:bg-red-100"
              }`
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `block px-3 py-2 rounded transition ${
                isActive ? "bg-red-200 font-semibold" : "hover:bg-red-100"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Give Button */}
        <Link to="/give">
          <button className="md:flex items-center bg-red-600 text-white py-2 px-6 gap-2 rounded-full hidden">
            <MdOutlineAttachMoney />
            Give
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <HiOutlineBars4
          onClick={() => setMobMenu(!mobMenu)}
          className="h-10 w-10 md:hidden cursor-pointer"
        />

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            mobMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-8">
            <Link to="/" onClick={() => setMobMenu(false)}>
              <img src="/assets/logo.png" className="w-40 mb-5" />
            </Link>

            <div className="flex flex-col gap-3">
              <Link to="/" onClick={() => setMobMenu(false)}>
                Home
              </Link>
              <Link to="/aboutus" onClick={() => setMobMenu(false)}>
                About
              </Link>
              <Link to="/committees" onClick={() => setMobMenu(false)}>
                Committees
              </Link>

              {/* Mobile Dropdown */}
              <div>
                <div
                  onClick={() => setOpenGroups(!openGroups)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <span>Groups</span>
                  {openGroups ? (
                    <IoIosArrowUp className="text-sm" />
                  ) : (
                    <IoIosArrowDown className="text-sm" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openGroups ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  {groups.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block pl-3 py-2 text-sm text-red-600 hover:bg-red-100 rounded"
                      onClick={() => setMobMenu(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/leadership" onClick={() => setMobMenu(false)}>
                Leadership
              </Link>
              <Link to="/congregation" onClick={() => setMobMenu(false)}>
                Congregations
              </Link>
              <Link to="/events" onClick={() => setMobMenu(false)}>
                Events
              </Link>
              <Link to="/contactus" onClick={() => setMobMenu(false)}>
                Contact Us
              </Link>
            </div>

            <button className="flex items-center bg-red-600 text-white py-2 px-6 gap-2 mt-6 rounded-full">
              <MdOutlineAttachMoney />
              Give
            </button>
          </div>
        </div>

        {/* Overlay */}
        {mobMenu && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobMenu(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
