import React from "react";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  return (
    <div className="container mx-auto py-12 md:py-22 px-6 md:px-0">
      <div className="flex flex-col md:flex-row py-10 md:py-18 justify-between gap-8">
        <div className="w-full md:w-1/2 max-w-xl">
          <p className="text-sm text-red-800 font-bold uppercase tracking-wider">
            Latest updates, announcements, and stories from across our district.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">Stay Updated. Stay Connected.</h1>
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-gray-600 leading-relaxed">
            Keep up with important news, upcoming events, and ministry
            highlights from the Presbyterian Church of Ghana – Washington DC
            North District. &nbsp;
            <span className="text-red-600 font-medium">
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
