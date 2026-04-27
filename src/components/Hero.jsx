import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Link } from "react-router";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const sliderData = [
    {
      title: "Uniting Congregations. Growing in Christ.",
      description:
        "The Presbyterian Church of Ghana – Washington DC North District brings together congregations committed to worship, spiritual growth, and community impact.",
      cta: "Explore Our District",
      image: "/assets/pcggallery.jpg",
      link: "/aboutus",
    },
    {
      title: "One District. Many Congregations. One Mission.",
      description:
        "We connect and empower churches across the district to serve, lead, and make a difference through Christ-centered ministry.",
      cta: "Find a Congregation",
      image: "/assets/pcgtrinity.jpg",
      link: "/contactus",
    },
  ];

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full   "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full">
          {sliderData.map((slides, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card className="rounded-none">
                  <CardContent
                    className="relative flex items-center justify-center h-[80vh] p-6 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides.image})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/80"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-4xl text-white space-y-12 md:space-y-28">
                      <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-12">
                        {slides.title}
                      </h1>

                      <p className="text-base md:text-xl mb-6 text-gray-200 leading-relaxed max-w-2xl mx-auto">
                        {slides.description}
                      </p>
                      <Link to={slides.link}>
                        <button className="bg-red-800 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg">
                          {slides.cta}
                        </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Hero;
