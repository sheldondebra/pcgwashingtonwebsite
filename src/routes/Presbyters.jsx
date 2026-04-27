import React from 'react'
import GroupTemplate from '../components/GroupTemplate';

const Presbyters = () => {

  const executives = [
    {
      name: "Dr. Samuel Agyem-Bediako",
      role: "President",
      image: "/assets/samuelbediako.jpg",
    },
    {
      name: "Mrs. Anita Frimpong",
      role: "Vice President",
      image: "/assets/anitafrem.jpg",
    },
    {
      name: "Mr. Emmanuel Oppong",
      role: "Secretary",
      image: "/assets/eobeng.jpg",
    },
    {
      name: "Mr. Samuel P. Ntim",
      role: "Assistant Secretary",
      image: "/assets/pntim.jpg",
    },
    {
      name: "Mrs. Doris Nsiah",
      role: "Treasurer",
      image: "/assets/dorisns.jpg",
    },
    {
      name: "Mrs. Susana Owusu",
      role: "Financial Secretary",
      image: "/assets/sowusu.jpg",
    },
    {
      name: "Mrs. Miriam Von Ballmoos",
      role: "Protocol Officer",
      image: "/assets/vonb.jpg",
    },
  ];



  return (
    <div className="min-h-screen w-full">
      <GroupTemplate
        title="District Presbyters' Conference"
        subtitle="PCG - Washington DC North District"
        description="The Presbyterian Church of Ghana Presbyters’ Conference is a recognized organization made up of past and serving presbyters. The greeting of the conference is “KEEP MY FLOCK” with the response “WITH LOVE”!
The National Presbyters’ Conference of the Presbyterian Church of Ghana was formed at Abetifi in 1954 by Presbyters who attended the Synod of the Church, that year. The name National Presbyters’ Conference was adapted in 1992, at the 35th National Delegates Meeting, held at Abetifi Kwahu.
The North America-Australia Presbytery (NAAP) after a decade of activities as a Presbytery in the Presbyterian Church of Ghana (PCG), took a bold step in forming the Presbyters’ Conference in the Presbytery. The act was in conformance with the practices and tradition of PCG. Consequently, the initiative culminated in the formation of the Washington DC North District Presbyters’ Conference.
The District Presbyters’ Conference was officially initiated in July 2023 and introduced in February 2024 at Adom Congregation, Greenbelt by the District minister Revd. Felix Addo-Botchwey."
        executives={executives}
      />
      <div className="bg-green-100">
        <div className="container mx-auto md:px-10 md:py-20  gap-20">
          
          <div className="">
            <h1 className="text-2xl font-semibold text-green-700 mb-10">
              The objectives of the Conference are
            </h1>
            <ul className="list-disc text-gray-600 ">
              <li>
                To promote the spiritual, moral, and social life of members, to
                realize their potential and to accept responsibility in the
                Church and society
              </li>
              <li>
                To establish the holistic growth and development of the
                Presbyterian Church of Ghana in strict accordance with the
                constitution and Manual of Order
              </li>
              <li>
                Promote the spirit of Christian love among past, present and
                future presbyters in the District by developing a genuine
                interest in one another's well-being.
              </li>
              <li>
                Establish a benevolent fund to help members during
                <ol className="mt-5 list-decimal">
                  <li>Family crisis</li>
                  <li> Medical emergency and/or</li>
                  <li>Extreme financial need of members</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presbyters
