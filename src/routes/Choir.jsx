import GroupTemplate from "../components/GroupTemplate";

const Choir = () => {
const executives = [
  { name: "Jonathan Liggie", role: "President", image: "/img/placeholder-profile.jpg" },
  {
    name: "Eugenia Aniagyei",
    role: "Vice President",
    image: "/img/placeholder-profile.jpg",
  },
  {
    name: "Linda Oppong Boateng",
    role: "Secretary",
    image: "/assets/lindao.jpg",
  },
  {
    name: "Pricilla Baidoo",
    role: "Assistant Secretary",
    image: "/img/placeholder-profile.jpg",
  },
  {
    name: "Sam Teye",
    role: "Choir Master",
    image: "/assets/samt.jpg",
  },
  {
    name: "John Dadzie",
    role: "Assistant Choir Master",
    image: "/assets/john.jpg",
  },


  {
    name: "Gifty Ampofo",
    role: "Organiser",
    image: "/img/placeholder-profile.jpg",
  },
  {
    name: "Daniel Laryea",
    role: "Assistant Organiser",
    image: "/img/placeholder-profile.jpg",
  },
  {
    name: "Juliet Owusu",
    role: "Treasurer",
    image: "/img/placeholder-profile.jpg",
  },
  {
    name: "Dorothy Afari Mintah",
    role: "Financial Secretary",
    image: "/img/placeholder-profile.jpg",
  },
  {
    name: "Alexander Ampadu",
    role: "Chaplain",
    image: "/img/placeholder-profile.jpg",
  },


  {
    name: "Mrs. Doris Nsiah",
    role: "Member",
    image: "/assets/dorisn.jpg",
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
