import React from "react";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  return (
    <div className="container mx-auto py-22 px-6 md:px-0">
      <div className="md:flex py-18 justify-between  ">
        <div className="md:w-1/2 max-w-180">
          <p className="text-sm text-red-800 font-bold">
            Latest updates, announcements, and stories from across our district.
          </p>
          <h1 className="text-5xl font-bold mt-5">Stay Updated. Stay Connected.</h1>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <p className="text-gray-500">
            Keep up with important news, upcoming events, and ministry
            highlights from the Presbyterian Church of Ghana – Washington DC
            North District. &nbsp;
            <span className="text-red-400">
               Stay informed about what God is doing across our congregations as
              we grow together in faith and service.
            </span>
          </p>
        </div>
      </div>
      <div>
        <NewsCard/>
      </div>
    </div>
  );
};

export default NewsSection;
