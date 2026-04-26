import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";




const Contacts = () => {
  return (
    <div>
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <section className="bg-gray-200 ">
        <div className="container mx-auto flex justify-center px-10 py-12">
          <div className="w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-500">
              We’d love to hear from you. Whether you have a question, need
              support, or want to connect with one of our congregations, the
              Presbyterian Church of Ghana – Washington DC North District is
              here to help. Reach out to us through any of the channels below or
              send us a message, and we’ll respond as soon as possible.
            </p>
            <div className="flex items-center gap-5 mt-4">
              <IoLocationSharp className="h-12 w-12 bg-red-700 text-white rounded-full p-2 " />
              <div>
                <h2 className="text-lg font-bold">Address</h2>
                <p className="text-gray-500">
                  8729 Greenbelt Rd, Greenbelt, MD 20770
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-4">
              <MdOutlineMailOutline className="h-12 w-12 bg-red-700 text-white rounded-full p-2 " />
              <div>
                <h2 className="text-lg font-bold">Email</h2>
                <p className="text-gray-500">pcgwdcn@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-4">
              <FaPhoneAlt className="h-12 w-12 bg-red-700 text-white rounded-full p-2 " />
              <div>
                <h2 className="text-lg font-bold">Phone Number</h2>
                <p className="text-gray-500">240-264-9953</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-6">
            <div className="bg-white rounded-2xl shadow px-10 py-14 ">
              <h1 className="text-3xl font-light mb-4">Send a Message</h1>
              <div className="">
                <input
                  placeholder="Name"
                  type="text"
                  className="border-b border-gray-300 w-full px-4 py-3 focus:outline-0 active:border-red-500 "
                />
              </div>
              <div className="mt-5">
                <input
                  placeholder="Email"
                  type="email"
                  className="border-b border-gray-300 w-full px-4 py-3 focus:outline-0 active:border-red-500 "
                />
              </div>
              <div className="mt-5">
                <textarea
                  name="text"
                  className="border-b border-gray-300 w-full px-4 py-3 focus:outline-0 active:border-red-500 "
                  placeholder="Enter your Message"
                ></textarea>
              </div>
              <p className="text-gray-500 mt-5 text-sm">
                By submitting this form, you agree to share your information
                with us so we can respond to your inquiry promptly and
                appropriately.
              </p>
              <button className="mt-6 bg-red-700 text-white px-5 py-2 rounded-4xl flex items-center gap-3">
                <BsFillSendFill />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts
