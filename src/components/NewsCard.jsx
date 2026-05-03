import { FaArrowRight } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import { Link } from 'react-router';



const NewsCard = () => {

  const newsData = [
    {
      id: 1,
      title: "District Thanksgiving Service Held Successfully",
      slug: "district-thanksgiving-service",
      image: "/assets/womanaward.jpg",
      description:
        "The Washington DC North District gathered in unity for a powerful thanksgiving service filled with praise, prayer, and fellowship.",
      date: "March 10, 2026",
    },
    {
      id: 2,
      title: "Youth Ministry Retreat 2026",
      slug: "youth-ministry-retreat-2026",
      image: "/assets/pastormember.jpg",
      description:
        "The district youth experienced a spirit-filled retreat focused on discipleship, leadership, and spiritual growth.",
      date: "February 18, 2026",
    },
    {
      id: 3,
      title: "New Preaching Point Inaugurated",
      slug: "new-preaching-point-inaugrated",
      image: "/assets/bluwwoman.jpg",
      description:
        "A new preaching point was officially inaugurated, expanding the mission work of the district.",
      date: "January 25, 2026",
    },
    {
      id: 4,
      title: "Children Service",
      slug: "children-service",
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
        {newsData.map((news) => (
          <Link key={news.id} to={`/blog/${news.slug}`}>
            <div
            
              className="bg-amber-50 p-8 rounded-4xl shadow flex flex-col justify-between"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-52 object-cover rounded-2xl mb-10"
              />
              <h1 className="text-2xl font-semibold mb-2">{news.title}</h1>
              <p className="text-gray-500">{news.description}</p>
              <div className="my-5 flex items-center gap-6 text-red-700">
                <FaArrowRight />
                Read More
              </div>
              <hr />
              <div className="flex gap-5 items-center text-gray-600 mt-4 text-sm">
                <LuCalendar />
                {news.date}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewsCard
