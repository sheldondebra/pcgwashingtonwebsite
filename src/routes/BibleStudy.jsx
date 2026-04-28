import { Link } from "react-router";
import SEO from "../components/ui/SEO";

const BibleStudy = () => {
  return (
    <div>
      <SEO
        title="Bible Study & Prayer"
        description="District Bible study and prayer ministry information for the Presbyterian Church of Ghana – Washington DC North District."
      />
      <section className="flex w-full flex-col items-center justify-center bg-linear-to-r from-blue-800 to-red-700 px-6 py-12 text-center md:h-52">
        <h1 className="text-4xl font-bold text-white">Bible Study & Prayer</h1>
        <p className="mt-3 text-sm text-gray-300">PCG - Washington DC - North District</p>
      </section>

      <section className="bg-amber-50/40 px-6 py-12 md:py-18">
        <div className="container mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-3xl font-bold text-red-700">Growing together through the Word and prayer</h2>
          <p className="mt-6 leading-8 text-gray-600">
            This ministry page is reserved for district Bible study and prayer updates. Meeting details, study themes,
            and fellowship information will be published here as they are finalized.
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            For the latest schedule or to connect with a congregation, please reach out through the district contact page.
          </p>

          <div className="mt-8">
            <Link
              to="/contactus"
              className="inline-flex rounded-full bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              Contact the District
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BibleStudy;
