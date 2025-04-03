import React from 'react'

const Grid = () => {
  return (
    <div className='md:p-2 mt-2 md:mt-0 w-full'>
        <div className='w-full grid sm:grid-cols-2 gap-2'>
            <div className='w-full h-[500px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[550px] relative'>
                <img src="https://images.macrumors.com/t/g6_2NvtWz-NywIPH65PFoJvveSU=/1600x/article-new/2021/09/airpods-pro-black-background.jpg" className='w-full h-full object-cover hidden md:block' alt="" />
                <img src="https://www.apple.com/v/airpods/x/images/overview/pro_endframe__e2wscfy18pme_large.jpg" className='w-full h-full object-cover md:hidden' alt="" />
                <div className='w-full h-full absolute inset-0 flex flex-col justify-end pb-10 items-center'>
                    <h1 className='md:mt-10 text-4xl md:text-6xl text-gray-200 font-bold font-karla text-center'>Airpods Pro</h1>
                    <p className='mt-2 text-[16px] md:text-xl text-gray-200 font-karla'>Lorem ipsum dolor sit amet.</p>
                    <div className='flex gap-2 items-center mt-3'>
                        <button className='px-6 py-2 text-white bg-blue-500/90 rounded-full hover:bg-blue-500 font-karla'>Learn More</button>
                        <button className='px-6 py-2 text-blue-500 hover:text-white bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 font-karla'>Buy</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-[500px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[550px] relative'>
                <img src="https://pixelz.cc/wp-content/uploads/2024/01/geforce-rtx-4090-uhd-4k-wallpaper.jpg" className='w-full h-full object-cover hidden md:block' alt="" />
                <img src="https://cdn.wccftech.com/wp-content/uploads/2022/04/geforce-rtx-3090-ti-product-gallery-full-screen-3840-1-scaled.jpg" className='w-full h-full object-cover md:hidden' alt="" />
                <div className='w-full h-full absolute inset-0 flex flex-col pb-10 items-center'>
                    <h1 className='mt-10 text-4xl md:text-6xl text-gray-200 font-bold font-karla text-center'>RTX 4090 GPU</h1>
                    <p className='mt-2 text-[16px] md:text-xl text-gray-200 font-karla'>Lorem ipsum dolor sit amet.</p>
                    <div className='flex gap-2 items-center mt-3'>
                        <button className='px-6 py-2 text-black bg-gray-200 rounded-full hover:bg-white font-karla'>Learn More</button>
                        <button className='px-6 py-2 text-white hover:text-black bg-transparent border border-white rounded-full hover:bg-white font-karla'>Buy</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-[500px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[550px] relative'>
                <img src="https://wallpapers.com/images/hd/gaming-headsets-4256-x-2832-wallpaper-fxb2sunfezka0mdk.jpg" className='w-full h-full object-cover' alt="" />
                <div className='w-full h-full absolute inset-0 flex flex-col pb-10 items-center'>
                    <h1 className='mt-10 text-4xl md:text-6xl text-gray-200 font-bold font-karla text-center'>Gaming Headsets</h1>
                    <p className='mt-2 text-[16px] md:text-xl text-gray-200 font-karla'>Lorem ipsum dolor sit amet.</p>
                    <div className='flex gap-2 items-center mt-3'>
                        <button className='px-6 py-2 text-black bg-gray-200 rounded-full hover:bg-white font-karla'>Learn More</button>
                        <button className='px-6 py-2 text-white hover:text-black bg-transparent border border-white rounded-full hover:bg-white font-karla'>Buy</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-[500px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[550px] relative'>
                <img src="https://images.unsplash.com/photo-1614588359808-707e203c2d3c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDRrJTIwY2FtZXJhfGVufDB8fDB8fHww" className='w-full h-full object-cover' alt="" />
                <div className='w-full h-full absolute inset-0 flex flex-col justify-end pb-10 items-center'>
                    <h1 className='md:mt-10 text-4xl md:text-6xl text-gray-200 font-bold font-karla text-center'>Nikon Camera</h1>
                    <p className='mt-2 text-[16px] md:text-xl text-gray-200 font-karla'>Lorem ipsum dolor sit amet.</p>
                    <div className='flex gap-2 items-center mt-3'>
                        <button className='px-6 py-2 text-white bg-blue-500/90 rounded-full hover:bg-blue-500 font-karla'>Learn More</button>
                        <button className='px-6 py-2 text-blue-500 hover:text-white bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 font-karla'>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid