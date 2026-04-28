import { Link } from "react-router";
import SEO from "../components/ui/SEO";

const groups = [
  {
    title: "Women's Fellowship",
    description: "District fellowship for women committed to service, prayer, and spiritual growth.",
    link: "/womenfellowship",
  },
  {
    title: "Men's Fellowship",
    description: "District fellowship supporting men in leadership, discipleship, and ministry.",
    link: "/mensfellowship",
  },
  {
    title: "Young Adults' Fellowship",
    description: "A vibrant fellowship for young adults growing in Christ and serving together.",
    link: "/yaf",
  },
  {
    title: "Young Peoples’ Guild",
    description: "District youth fellowship focused on godliness, development, and Christian community.",
    link: "/ypg",
  },
  {
    title: "Singing Band",
    description: "Music ministry team serving the district through worship and special presentations.",
    link: "/singingband",
  },
  {
    title: "Choir",
    description: "District choir leadership and ministry information across congregations.",
    link: "/choir",
  },
  {
    title: "Bible Study & Prayer",
    description: "District Bible study and prayer ministry updates, schedule, and contact information.",
    link: "/biblestudy",
  },
  {
    title: "Presbyters' Conference",
    description: "Conference of past and serving presbyters serving the district in love and unity.",
    link: "/presbyters",
  },
];

const Groups = () => {
  return (
    <div>
      <SEO
        title="Groups"
        description="Explore the ministries and fellowship groups within the Presbyterian Church of Ghana – Washington DC North District."
      />
      <section className="flex w-full flex-col items-center justify-center bg-linear-to-r from-blue-800 to-red-700 px-6 py-12 text-center md:h-52">
        <h1 className="text-4xl font-bold text-white">District Groups</h1>
        <p className="mt-3 text-sm text-gray-300">PCG - Washington DC - North District</p>
      </section>

      <section className="bg-gray-50 px-6 py-12 md:py-18">
        <div className="container mx-auto">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">Find the fellowship group that fits you</h2>
            <p className="mt-4 text-gray-600">
              Our district groups support discipleship, worship, leadership, and community across every generation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <Link
                key={group.link}
                to={group.link}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-red-700">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{group.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-blue-700">View group</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Groups;
