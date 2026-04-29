import { Link } from 'react-router';
import { FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';




const Footer = () => {
  return (
    <div className="bg-linear-to-r from-blue-800 to-blue-500 px-6 md:px-14 py-12 md:py-18">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-23">
        <div className="flex flex-col items-start">
          <img
            src="/assets/pcgfooterlogo.png"
            alt="Presbyterian Church of Ghana Washington DC North District footer logo"
            className="w-53"
          />
          <p className="text-white mt-4 text-sm leading-relaxed max-w-xs">
            Presbyterian Church of Ghana – Washington DC North District is a
            united body of congregations committed to Christ-centered worship,
            spiritual growth, and community impact across our district.
          </p>
          <div className="flex gap-4 text-white mt-6">
            <FaFacebook className="h-8 w-8 hover:text-blue-300 transition hover:border hover:p-1 hover:rounded-full hover:border-white duration-300" />
            <FaInstagram className="h-8 w-8 hover:text-blue-300 transition hover:border hover:p-1 hover:rounded-full hover:border-white duration-300" />
            <FaYoutube className="h-8 w-8 hover:text-blue-300 transition hover:border hover:p-1 hover:rounded-full hover:border-white duration-300" />
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold mb-6 text-lg border-b border-blue-400 pb-2 inline-block">
            Quick Links
          </h1>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:underline transition">
              Home
            </Link>
            <Link to="/aboutus" className="hover:underline transition">
              About us
            </Link>
            <Link to="/committees" className="hover:underline transition">
              Committees
            </Link>
            <Link to="/groups" className="hover:underline transition">
              Groups
            </Link>
            <Link to="/congregation" className="hover:underline transition">
              Congregation
            </Link>
            <Link to="/contactus" className="hover:underline transition">
              Contact Us
            </Link>
            <Link to="/give" className="hover:underline transition">
              Give / Donate
            </Link>
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold mb-6 text-lg border-b border-blue-400 pb-2 inline-block">
            Congregations
          </h1>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://pcgadom.org/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline transition"
            >
              Adom Congregation
            </a>
            <a
              href="https://pcgcapitaldc.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline transition"
            >
              Capital DC Preaching Point
            </a>
            <a
              href="https://pcgccde.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline transition"
            >
              Covenant Congregation
            </a>
            <Link to="/congregation" className="hover:underline transition">
              Divine Word Congregation
            </Link>
            <Link to="/congregation" className="hover:underline transition">
              Faith Preaching Point
            </Link>
            <a
              href="https://pcgigoodshepherd.org/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline transition"
            >
              Good Shepherd Preaching Point
            </a>
            <a
              href="https://pcgtrinity.org/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline transition"
            >
              Trinity Congregation
            </a>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-bold mb-6 border-b border-blue-400 pb-2 inline-block">
            Get in touch
          </h1>
          <div className="flex items-start gap-4 mt-4">
            <IoLocationSharp className="h-9 w-9 shrink-0 border border-white text-white rounded-full p-2 hover:bg-white hover:text-blue-800" />
            <div>
              <h2 className="text-sm font-bold">Address</h2>
              <p className="text-white text-sm">
                8729 Greenbelt Rd, Greenbelt, MD 20770
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-4">
            <MdOutlineMailOutline className="h-9 w-9 shrink-0 border border-white text-white rounded-full p-2 hover:bg-white hover:text-blue-800" />
            <div>
              <h2 className="text-sm font-bold">Email</h2>
              <p className="text-white text-sm">pcgwdcn@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-4">
            <FaPhoneAlt className="h-9 w-9 shrink-0 border border-white text-white rounded-full p-2 hover:bg-white hover:text-blue-800" />
            <div>
              <h2 className="text-sm font-bold">Phone Number</h2>
              <p className="text-white text-sm">240-264-9953</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-blue-400/30 text-center md:text-left md:flex  justify-between">
        <p className="text-xs text-blue-100 mb-4 md:mb-0">
          © 2026 Presbyterian Church of Ghana – Washington DC North District.
          All Rights Reserved.
        </p>
        <p className="text-xs text-blue-100 gap-4">
          Developed by &nbsp;
          <a href="https://tecunitgh.com/usa" target='blank' className='font-bold uppercase hover:font-extralight'>Tecunit.</a>
        </p>
      </div>
    </div>
  );
}

export default Footer
