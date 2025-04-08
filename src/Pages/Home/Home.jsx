import React, { useEffect } from 'react'
import Hero from '../../Components/Home/Hero'
import Grid from '../../Components/Home/Grid'
import Scroller from '../../Components/Home/Scroller'
import CTA from '../../Components/Home/CTA'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Grid />
      <CTA />
      <Scroller />
    </div>
  )
}

export default Home