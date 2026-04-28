import EventCard from '../components/EventCard';
import SEO from '../components/ui/SEO';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Miracle Hour",
      date: {
        day: 1,
        month: "Nov",
      },
      time: "09:00 pm",
      location: "Adom Congregation",
      description: "",
    },
    {
      id: 2,
      title: "Non-Formal Education Career Seminar",
      date: {
        day: 9,
        month: "Sep",
      },
      time: "08:00 pm",
      location: "Zoom",
      description: "",
    },
    {
      id: 3,
      title: "Divine Word Congregation - 10th Anniversary Celebrations",
      date: {
        day: 14,
        month: "Sep",
      },
      time: "12:30 pm",
      location: "Divine Word, 5532 Hartford Road, Baltimore MD 21214",
      description: "",
    },
    {
      id: 4,
      title: "DISCIPLESHIP CONFERENCE",
      date: {
        day: 20,
        month: "Sep",
      },
      time: "10:00 am",
      location: "8729 Greenbelt Road, Greenbelt, MD 20770",
      description: "",
    },
    {
      id: 5,
      title: "WASHINGTON DC NORTH FIRST DISTRICT CHOIR CONFERENCE",
      date: {
        day: 3,
        month: "Oct",
      },
      time: "08:00 pm",
      location: "8729 Greenbelt Road, MD 20770",
      description: "Please refer to the flyer for further information.",
    },
    {
      id: 6,
      title: "DISTRICT PRAYER CONFERENCE",
      date: {
        day: 27,
        month: "Oct",
      },
      time: "07:00 pm",
      location: "Zoom",
      description: "Please refer to the flyer for more information.",
    },
    {
      id: 7,
      title: "5th District Session",
      date: {
        day: 7,
        month: "Dec",
      },
      time: "09:00 am",
      location:
        "Trinity Congregation, 8 Russell Avenue, Gaithersburg, MD 20877",
      description: "Begins on 5th December 2025 on Zoom. Details on flyer.",
    },
    {
      id: 8,
      title: "MIRACLE HOUR",
      date: {
        day: 20,
        month: "Mar",
      },
      time: "08:00 pm",
      location:
        "Capital DC Congregation, 7720 Alaska Ave NW, Washington DC 20012",
      description: "Come and you will be blessed!",
    },
  ];
  return (
    <div className="bg-gray-50">
      <SEO 
        title="Upcoming Events" 
        description="Stay connected with the upcoming programs and events of the Presbyterian Church of Ghana – Washington DC North District."
      />
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">Our Events</h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <section className="px-6 py-12  min-h-screen container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
          <p className="text-gray-500 mt-2">
            Stay connected with our district programs
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events
