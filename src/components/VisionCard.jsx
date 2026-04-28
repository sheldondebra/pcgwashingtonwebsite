
const VisionCard = () => {

  const contentCards = [
    {
      title: "Our Vision",
      description:
        "To be a Christ-centered, self-sustaining, and growing district that nurtures faith, unity, and strong leadership across all congregations.",
      image: "./assets/vision.jpeg",
    },
    {
      title: "Our Mission",
      description:
        "To uphold the Word of God through prayer, evangelism, and holistic ministry while promoting growth, service, and community development.",
      image: "./assets/Mission.jpeg",
    },
    {
      title: "Our Motto",
      description:
        "Binding all together and expressing the essential unity of the Presbyterian Church of Ghana; is the motto “THAT THEY ALL MAY BE ONE”. (John 17:21).",
      image: "./assets/Motto.jpeg",
    },
  ];


  return (
    <div className="bg-gray-100 py-12 md:py-22 px-4">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentCards.map((items, index) => (
            <div
              key={index}
              className="border border-gray-200 pb-8 bg-white shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={items.image}
                alt={items.title}
                className="w-full h-56 object-cover"
              />
              <div className='px-6 md:px-10 py-6'>
                <h1 className="text-xl md:text-2xl font-bold text-red-800 mb-2">
                  {items.title}
                </h1>
                <hr className="w-16 md:w-32 mb-4 border-red-800" />
                <p className="text-gray-600 text-sm leading-relaxed">{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisionCard
