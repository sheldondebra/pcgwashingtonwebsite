import { FaUser, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const PersonCard = ({ person }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition space-y-2">
      {/* NAME */}
      <div className="flex items-center gap-2">
        <FaUser className="text-gray-500 text-sm" />
        <h3 className="font-semibold text-base">{person.name}</h3>
      </div>

      {/* ROLE */}
      {person.role && (
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-blue-500 text-sm" />
          <p className="text-sm text-blue-600">{person.role}</p>
        </div>
      )}

      {/* LOCATION */}
      {person.location && (
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500 text-sm" />
          <p className="text-xs text-red-600">{person.location}</p>
        </div>
      )}
    </div>
  );
};

export default PersonCard;
