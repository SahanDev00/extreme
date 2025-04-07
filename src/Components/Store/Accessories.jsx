import React from 'react'
import pic from '../../Assets/iphone.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Accessories = () => {

    const settings = {
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      responsive: [
        {
            breakpoint: 1025,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
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
            name: 'iPhone 16 Pro',
            image: pic,
            heading: 'Lorem, ipsum dolor.',
            detail: 'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            name: 'iPhone 16 Pro',
            image: pic,
            heading: 'Lorem, ipsum dolor.',
            detail: 'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            name: 'iPhone 16 Pro',
            image: pic,
            heading: 'Lorem, ipsum dolor.',
            detail: 'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            name: 'iPhone 16 Pro',
            image: pic,
            heading: 'Lorem, ipsum dolor.',
            detail: 'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            name: 'iPhone 16 Pro',
            image: pic,
            heading: 'Lorem, ipsum dolor.',
            detail: 'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            name: 'iPhone 16 Pro',
            image: pic,
            heading: 'Lorem, ipsum dolor.',
            detail: 'Lorem ipsum dolor sit amet consectetur.'
        },
    ]
  
    return (
      <div className='w-full mt-[50px] xl:h-[650px] flex flex-col items-end pb-10'>
        <div className='w-[93%] flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-2xl font-roboto font-semibold'>
            Accessories. <span className='text-gray-500'>Essentials that pair perfectly with your favorite devices.</span>
          </h1>
        </div>
        <div className='w-full sm:w-[94%] h-full overflow-hidden p-2'>
          <Slider {...settings}>
            {items.map((item) => (
                <div className='sm:pl-2 h-[550px] sm:h-[500px] md:h-[480px] lg:h-[500px] xl:h-[670px]'>
                    <div className='max-w-[410px] max-h-[520px] mt-7 rounded-2xl shadow-md cursor-pointer bg-white hover:shadow-lg hover:scale-[102%] duration-300'>
                        <div className='p-8'>
                            <h1 className='text-2xl font-semibold font-roboto'>{item.name}</h1>
                            <p className='text-transparent bg-clip-text bg-gradient-to-r text-lg from-red-400 to-blue-600 font-roboto'>{item.heading}</p>
                            <p className='text-sm font-roboto'>{item.detail}</p>
                        </div>
                        <img src={item.image} className='p-3' alt="" />
                    </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
  
  export default Accessories;