import React from 'react'
import AboutUsComponent from '../home_components/AboutUsComponent'
import HeroSection from '../home_components/HeroSection'
import OurRobotsComponent from '../home_components/OurRobotsComponent'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsComponent />
      <OurRobotsComponent />
    </div>
  )
}

export default Home