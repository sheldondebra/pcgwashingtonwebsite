import React from 'react'
import { LuChurch } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import DistrictAccordion from '../components/DistrictAccordion';
import SEO from '../components/ui/SEO';

const About = () => {

  const members = [
    {
      name: "Mr. Marcus Amoako",
      congregation: "Emmanuel Congregation",
      role: "Former District Clerk WDCD, Chairman",
    },
    {
      name: "Mr. Isaac Apea",
      congregation: "Trinity Congregation",
      role: "Session Clerk, Secretary",
    },
    {
      name: "Rev. Felix Tettekpoe",
      congregation: "Herndon Congregation",
      role: "Member",
    },
    {
      name: "Mad. Vida Acquah",
      congregation: "N/A",
      role: "Member",
    },
    {
      name: "Dr. Samuel Agyem-Bediako",
      congregation: "Washington DC",
      role: "District Clerk, Member",
    },
    {
      name: "Mr. Peter Aniagyei",
      congregation: "Adom Congregation",
      role: "Session Clerk, Member",
    },
    {
      name: "Mr. Paul Osei-Akrasi",
      congregation: "Emmanuel Congregation",
      role: "Member",
    },
  ];

  


  return (
    <div>
      <SEO 
        title="About Us" 
        description="Learn about the history and mission of the Presbyterian Church of Ghana – Washington DC North District. Discover our journey and the leaders guiding our congregations."
      />
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">ABOUT US</h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <section className="md:flex container mx-auto py-20 gap-18 items-center">
        <div className="md:w-1/2 px-6">
          <h1 className="text-4xl  text-red-700 font-bold">BRIEF HISTORY </h1>
          <h3 className="text-2xl  text-red-700 mb-12">
            OF THE WASHINGTON DC NORTH DISTRICT
          </h3>
          <p className="text-gray-500 ">
            During the December 2020, Washington DC District (WDCD) Session
            meeting, a decision was taken to appoint a Demarcation Committee
            (hereafter referred to as “The Committee”) to study the viability of
            demarcating the WDCD into separate entities. In response to the
            above directive, on Tuesday, January 21, 2021, the Committee was
            commissioned by the District Minister, Rev. Samuel Okyere Mireku.
            The committee was given the terms of references to conduct studies
            and provide written summaries on the results of the study and report
            back to the District Session Council Standing Committee. The
            Committee deliberated intensely on the merits and demerits of
            demarcating the District. Majority of Committee members supported
            the demarcation of the District. Based on the results of the review
            performed, per the Terms of Reference given, the Committee concluded
            that demarcation will be of strategic benefit to District, the
            Presbytery and Presbyterian Church of Ghana as a whole.
            Consequently, in March 2020, the Committee presented its
            recommendations to the Washington DC District Session Council
            Standing Committee for implementation.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/pcggallery.jpg"
            alt=""
            className="md:h-150 w-full mt-10 object-cover sm:rounded-2xl "
          />
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:px-10 ">
        <div className="container mx-auto p-5 ">
          <h1 className="text-4xl  font-bold items-center">
            Demarcation Committee Members
          </h1>
          <p className="my-5 text-gray-400">
            A dedicated team of leaders from various congregations who worked
            together to guide the successful formation of the district.
          </p>
          <div className=" p-5">
            <div className="grid md:grid-cols-3 gap-5">
              {members.map((list, index) => (
                <div
                  key={index}
                  className="border bg-white py-8 px-6 rounded-2xl shadow"
                >
                  <h3 className="text-xl mb-2 font-semibold">{list.name}</h3>
                  <hr className="w-50 border-red-600" />
                  <div className="flex items-center gap-3 mt-4 text-gray-500 ">
                    <LuChurch className="text-red-700 h-6 w-6" />
                    {list.congregation}
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-gray-500">
                    <FaRegUser className="text-red-700 h-6 w-6" />
                    {list.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white ">
        <div></div>
        <div>
          <img
            src="/assets/aboutchurch.jpg"
            alt=""
            className="md:h-150 w-full  object-cover object-center "
          />
        </div>
      </section>

      <section className="bg-black p-5 ">
        <div className="container mx-auto md:flex py-10 px-5 gap-10 space-y-15 ">
          <div>
            <h1 className="text-blue-100 font-bold text-2xl mb-3">
              Elevation To District Status
            </h1>
            <p className="text-white">
              On September 12, 2021, Washington DC North was officially elevated
              to District status. The elevation service was officiated by Rev.
              J.J Kumi Duodu, Chairperson of the North America Australia
              Presbytery (NAAP) and assisted by Rev. Frank Addo, Presbytery
              Clerk.
            </p>
          </div>
          <div>
            <h1 className="text-blue-100 font-bold text-2xl mb-3">
              Induction of District Minister
            </h1>
            <p className="text-white">
              Rev. Felix Addo Botchway was inducted into office as District
              Minister, WDCN District on January 9, 2022. The induction service
              was officiated by Rev. J.J. Kumi Duodu, Chairperson, NAAP and
              assisted by Rev. Frank Addo, Presbytery Clerk, and other members
              of the District Session Council.
            </p>
          </div>
          <div>
            <h1 className="text-blue-100 font-bold text-2xl mb-3">
              Congregations & Preaching Points in the District
            </h1>
            <p className="text-white ">
              he District initially comprised Adom Congregation, Trinity
              Congregation, Good Shepherd Preaching Point, Covenant Preaching
              Point, and Divine Word Preaching Point. Two new Preaching Points,
              namely Faith, planted by Adom and Capital DC, planted by Rev. Dr.
              Michael Obiri-Yeboah and his family have since joined the fold.
              Furthermore, Covenant, Divine Word, and Capital DC have since been
              elevated to Congregational status.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-amber-50/40 py-20 px-15">
        <div className="container mx-auto" >
          <div className='py-12'>
            <h1 className='text-2xl text-red-600 font-bold text-center'>Current & Past Key Personnel of the District</h1>
          </div>
          <DistrictAccordion />
        </div>
      </section>
    </div>
  );
}

export default About
