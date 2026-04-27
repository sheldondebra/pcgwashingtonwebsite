import React from 'react'
import { Link } from 'react-router';
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';




const Footer = () => {
  return (
    <div className=" bg-linear-to-r from-blue-800 to-blue-500 px-14 py-18">
      <div className="container mx-auto grid md:grid-cols-4 gap-23">
        <div>
          <img src="/assets/pcgfooterlogo.png" className="w-53 " />
          <p className="text-white mt-2 text-sm">
            Presbyterian Church of Ghana – Washington DC North District is a
            united body of congregations committed to Christ-centered worship,
            spiritual growth, and community impact across our district.
          </p>
          <div className="flex gap-3 text-white mt-6">
            <FaFacebook className="h-7 w-7" />
            <FaInstagram className="h-7 w-7" />
            <FaYoutube className="h-7 w-7" />
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold mb-6 ">Quick Links</h1>
          <div className="flex flex-col gap-3 text-sm  ">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About us</Link>
            <Link to="/committees">Committees</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/congregation">Congregation</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/give">Give / Donate</Link>
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold mb-6 ">Congregations</h1>
          <div className="flex flex-col gap-3 text-sm ">
            <Link to="/">Adom Congregation</Link>
            <Link to="/">Capital DC Preaching Point</Link>
            <Link to="/">Convenant Congregation</Link>
            <Link to="/">Divine Word Congregation</Link>
            <Link to="/">Faith Preaching Point</Link>
            <Link to="/">Good Shepherd Preaching Point</Link>
            <Link to="/">Trinity Congregation</Link>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-bold mb-6 ">Get in touch</h1>
          <div className="flex items-center gap-5 mt-4">
            <IoLocationSharp className="h-9 w-9 border border-white text-white rounded-full p-2 " />
            <div>
              <h2 className="text-sm font-bold">Address</h2>
              <p className="text-white text-sm">
                8729 Greenbelt Rd, Greenbelt, MD 20770
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <MdOutlineMailOutline className="h-9 w-9 border border-white text-white rounded-full p-2 " />
            <div>
              <h2 className="text-sm font-bold">Email</h2>
              <p className="text-white">pcgwdcn@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <FaPhoneAlt className="h-9 w-9 border border-white text-white rounded-full p-2 " />
            <div>
              <h2 className="text-sm font-bold">Phone Number</h2>
              <p className="text-white">240-264-9953</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-300">
          © 2026 Presbyterian Church of Ghana – Washington DC North District.
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer
