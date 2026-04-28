import GroupTemplate from "../components/GroupTemplate";

const YPG = () => {

 const executives = [
   {
     name: "Ms. Margaret Quashie",
     role: "President",
     image: "/img/placeholder-profile.jpg",
   },
   {
     name: "Abigail Mensah",
     role: "Vice President",
     image: "/assets/abigailm.jpg",
   },
   {
     name: "Nina Nsiah",
     role: "Secretary",
     image: "/assets/nina.jpg",
   },
   {
     name: "Isaac Amoah Osei",
     role: "UNAAPS Coordinator / Organizer",
     image: "/assets/isaaca.jpg",
   },
   {
     name: "Kojo Otchere Addo",
     role: "Vice Organiser",
     image: "/assets/addo.jpg",
   },
   {
     name: "Ohemaa Nana Agyemang",
     role: "Treasurer",
     image: "/assets/ohemaa.jpg",
   },
   {
     name: "Kwaku Kissi Sefa",
     role: "Financial Secretary",
     image: "/assets/Kwakukis.jpg",
   },
 ];


  return (
    <GroupTemplate
      title="District Young Peoples’ Guild"
      subtitle="PCG - Washington DC North District"
      description="The District Young People's Guild (YPG) was formed in September 2021 along with the elevation of the Washington DC North District. The group aims to enhance the spiritual, mental and physical wellbeing of members as well as prepare them for future leadership roles.
The District YPG comprises members from the various Congregations and Preaching Points across the District ages 18-30. These include high school seniors, colleges and graduate students. As a District we participate in the annual Presbytery youth conference also known as Youth Camp. This conference is a way for members throughout the District and Presbytery to gather and interact with each other. It’s a way for us to facilitate a structure to grow in the house of the Lord.
Come and join the WDCN District Youth! As our many sayings goes “You….Practice Godliness” Amen!"
      executives={executives}
    />
  );
};

export default YPG;
