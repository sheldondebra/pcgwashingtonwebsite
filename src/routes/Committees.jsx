import React from 'react'

const Committees = () => {

  const committees = [
    {
      title: "Committee on Ecumenical and Social Relations",
      chairperson: "Mr. J. B. Danquah",
      functions: [
        "Advise on relations with others, Christian and non-Christian.",
        "Implement ecumenical and inter-faith programmes.",
        "Promote contextualization of Christianity in the community.",
        "Organize conferences, symposia, games and programmes.",
        "Organize Christian Home Week and Bible Week celebrations.",
        "Perform any other functions as directed by the District Session.",
      ],
    },
    {
      title: "Committee on Church Life and Nurture",
      chairperson: "Mr. Eric Kyeremeh",
      functions: [
        "Promote the work of Generational Groups.",
        "Enhance worship life of the District.",
        "Improve music standards.",
        "Ensure use of manuals and syllabi.",
        "Promote capacity building and lay training.",
        "Perform any other functions as directed by the District Session.",
      ],
    },
    {
      title: "Committee on Development and Social Services",
      chairperson: "Mrs. Miriam Ballmoos",
      functions: [
        "Promote a healthy environment.",
        "Implement Health Week activities.",
        "Encourage health talks and screenings.",
        "Promote entrepreneurship and self-employment.",
        "Perform any other functions as directed by the District Session.",
      ],
    },
    {
      title: "Committee on Finance",
      chairperson: "Mr. Isaiah E. Okyere",
      functions: [
        "Prepare budgets and financial statements.",
        "Ensure audited accounts submission.",
        "Advise on investments.",
        "Ensure proper financial management.",
        "Maintain district property (with Admin committee).",
        "Perform any other functions as directed.",
      ],
    },
    {
      title: "Committee on Administration and HR",
      chairperson: "Mr. Peter Aniagyei",
      functions: [
        "Strategic planning and management.",
        "Recruitment and staff conditions.",
        "Maintain church property.",
        "Keep proper statistics.",
        "Train church personnel.",
        "Perform any other functions as directed.",
      ],
    },
    {
      title: "Committee on Mission and Evangelism",
      chairperson: "Ms. Comfort Opare-Ababio",
      functions: [
        "Plan evangelistic activities.",
        "Support group evangelism programmes.",
        "Promote prayer and Bible study.",
        "Identify specialized ministry areas.",
        "Perform any other functions as directed.",
      ],
    },
    {
      title: "Committee on Education",
      chairperson: "Mr. Ebenezer Kotei",
      functions: [
        "Support church institutions.",
        "Run adult literacy programmes.",
        "Promote discipline in institutions.",
        "Encourage parental involvement.",
        "Promote Christian faith and heritage.",
        "Encourage Christian writers.",
        "Perform any other functions as directed.",
      ],
    },
  ];


  return (
    <div>
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">District Committees</h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>

      <section className="container mx-auto py-10">
        <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 border"
            >
              {/* Title */}
              <h2 className="text-sm pl-5 font-semibold mb-2 bg-blue-100 rounded-full py-2 px-1 text-blue-900 ">
                {committee.title}
              </h2>

              {/* Chairperson */}
              <p className="text-sm font-semibold text-gray-600 mb-4">
                <span className="font-semibold text-red-700">Chairperson:</span>{" "}
                {committee.chairperson}
              </p>

              {/* Functions */}
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <h1 className="bg-red-100 w-max px-6 py-1 rounded-full border border-red-900 text-red-800 mb-4">
                  Functions
                </h1>
                {committee.functions.map((func, i) => (
                  <li
                    key={i}
                    className="hover:bg-blue-50 text-gray-500 w-max py-1 rounded-2xl  px-2"
                  >
                    {func}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Committees
