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
    image: "/assets/lindao.jpg",
  },
  {
    name: "Pricilla Baidoo",
    role: "Assistant Secretary",
    image: "/img/female.jpg",
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
    image: "/img/female.jpg",
  },
  {
    name: "Daniel Laryea",
    role: "Assistant Organiser",
    image: "/img/default.jpg",
  },
  {
    name: "Juliet Owusu",
    role: "Treasurer",
    image: "/img/female.jpg",
  },
  {
    name: "Dorothy Afari Mintah",
    role: "Financial Secretary",
    image: "/img/female.jpg",
  },
  {
    name: "Alexander Ampadu",
    role: "Chaplain",
    image: "/img/default.jpg",
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
