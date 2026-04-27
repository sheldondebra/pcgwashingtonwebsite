import React from 'react'
import SendMessage from '../components/SendMessage'
import { TbProgressHelp } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import SEO from '../components/ui/SEO';

const Give = () => {
  return (
    <div>
      <SEO 
        title="Give / Donate" 
        description="Support the mission and ministry of the Presbyterian Church of Ghana – Washington DC North District. Learn about ways to give online or by check."
      />
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">Give / Support Us</h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <div className="bg-gray-200 py-20 px=10">
        <section className="md:flex container mx-auto gap-10 ">
          <div className="md:w-1/2 px-5">
            <SendMessage
              title="Contact us to donate?"
              btnLabel="I want to support"
              type="donation"
            />
            <div className="mt-5">
              <div className="flex items-center justify-center gap-3">
                <TbProgressHelp className="h-9 w-9 text-red-600" />
                <h2 className="text-xl font-bold">Need help or assistance ?</h2>
              </div>
              <div className=" flex items-center justify-center gap-5 mt-2 ">
                <LuPhoneCall className="h-4 w-4" />
                <p className="text-xl">240-264-9953</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 p-4">
            <h2 className="text-3xl font-bold">Give Online</h2>
            <p className="text-xl text-gray-600 mt-4">
              God bless you abundantly for your generosity
            </p>
            <div className="bg-white mt-10  py-5 px-8 rounded-3xl shadow-2xl">
              <img
                src="/assets/zelle.png"
                alt="zellepayment"
                className="w-20 "
              />
              <p className="text-gray-500 mt-5">Zelle Account Number</p>
              <h3 className="text-4xl font-extrabold mt-2">240 264 9953</h3>
            </div>
            <div className="bg-white mt-10  py-5 px-8 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold text-red-700">Give by Check</h2>
              <p className="text-gray-500 mt-3">
                You can set up a bank check payment through your online banking
                system or send a personal check to our church at the address
                below.
              </p>
              <p className="mt-5 text-blue-700">Please make check payable to</p>
              <h3 className="text-2xl font-bold text-red-500 mt-2 mb-4">
                PCG Washington DC North District
              </h3>
              <small className="bg-red-100 px-4 py-2  rounded-full border-red-800 border-2 text-red-800 ">
                Check Details
              </small>
             
              <p className="text-gray-500 mt-3">
                The District Treasurer <br />
                Presbyterian Church of Ghana
                <br /> Washington DC North District
                <br /> 8729 Greenbelt Rd, Greenbelt, MD 20770
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Give
