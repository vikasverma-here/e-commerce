import React from 'react'
import Hero from '../conponent/Hero'
import LatestCollection from '../conponent/LatestCollection'
import BestSeller from '../conponent/BestSeller'
import OurPolicy from '../conponent/OurPolicy'
import NewsletterBox from '../conponent/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
