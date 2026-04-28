import SEO from "../components/ui/SEO";
import NewsSection from '../components/NewsSection';

const News = () => {
  return (
    <div>
      <SEO
        title="News"
        description="Read more news from the Presbyterian church of Ghana."
      />
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">News / Updates</h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <NewsSection/>
    </div>
  );
}

export default News
