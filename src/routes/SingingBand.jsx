import GroupTemplate from "../components/GroupTemplate";

const SingingBand = () => {
  const executives = [
    { name: "Hayford Somuah", role: "President", image: "/img/placeholder-profile.jpg" },
    {
      name: "Helena Agyakwa",
      role: "Vice President",
      image: "/img/placeholder-profile.jpg",
    },
    { name: "Adelaide Asante", role: "Secretary", image: "/img/placeholder-profile.jpg" },
    {
      name: "Theresa Amoah",
      role: "Assistant Secretary",
      image: "/img/placeholder-profile.jpg",
    },
    { name: "Lydia Mensah", role: "Treasurer", image: "/img/placeholder-profile.jpg" },
    {
      name: "Dina Adobea",
      role: "Financial Secretary",
      image: "/img/placeholder-profile.jpg",
    },
    { name: "Lydia Opoku", role: "Organizer", image: "/img/placeholder-profile.jpg" },
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
