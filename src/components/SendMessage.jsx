import React from "react";
import { BsFillSendFill } from "react-icons/bs";

const SendMessage = ({title, btnLabel}) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow px-10 py-14 ">
        <h1 className="text-3xl font-light capitalize mb-4">{title}</h1>
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
          <input
            placeholder="Phone Number"
            type="tel"
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
        <p className="text-gray-500 mt-7 text-sm">
          By submitting this form, you agree to share your information with us
          so we can respond to your inquiry promptly and appropriately.
        </p>
        <button className="mt-6 bg-red-700 text-white px-5 py-2 rounded-4xl flex items-center gap-3 hover:bg-red-500 transition-colors duration-200">
          <BsFillSendFill />
          {btnLabel}
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
