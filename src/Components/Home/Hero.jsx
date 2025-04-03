import React from 'react'
import pic from '../../Assets/mac.jpg'

const Hero = () => {
  return (
    <div className='pt-[50px] w-full h-full'>
        <div className='w-full h-[500px] md:h-[700px] relative'>
            <img src={pic} className='w-full h-full object-cover' alt="" />
            <div className='w-full h-full absolute inset-0 flex flex-col justify-end pb-10 md:pb-0 md:justify-normal items-center'>
                <h1 className='md:mt-10 text-4xl md:text-6xl text-gray-200 font-bold font-karla text-center'>Mac Book Pro</h1>
                <p className='mt-2 text-[16px] md:text-xl text-gray-200 font-karla'>Lorem ipsum dolor sit amet.</p>
                <div className='flex gap-2 items-center mt-3'>
                    <button className='px-6 py-2 text-white bg-blue-500/90 rounded-full hover:bg-blue-500 font-karla'>Learn More</button>
                    <button className='px-6 py-2 text-blue-500 hover:text-white bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 font-karla'>Buy</button>
                </div>
            </div>
        </div>
        <div className='w-full h-[500px] md:h-[700px] relative mt-2'>
            <img src="https://www.apple.com/v/iphone-16-pro/f/images/overview/welcome/hero_endframe__b3cjfkquc2s2_xlarge.jpg" className='hidden md:block w-full h-full object-cover' alt="" />
            <img src="https://www.igeeksblog.com/wp-content/uploads/2024/09/iPhone-16-and-16-Plus-Ultramarine-Wallpaper.jpg" className='md:hidden w-full h-full object-cover' alt="" />
            <div className='w-full h-full absolute inset-0 flex flex-col items-center'>
                <h1 className='mt-10 text-4xl md:text-6xl text-gray-200 font-bold font-karla text-center'>iPhone 16 Pro</h1>
                <p className='mt-2 text-[16px] md:text-xl text-gray-200 font-karla'>Lorem ipsum dolor sit amet.</p>
                <div className='flex gap-2 items-center mt-3'>
                    <button className='px-6 py-2 text-black bg-gray-200 rounded-full hover:bg-white font-karla'>Learn More</button>
                    <button className='px-6 py-2 text-white hover:text-black bg-transparent border border-white rounded-full hover:bg-white font-karla'>Buy</button>
                </div>
            </div>
        </div>
        <div className='w-full h-[500px] md:h-[700px] relative mt-2'>
            <img src="https://wallpapersok.com/images/hd/asus-rog-4k-gaming-laptop-and-lasers-sli0lqh93yaiyqcn.jpg" className='w-full h-full object-cover' alt="" />
            <div className='w-full h-full absolute inset-0 flex flex-col justify-end pb-10 md:pb-0 md:justify-normal items-center'>
                <h1 className='md:mt-10 text-4xl md:text-6xl text-gray-200 font-bold font-karla text-center'>Asus ROG Strix</h1>
                <p className='mt-2 text-[16px] md:text-xl text-gray-200 font-karla'>Lorem ipsum dolor sit amet.</p>
                <div className='flex gap-2 items-center mt-3'>
                    <button className='px-6 py-2 text-white bg-blue-500/90 rounded-full hover:bg-blue-500 font-karla'>Learn More</button>
                    <button className='px-6 py-2 text-blue-500 hover:text-white bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 font-karla'>Buy</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero