import React from 'react'
import Slider from "react-slick";
import computer from '../../Assets/computer.png'
import laptop from '../../Assets/laptop.png'
import gpu from '../../Assets/gpu.png'
import headset from '../../Assets/headset.png'
import keyboardMouse from '../../Assets/keyboard-mouse.png'
import hdd from '../../Assets/harddrive.png'
import woofer from '../../Assets/woofer.png'
import phones from '../../Assets/iphone.png'
import motherboard from '../../Assets/motherboard.png'
import monitor from '../../Assets/monitor.png'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Index = () => {

    const categories = [
        { name: 'Computers', img: computer, link: '/' },
        { name: 'Monitors', img: monitor, link: '/' },
        { name: 'Laptops', img: laptop, link: '/' },
        { name: 'Phones', img: phones, link: '/' },
        { name: 'Headsets', img: headset, link: '/' },
        { name: 'Keyboards / Mouse', img: keyboardMouse, link: '/' },
        { name: 'Motherboards', img: motherboard, link: '/' },
        { name: 'Graphic Cards', img: gpu, link: '/' },
        { name: 'Hard Drives', img: hdd, link: '/' },
        { name: 'Subwoofers', img: woofer, link: '/' }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    return (
        <div className='w-full pt-[50px]'>
            <div className='w-[85%] mx-auto h-[200px] md:h-[300px] flex flex-col justify-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold md:w-[700px]'>
                    Store. <span className='text-gray-500'>The best way to buy the products you love.</span>
                </h1>
            </div>

            {/* 👇 Slider on mobile screens only */}
            <div className='w-[90%] 2xl:w-[85%] mx-auto block xl:hidden'>
                <Slider {...sliderSettings}>
                    {categories.map((cat, index) => (
                        <Link to={cat.link} key={index}>
                            <div className='flex flex-col items-center justify-center p-2 cursor-pointer'>
                                <img src={cat.img} className='w-[80px] h-[80px] object-contain mx-auto' alt={cat.name} />
                                <p className='mt-2 font-roboto text-sm text-center'>{cat.name}</p>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>

            {/* 👇 Grid on large screens */}
            <div className='w-[90%] 2xl:w-[85%] h-full mx-auto grid-cols-10 gap-2 hidden xl:grid'>
                {categories.map((cat, index) => (
                    <Link to={cat.link} key={index}>
                        <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer group'>
                            <img src={cat.img} className='w-[100px] mx-auto h-[100px] object-contain' alt={cat.name} />
                            <p className='mt-2 font-roboto text-sm group-hover:underline'>{cat.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Index
