import React from "react";

const ExecutiveCard = ({ person }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Image */}
      <div className="h-56 w-full overflow-hidden flex items-center justify-center">
        <img
          src={person.image}
          alt={person.name}
          className=" w-50 h-50 object-cover object-top rounded-full  border-5"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
        <p className="text-sm text-red-500 font-medium mt-1">{person.role}</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;
