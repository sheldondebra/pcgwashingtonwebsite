import React from "react";
import GroupTemplate from "../components/GroupTemplate";

const Choir = () => {
  const executives = [
    { name: "Jonathan Liggie", role: "President", image: "/img/female.jpg" },
    {
      name: "Eugenia Aniagyei",
      role: "Vice President",
      image: "/img/female.jpg",
    },
    {
      name: "Linda Oppong Boateng",
      role: "Secretary",
      image: "/img/groups/Mrs-Linda-Oppong.jpg",
    },
    {
      name: "Pricilla Baidoo",
      role: "Assistant Secretary",
      image: "/img/female.jpg",
    },
    {
      name: "Sam Teye",
      role: "Choir Master",
      image: "/img/groups/Mr-Sam-Teye.jpg",
    },
    {
      name: "John Dadzie",
      role: "Assistant Choir Master",
      image: "/img/male.png",
    },
  ];

  return (
    <GroupTemplate
      title="District Choir"
      subtitle="PCG - Washington DC North District"
      executives={executives}
    />
  );
};

export default Choir;
