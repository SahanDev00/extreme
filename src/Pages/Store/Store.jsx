import React from 'react'
import Index from '../../Components/Store/Index'
import Latest from '../../Components/Store/Latest'
import Featured from '../../Components/Store/Featured'
import Features from '../../Components/Store/Features'
import Phones from '../../Components/Store/Phones'
import Accessories from '../../Components/Store/Accessories'

const Store = () => {
  return (
    <div className='bg-gray-50'>
        <Index />
        <Latest />
        <Featured />
        <Features />
        <Phones />
        <Accessories />
    </div>
  )
}

export default Store