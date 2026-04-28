import GroupTemplate from '../components/GroupTemplate';

const Mens = () => {

   const executives = [
     {
       name: "Mr. Bill Ampofo",
       role: "President",
       image: "/assets/bill.jpeg",
     },
     {
       name: "Mr. Samuel Ntim",
       role: "Vice President",
       image: "/assets/ntim.jpeg",
     },
     {
       name: "Mr. Ebenezer Kotei",
       role: "Chaplain",
       image: "/assets/kotei.jpg",
     },
     {
       name: "Mr. Jonathan Liggie",
       role: "Secretary",
       image: "/assets/liggie.jpg",
     },
     {
       name: "Mr. Dickson Agyemang",
       role: "Treasurer",
       image: "/assets/dickson.jpg",
     },
     {
       name: "Mr. Alfred Otumfour",
       role: "Organising Secretary",
       image: "/assets/alfred.jpeg",
     },
   ];

  return (
    <div className="min-h-screen w-full">
      <GroupTemplate
        title="District Men's Fellowship"
        subtitle="PCG - Washington DC North District"
        description={`Men’s Fellowship is an active generational group for all men between the ages of 40 and above.
The Men’s Fellowship aims to help men in the church lead exemplary lives as Christian women in love and unity, so that wherever they find themselves, they will serve as examples to attract other men to Christ.
The District Men's fellowship seeks to bring all men in the various congregations in the Washington DC North District together and empower them to serve as a pivot of the church`}
logo='/assets/menslogo.png'
        executives={executives}
      />
    </div>
  );
}

export default Mens
