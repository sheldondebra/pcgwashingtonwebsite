import ExecutiveCard from "./ExecutiveCard";

const GroupTemplate = ({ title, subtitle, description, executives, logo }) => {
  return (
    <div>
      {/* HERO */}

      <section className="flex w-full flex-col justify-center bg-linear-to-r from-blue-800 to-red-700 px-6 py-12 text-center md:h-52">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-gray-300">{subtitle}</p>
      </section>

      {/* ABOUT */}
      {description && (
        <div className="w-full bg-red-50 px-6 py-16 md:px-10 md:py-20">
          <section className="container mx-auto flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
            {logo && <img src={logo} alt={`${title} logo`} className="h-24 w-24 shrink-0" />}
            <p className="text-center leading-8 text-gray-600 md:text-left">{description}</p>
          </section>
        </div>
      )}


      {/* EXECUTIVES */}
      {executives && executives.length > 0 && (
        <>
          <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-red-600">Executives</h2>
            <p className="text-gray-500 mt-2">Leadership team of the group</p>
          </div>

          <section className="px-6 py-12 bg-gray-50">
            <div className="container mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {executives.map((person, index) => (
                <ExecutiveCard key={index} person={person} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default GroupTemplate;
