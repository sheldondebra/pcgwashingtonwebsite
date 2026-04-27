import React from "react";
import ExecutiveCard from "./ExecutiveCard";

const GroupTemplate = ({ title, subtitle, description, executives, logo }) => {
  return (
    <div>
      {/* HERO */}
      <section className="text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 flex flex-col justify-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <p className="text-gray-300 text-sm mt-3">{subtitle}</p>
      </section>

      {/* ABOUT */}
      {description && (
        <div className="bg-red-50 w-full py-20 px-10">
          <section className="mx-auto container flex gap-10 flex-col md:flex-row">
            {logo && <img src={logo} alt="logo" className="w-24 h-24" />}
            <p className="text-gray-600">{description}</p>
          </section>
        </div>
      )}

      {/* EXECUTIVES */}
      {executives && executives.length > 0 && (
        <>
          <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-red-600">Executives</h2>
            <p className="text-gray-500 mt-2">Leadership team of the group</p>
          </div>

          <section className="px-6 py-12 bg-gray-50">
            <div className="container mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {executives.map((person, index) => (
                <ExecutiveCard key={index} person={person} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default GroupTemplate;
