import React from 'react'
import { Link } from 'react-router';
import { FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";




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
          <h1 className="text-sm font-bold mb-6 ">Quick Links</h1>
          <div className="flex flex-col gap-3 ">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About us</Link>
            <Link to="/committees">Committees</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/congregation">Congregation</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-sm font-bold mb-6 ">Congregations</h1>
          <div className="flex flex-col gap-3 ">
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
          <h1 className="text-xl font-bold mb-6 ">
            Subscribe to our Newsletter
          </h1>
          <p className='text-sm'>
            Subscribe to receive updates, devotionals, and important
            announcements from the Presbyterian Church of Ghana.
          </p>
          <div className="border border-gray-300 rounded-sm px-4 py-1 mt-5 flex items-center justify-between">
            <FaEnvelope />
            <input
              placeholder="Enter your email"
              className="focus:outline-0 "
            />
            <IoMdArrowForward />
          </div>
          <button className="bg-white w-full mt-3 py-2 px-6 text-blue-900 font-bold rounded-2xl">
            Subscribe Now
          </button>
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
