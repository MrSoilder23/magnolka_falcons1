import React from 'react'
import AboutUsComponent from '../home_components/AboutUsComponent'
import HeroSection from '../home_components/HeroSection'
import NewsComponent from '../home_components/NewsComponent'
import OurRobotsComponent from '../home_components/OurRobotsComponent'
import SupportUsComponent from '../home_components/SupportUsComponent'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsComponent />
      <OurRobotsComponent />
      <SupportUsComponent />
      <NewsComponent />
    </div>
  )
}

export default Home