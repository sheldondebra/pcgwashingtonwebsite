import GroupTemplate from '../components/GroupTemplate';

const YAF = () => {

  const executives = [
    {
      name: "Dr. Paa Kwasi Sefa",
      role: "President",
      image: "/img/groups/default.jpg",
    },
    {
      name: "Ms. TBD",
      role: "Vice President",
      image: "/img/groups/default.jpg",
    },
    {
      name: "Mrs. Emefa Sappor",
      role: "Secretary",
      image: "/img/groups/default.jpg",
    },
    {
      name: "Mr. Joseph Yeboah",
      role: "Organiser",
      image: "/img/groups/default.jpg",
    },
    {
      name: "Ms. Evelyn Addison",
      role: "Treasurer",
      image: "/img/groups/default.jpg",
    },
    {
      name: "Ms. Afia Dadzie",
      role: "Financial Secretary",
      image: "/img/groups/default.jpg",
    },
  ];
  return (
     <div className="min-h-screen w-full">
      <GroupTemplate
        title="District Young Adults' Fellowship"
        logo='/assets/yaflogo.png'
        subtitle="PCG - Washington DC North District"
        description={`Young Adults Fellowship (YAF) is a generational group comprising young adult members in the district between the ages of 30 and 40.

District YAF was established in September 2021 following the formation of the Washington DC North District.

YAF members are talented, energetic, and enthusiastic men and women who use their time, talents, and resources to support and sustain the Presbyterian Church of Ghana.

The current membership of District YAF stands at 96.

Motto:
"Christ in You, the Hope of Glory" (Colossians 1:27)`}
        executives={executives}
      />
    </div>
  );
};


export default YAF
