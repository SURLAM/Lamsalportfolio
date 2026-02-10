import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Highlight from './components/Highlight'
import Marquee from './components/Marquee'
import AdviceSection from './components/AdviceSection'

const page = () => {
  return (
       <div className='bg-linear-to-b from-blue-800/10 via-gray-800/30 to-blue-900/20'>
      <Hero />
      <AdviceSection />
      <Services />
      <Highlight />
      <Marquee />
     
     </div>
  ) 
}

export default page;