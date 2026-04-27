import React from 'react'
import { Card , CardHeader, CardContent} from '../components/ui/card';
import { Button } from '../components/ui/button';
import SEO from '../components/ui/SEO';

const Congregations = () => {

   const congregations = [
     {
       name: "Adom Congregation",
       logo: "PCG Adom Logo",
       minister: "Rev. Felix Addo Botchway",
       website: true,
       link: "https://pcgadom.org/",
     },
     {
       name: "Capital DC Preaching Point",
       logo: "PCG Capital DC Logo",
       minister: "Rev. Dr. Michael Obiri-Yeboah",
       website: true,
       link: "https://pcgcapitaldc.com/",
     },
     {
       name: "Covenant Congregation",
       logo: "PCG Covenant Logo",
       minister: "Rev. Theophilus Odonkor",
       website: true,
       link: "https://pcgccde.com/",
     },
     {
       name: "Divine Word Congregation",
       logo: null,
       minister: "Rev. Leticia Kenney",
       website: false,
       note: "Website Under Construction",
     },
     {
       name: "Faith Preaching Point",
       logo: null,
       minister: "Catechist Francis Nnam",
       website: false,
       note: "Website Under Construction",
     },
     {
       name: "Good Shepherd Preaching Point",
       logo: "PCG Good Shepherd Logo",
       minister: "Mad. Comfort Opare-Ababio",
       website: true,
       link: "https://pcgigoodshepherd.org/",
     },
     {
       name: "Trinity Congregation",
       logo: "PCG Trinity Logo",
       minister: "Rev. Dr. Ernestina J. Gakpo",
       website: true,
       link: "https://pcgtrinity.org/",
     },
   ];


  return (
    <div>
      <SEO 
        title="Congregations" 
        description="Explore the congregations and preaching points within the Presbyterian Church of Ghana – Washington DC North District. Find a location near you."
      />
      <section className=" text-center md:h-52 h-30 w-full bg-linear-to-r from-blue-800 to-red-700 items-center flex flex-col justify-center  ">
        <h1 className="text-white text-4xl font-bold">
          Congregation / Preaching Points
        </h1>
        <p className="text-gray-300 text-sm leading-5 mt-3">
          PCG - Washington DC - North District
        </p>
      </section>
      <section className="container mx-auto py-15">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
          {congregations.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <CardHeader className="space-y-2">
                {/* Logo placeholder */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                  {item.logo || "PCG"}
                </div>

                <h2 className="text-lg font-semibold leading-tight">
                  {item.name}
                </h2>

                <p className="text-sm text-muted-foreground font-bold"> <span className='text-red-400 text-sm'>Minister-In-Charge</span> {item.minister}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Status */}
                {item.note && (
                  <p className="text-xs text-orange-500 font-medium">
                    {item.note}
                  </p>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between">
                  {item.website ? (
                    <a href={item.link} target='_blank'>
                      <Button size="sm" className="w-full bg-red-800">
                        Visit Website
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" variant="secondary" className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Congregations
