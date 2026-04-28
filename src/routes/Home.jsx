import Hero from '../components/Hero'
import SubHero from '../components/SubHero'
import VisionCard from '../components/VisionCard'
import AboutSide from '../components/AboutSide'
import NewsSection from '../components/NewsSection'
import MobileAppAd from '../components/MobileAppAd'
import SEO from '../components/ui/SEO'

const Home = () => {
  return (
    <div>
      <SEO 
        title="Home" 
        description="Welcome to the Presbyterian Church of Ghana – Washington DC North District. A united body of congregations committed to Christ-centered worship and community impact."
      />
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
