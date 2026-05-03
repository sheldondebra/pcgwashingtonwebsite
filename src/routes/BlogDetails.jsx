import { Link, useParams } from "react-router";
import { TbError404 } from "react-icons/tb";
import { Button } from "../components/ui/button";
import { LuCalendar } from "react-icons/lu";

const BlogDetails = () => {
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

  const { slug } = useParams();
  const news = newsData.find((b) => b.slug === slug);

  if (!news)
    return (
      <div className="bg-red-50">
        <section className="container mx-auto py-25 px-10 h-220 flex flex-col items-center justify-center gap-10">
          <TbError404 className="h-72 w-72 text-red-800" />
          <p className="text-4xl text-red-500 font-bold">
            Post not found
          </p>
          <Button asChild>
            <Link to="/news">Go Back to News</Link>
          </Button>
        </section>
      </div>
    );

  return (
    <section className="bg-blue-50">
      <div className="container mx-auto">
        <div className="flex">
          <div className="md:W-1/2 p-10">
            <img
              src={news.image}
              alt={news.title}
              className="w-200 h-150 object-cover object-top rounded-2xl shadow-2xl"
            />
          </div>
          <div className="md:W-1/2  px-18 py-20">
            <h1 className="text-3xl font-semibold mb-2">{news.title}</h1>
            <div className="flex gap-3 items-center text-gray-600 mt-4 text-sm">
              <LuCalendar className="w-6 h-6 text-red-500" />
              {news.date}
            </div>
            <p className="text-gray-500 mt-3 text-sm">{news.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
