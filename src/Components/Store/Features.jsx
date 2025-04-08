import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaCreditCard, FaHeadset, FaStar, FaTag, FaTruck, FaUndo } from 'react-icons/fa';

const Features = () => {

    const settings = {
      infinite: false,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      responsive: [
        {
            breakpoint: 1600,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const items = [
        {
            name: 'Fast Delivery',
            icon: <FaTruck />,
            heading: 'Lightning Speed Shipping',
            detail: 'Get your products delivered within 24 hours in selected locations.',
            colour: 'text-green-600'
        },
        {
            name: 'Secure Payments',
            icon: <FaCreditCard />,
            heading: '100% Safe Transactions',
            detail: 'We use end-to-end encryption to keep your payments safe.',
            colour: 'text-yellow-600'
        },
        {
            name: '24/7 Customer Support',
            icon: <FaHeadset />,
            heading: 'Always Here for You',
            detail: 'Our support team is available 24/7 to assist you with any queries.',
            colour: 'text-blue-600'
        },
        {
            name: 'Easy Returns',
            icon: <FaUndo />,
            heading: 'Hassle-Free Returns',
            detail: 'Return or exchange your products within 30 days with no extra cost.',
            colour: 'text-red-600'
        },
        {
            name: 'Best Quality',
            icon: <FaStar />,
            heading: 'Top-Notch Products',
            detail: 'We ensure premium quality products with verified customer reviews.',
            colour: 'text-purple-600'
        },
        {
            name: 'Exclusive Deals',
            icon: <FaTag />,
            heading: 'Unbeatable Discounts',
            detail: 'Get access to exclusive offers and discounts on every purchase.',
            colour: 'text-orange-600'
        }
    ];
    
  
    return (
      <div className='w-full mt-[50px] flex flex-col items-end mb-10'>
        <div className='w-[93%] flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-2xl font-roboto font-semibold'>
            The Extreme difference.<span className='text-gray-500'> Even more reasons to shop with us.</span>
          </h1>
        </div>
        <div className='w-full sm:w-[94%] h-full mx-auto overflow-hidden p-2'>
          <Slider {...settings}>
            {items.map((item, index) => (
                <div key={index} className='sm:pl-2 h-[220px] md:h-[280px] lg:h-[300px]'>
                    <div className='md:w-[220px] lg:w-[280px] sm:h-[170px] md:h-[230px] lg:h-[250px] bg-white mt-7 rounded-2xl shadow-md cursor-pointer hover:shadow-lg hover:scale-[102%] duration-300'>
                        <div className='w-full h-full p-5 md:p-7'>
                            <p className={`text-3xl lg:text-4xl mb-2 md:mb-3 ${item.colour}`}>{item.icon}</p>
                            <h1 className='text-xl lg:text-2xl font-semibold font-roboto'>{item.name}</h1>
                            <p className=' text-transparent bg-clip-text bg-gradient-to-r lg:text-lg from-red-400 to-blue-600 font-roboto mb-1 md:mb-2'>{item.heading}</p>
                            <p className='text-sm font-roboto'>{item.detail}</p>
                        </div>
                    </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
  
  export default Features;