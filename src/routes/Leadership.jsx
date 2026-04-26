import React from 'react'

const Leadership = () => {

  const leadership = [
    {
      name: "Rev. James Joseph Kumi Duodu",
      role: "District Session Clerk",
      image: "/assets/minsiter.jpg",
    },
    {
      name: "Mr. Isaac K. Apea",
      role: "District Lay Representative to Presbytery Session Council",
      image: "/assets/layrep.jpg",
    },
    {
      name: "Mr. Daniel A. Amponsah",
      role: "District Treasurer (Acting)",
      image: "/assets/Amponsah.jpeg",
    },
    {
      name: "Mr. Isaiah E. Okyere",
      role: "District Leadership",
      image: "/assets/Isaiahtreasure.png",
    },
  ];

  const sessionCouncil = [
    {
      name: "Rev. James Joseph Kumi Duodu",
      role: "District Minister",
    },
    {
      name: "Mr. Isaac K. Apea",
      role: "District Session Clerk",
    },
    {
      name: "Rev. Benbel Nana Owusu",
      role: "Ministers’ Representative",
    },
    {
      name: "Catechist Mrs. Gifty Ampofo",
      role: "Catechists’ Representative",
    },
    {
      name: "Mr. Daniel Amponsah",
      role: "District Lay Representative",
    },
    {
      name: "Mr. Isaiah Ebo Okyere",
      role: "Acting District Treasurer",
    },
  ];


  return (
    <div className="bg-gray-100">
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">District Leaderships</h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <section className="container mx-auto py-10 px-5">
        <div className="grid md:grid-cols-4 gap-6">
          {leadership.map((person, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-2xl flex flex-col items-center shadow"
            >
              <img
                src={person.image}
                alt={person.name}
                className=" w-50 h-50 object-cover  object-top rounded-full "
              />
              <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-900 w-full px-10 py-10">
        <div className="container mx-auto">
          <div>
            <h1 className="text-white text-3xl text-center font-bold px-5 py-18">
              District Session Council Standing Committee
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {sessionCouncil.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl p-6 text-center"
              >
                <h3 className="text-xl  font-semibold mb-2">{person.name}</h3>
                <p className="text-red-500  text-sm mt-2">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  
    </div>
  );
}

export default Leadership
