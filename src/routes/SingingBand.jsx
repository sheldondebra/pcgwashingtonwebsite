import React from "react";
import GroupTemplate from "../components/GroupTemplate";

const SingingBand = () => {
  const executives = [
    { name: "Hayford Somuah", role: "President", image: "/img/male.png" },
    {
      name: "Helena Agyakwa",
      role: "Vice President",
      image: "/img/female.jpg",
    },
    { name: "Adelaide Asante", role: "Secretary", image: "/img/female.jpg" },
    {
      name: "Theresa Amoah",
      role: "Assistant Secretary",
      image: "/img/female.jpg",
    },
    { name: "Lydia Mensah", role: "Treasurer", image: "/img/female.jpg" },
    {
      name: "Dina Adobea",
      role: "Financial Secretary",
      image: "/img/female.jpg",
    },
    { name: "Lydia Opoku", role: "Organizer", image: "/img/female.jpg" },
  ];

  return (
    <GroupTemplate
      title="District Singing Band"
      subtitle="PCG - Washington DC North District"
      executives={executives}
    />
  );
};

export default SingingBand;
