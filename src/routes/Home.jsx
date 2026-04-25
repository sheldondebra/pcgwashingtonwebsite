import Hero from '../components/Hero'
import React from 'react'
import SubHero from '../components/SubHero'
import VisionCard from '../components/VisionCard'
import AboutSide from '../components/AboutSide'
import NewsSection from '../components/NewsSection'
import MobileAppAd from '../components/MobileAppAd'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SubHero/>
      <VisionCard/>
      <AboutSide/>
      <NewsSection/>
      <MobileAppAd/>
      <div>
          <img
            src="/assets/aboutchurch.jpg"
            alt=""
            className="md:h-100 w-full   object-cover object-center "
          />
          </div>
          
    </div>
  )
}

export default Home
