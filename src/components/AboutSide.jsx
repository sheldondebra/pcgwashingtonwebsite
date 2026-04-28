import { Link } from 'react-router';

const AboutSide = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <img
          src="./assets/aboutside.jpg"
          className="w-full h-72 md:h-[600px] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-8 md:p-20">
        <h1 className="text-3xl mb-6 font-bold">About Us</h1>
        <hr className="w-32 mb-4  border-red-800" />
        <p className="text-gray-500 ">
          The Presbyterian Church of Ghana – Washington DC North District is a
          Christ-centered fellowship of congregations united in faith, purpose,
          and mission. We exist to strengthen the spiritual life of our
          churches, support one another in ministry, and extend the love of
          Christ within our communities. Guided by the Word of God and led by
          the Holy Spirit, our district is committed to nurturing believers,
          promoting evangelism, and building strong, self-sustaining
          congregations. Together, we work to uphold the Reformed tradition
          while embracing unity, service, and growth across all our member
          churches. Through worship, discipleship, and community outreach, we
          strive to make a lasting impact both locally and globally as one body
          in Christ.
        </p>
        <Link to="/aboutus">
          <button className="bg-red-700 mt-5 px-6 py-2 rounded-3xl text-white">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutSide
