import React from "react";
import GroupTemplate from "../components/GroupTemplate";

const YPG = () => {
  const executives = [
    { name: "Ms. Magaret Quashie", role: "President", image: "" },
    {
      name: "Abigail Mensah",
      role: "Vice President",
      image: "/img/groups/Abigail-Amoah.jpg",
    },
    {
      name: "Nina Nsiah",
      role: "Secretary",
      image: "/img/groups/Nina-Nsiah.jpg",
    },
  ];

  return (
    <GroupTemplate
      title="District Young Peoples’ Guild"
      subtitle="PCG - Washington DC North District"
      description="The Young People’s Guild focuses on spiritual growth, leadership development, and fellowship among the youth of the district."
      executives={executives}
    />
  );
};

export default YPG;
