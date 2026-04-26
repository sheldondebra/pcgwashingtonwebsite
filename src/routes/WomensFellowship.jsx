import React from "react";
import ExecutiveCard from "../components/ExecutiveCard";

const WomensFellowship = () => {
  const executives = [
    {
      id: 1,
      name: "Mrs. Doris Nsiah",
      role: "President",
      image: "./assets/dorisn.jpg",
    },
    {
      id: 2,
      name: "Mrs. Augustina Ralph Laryea",
      role: "Vice President",
      image: "./assets/augustinal.jpg",
    },
    {
      id: 3,
      name: "Mrs. Barbara Sosoo",
      role: "Secretary",
      image: "./assets/barbaras.jpg",
    },
    {
      id: 4,
      name: "Mrs. Anita Frimpong",
      role: "Vice Secretary",
      image: "./assets/anitaf.jpg",
    },
    {
      id: 5,
      name: "Ms. Comfort Opare-Ababio",
      role: "Chaplain",
      image: "./assets/comforto.jpg",
    },
    {
      id: 6,
      name: "Mrs. Lucy Asiamah",
      role: "Treasurer",
      image: "./assets/lucya.jpg",
    },
    {
      id: 7,
      name: "Mrs. Doris Afari-Mintah",
      role: "Financial Secretary",
      image: "./assets/dorisa.jpg",
    },
    {
      id: 8,
      name: "Mrs. Akweley Nanka-Bruce",
      role: "Protocol",
      image: "./assets/akweleyb.jpg",
    },
  ];

  return (
    <div>
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">
          District Women's Fellowship
        </h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <div className="bg-red-50 w-full py-20 px-10">
        <section className="mx-auto container flex gap-20 ">
          <div className=" w-1/2 ">
            <div className="flex gap-8">
              <img
                src="./assets/womenslogo.jpg"
                alt="womenslogo"
                className="w-20 h-20 "
              />
              <h1 className="text-3xl font-bold text-red-600">
                Brief History of the Washington DC North District Women’s
                Fellowship
              </h1>
            </div>
            <p className="mt-10 text-gray-600">
              Women’s Fellowship is an active generational group for all women
              between the ages of 40 and above. The Women’s Fellowship aims to
              help women in the church lead exemplary lives as Christian women
              in love and unity, so that whether at home, work, in the market,
              or in public, they will serve as examples to attract other women
              to Christ.
            </p>
          </div>

          <div className="w-1/2">
            <p className="text-gray-600">
              The Washington DC North District Women’s Fellowship was started in
              September 2021 following the creation of the PCG Washington DC
              North District. The Washington DC North Women’s Fellowship draws
              its membership from four (4) congregations and three (3) Preaching
              Points, namely are Adom Congregation, TrinityCongregation, Divine
              Word Congregation, Covenant Congregation, Good Shepherd Preaching
              Point, Faith Preaching Point, and Capital DC Preaching Point. The
              combined current membership of the local congregations is about
              103. The Fellowship held its first District Conference on August
              5-6, 2023 in Gaithersburg, Maryland.
            </p>
          </div>
        </section>
      </div>

      <div className="text-center my-10 ">
        <h2 className="text-3xl font-bold text-red-600">Executives</h2>
        <p className="text-gray-500 mt-2">Leadership team of the fellowship</p>
      </div>
      <section className="px-6 py-12 bg-gray-50">
        {/* Grid */}
        <section className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {executives.map((person) => (
              <ExecutiveCard key={person.id} person={person} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default WomensFellowship;
