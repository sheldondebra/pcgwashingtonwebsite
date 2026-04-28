import { useMemo } from "react";
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
  const autoplay = useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: true }),
    [],
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
        opts={{
          loop: true,
        }}
        plugins={[autoplay]}
        className="w-full overflow-x-hidden"
        onMouseEnter={() => autoplay.stop()}
        onMouseLeave={() => autoplay.reset()}
      >
        <CarouselContent className="w-full ml-0">
          {sliderData.map((slides, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="w-full">
                <Card className="rounded-none border-none">
                  <CardContent
                    className="relative flex h-[72vh] items-center justify-center bg-cover bg-center p-6 md:h-[80vh]"
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
                      <Link
                        to={slides.link}
                        className="inline-flex rounded-lg bg-red-800 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-red-500"
                      >
                        {slides.cta}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 border-none text-white text-5xl hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 border-none text-white hidden md:flex" />
      </Carousel>
    </>
  );
};

export default Hero;
