import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import SendMessage from '../components/SendMessage';
import SEO from '../components/ui/SEO';

const Contacts = () => {
  return (
    <div>
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Presbyterian Church of Ghana – Washington DC North District. Contact us for questions, support, or to connect with our congregations."
      />
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <section className="bg-gray-200 ">
        <div className="container mx-auto md:flex justify-center px-10 py-12">
          <div className="md:w-1/2 p-6">
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
          <div className="md:w-1/2 p-2">
            <SendMessage title='Send us a Message' btnLabel='Send Message' type="contact"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts
