import React from 'react'
import Hero from '../../Components/Home/Hero'
import Grid from '../../Components/Home/Grid'
import Scroller from '../../Components/Home/Scroller'
import CTA from '../../Components/Home/CTA'
import Footer from '../../Components/Shared/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Grid />
      <CTA />
      <Scroller />
      <Footer />
    </div>
  )
}

export default Home