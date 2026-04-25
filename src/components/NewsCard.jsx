import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";



const NewsCard = () => {

  const newsData = [
    {
      title: "District Thanksgiving Service Held Successfully",
      image:
        "https://img.freepik.com/free-photo/people-worship-god-church_1150-18577.jpg",
      description:
        "The Washington DC North District gathered in unity for a powerful thanksgiving service filled with praise, prayer, and fellowship.",
      date: "March 10, 2026",
    },
    {
      title: "Youth Ministry Retreat 2026",
      image:
        "https://img.freepik.com/free-photo/group-people-hands-raised-hallelujah_1150-18578.jpg",
      description:
        "The district youth experienced a spirit-filled retreat focused on discipleship, leadership, and spiritual growth.",
      date: "February 18, 2026",
    },
    {
      title: "New Preaching Point Inaugurated",
      image:
        "https://img.freepik.com/free-photo/inside-church-with-cross-light_1150-18579.jpg",
      description:
        "A new preaching point was officially inaugurated, expanding the mission work of the district.",
      date: "January 25, 2026",
    },
    {
      title: "District Prayer Conference",
      image:
        "https://img.freepik.com/free-photo/church-congregation-praying-together_1150-18580.jpg",
      description:
        "Members gathered for a powerful night of prayer and intercession across all congregations.",
      date: "December 12, 2025",
    },
  ];


  return (
    <div>
      <div className="grid md:grid-cols-4 gap-5">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-amber-50 p-8 rounded-4xl shadow flex flex-col justify-between"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-52 object-cover rounded-2xl mb-10"
            />
            <h1 className="text-2xl font-semibold mb-2">{news.title}</h1>
            <p className="text-gray-500">{news.description}</p>
            <button className="text-red-700 flex items-center gap-6 my-5">
              <FaArrowRight />
              Read More
            </button>
            <hr />
            <div className='flex gap-5 items-center text-gray-600 mt-4 text-sm'>
              <LuCalendar />
              {news.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCard
