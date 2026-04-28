import { useState } from "react";
import PersonCard from "./PersonCard";

const DistrictAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const districtData = [
    {
      title: "Officers",
      people: [
        {
          name: "Rev. Felix Addo Botchway",
          role: "District Minister, Minister-In-Charge",
          location: "Adom Congregation",
        },
        { name: "Mr. Isaac Apea", role: "District Clerk" },
      ],
    },
    {
      title: "Agents",
      people: [
        {
          name: "Rev. Felix Addo Botchway",
          role: "District Minister, Minister-In-Charge",
          location: "Adom Congregation",
        },
        {
          name: "Rev. Leticia Kenney",
          role: "Minister-In-Charge",
          location: "Divine Word Congregation",
        },
        {
          name: "Rev. Dr. Mrs. Ernestina Gakpo",
          role: "Minister-In-Charge",
          location: "Trinity Congregation",
        },
        {
          name: "Rev. Emmanuel Apau Danso",
          role: "Former Minister-In-Charge",
          location: "Trinity Congregation",
        },
        {
          name: "Rev. Dr. Michael Obiri-Yeboah",
          role: "Minister-In-Charge",
          location: "Capital DC Preaching Point",
        },
        {
          name: "Rev. Theophilus Odonkor",
          role: "Minister-In-Charge",
          location: "Covenant Congregation",
        },
        {
          name: "Catechist Mercy Abankwa",
          role: "Catechist",
          location: "Adom Congregation",
        },
        {
          name: "Catechist Mrs. Ellen Noi",
          role: "Catechist",
          location: "Adom Congregation",
        },
        {
          name: "Catechist Francis Nnam",
          role: "Catechist",
          location: "Faith Preaching Point",
        },
        {
          name: "Cat. Mrs. Eugenia Aniagyei",
          role: "Catechist",
          location: "Capital DC Preaching Point",
        },
        {
          name: "Catechist Mrs. Gifty Ampofo",
          role: "Catechist",
          location: "Faith Preaching Point",
        },
        {
          name: "Madam Comfort Opare-Ababio",
          role: "Caretaker",
          location: "Good Shepherd Preaching Point",
        },
        {
          name: "Mr. Isaac Amankwah-Pam",
          role: "Caretaker",
          location: "Divine Word Congregation",
        },
        {
          name: "Mr. Benjamin Agyakwa",
          role: "Former Caretaker",
          location: "Trinity Congregation",
        },
        {
          name: "Rev. Benbel Nana Owusu",
          role: "Minister-In-Charge",
          location: "Trinity Congregation",
        },
        {
          name: "Rev. Emmanuel Afriyie",
          role: "Minister-In-Charge",
          location: "Good Shepherd Congregation",
        },
      ],
    },
    {
      title: "District Session Council Standing Committee",
      people: [
        { name: "Rev. Felix Addo Botchway", role: "District Minister" },
        { name: "Mr. Isaac Apea", role: "District Clerk" },
        {
          name: "Rev. Dr. Mrs. Ernestina J. Gakpo",
          role: "Ministers’ Representative",
        },
        {
          name: "Catechist Mercy Abankwa",
          role: "Caretakers/Catechists’ Representative",
        },
        {
          name: "Mr. Eric Frimpong",
          role: "Lay Representative on Presbytery Session Council",
        },
        { name: "Mr. Isaiah Okyere", role: "District Treasurer (Acting)" },
      ],
    },
    {
      title: "District Committee Chairpersons",
      people: [
        { name: "Mr. Ebenezer Kotei", role: "Committee on Education" },
        { name: "Catechist Mercy Abankwa", role: "Committee on Finance" },
        { name: "Mr. Peter Aniagyei", role: "Admin & Human Resources" },
        { name: "Rev. Theophilus Odonkor", role: "Mission & Evangelism" },
        { name: "Mr. J.B Danquah", role: "Ecumenical & Social Relations" },
        {
          name: "Mrs. Miriam Ballmoos",
          role: "Development and Social Services",
        },
        { name: "Mr. Agyemang Dickson", role: "Welfare" },
        { name: "Mr. Eric Kyeremeh", role: "Church Life and Nurture" },
      ],
    },
    {
      title: "District Groups Leaders",
      people: [
        {
          name: "Mr. Seth Ansah",
          role: "President, Bible Study and Prayer Group",
        },
        { name: "Madam Adelaide Asante", role: "Organizer, Children Service" },
        { name: "Rev. Dr. Michael Obiri-Yeboah", role: "Organizer, Youth" },
        { name: "Mr. Emmanuel Dokyi", role: "President, Church Choir" },
        { name: "Mr. Bill Ampofo", role: "President, Men’s Fellowship" },
        { name: "Ms. Adelaide Asante", role: "President, Singing Band" },
        { name: "Madam Doris Nsiah", role: "President, Women’s Fellowship" },
        {
          name: "Dr. Paa Kwasi Sefa",
          role: "President, Young Adult Fellowship",
        },
        {
          name: "Ms. Margaret Quarshie",
          role: "President, Young People’s Guild",
        },
        {
          name: "Dr. Samuel Agyem-Bediako",
          role: "President, District Presbyters’ Conference",
        },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {districtData.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
              isOpen ? "shadow-md" : ""
            }`}
          >
            {/* HEADER */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-left">{item.title}</span>

              <span
                className={`text-xl transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            {/* CONTENT */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-5 pb-5 pt-2">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {item.people.map((person, i) => (
                    <PersonCard key={i} person={person} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DistrictAccordion;
