import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import lap from '../../../Assets/laptop.png'
import { BsCartPlus } from 'react-icons/bs';

const Index = () => {

  const brands = [
    { 
      name: 'ACER', 
      img: 'https://static.vecteezy.com/system/resources/thumbnails/019/766/419/small/acer-logo-acer-icon-transparent-free-png.png', 
      link: '/' 
    },
    { 
      name: 'ASUS', 
      img: 'https://static.cdnlogo.com/logos/a/92/asus.png', 
      link: '/' 
    },
    { 
      name: 'DELL', 
      img: 'https://www.pngall.com/wp-content/uploads/13/Dell-Logo.png', 
      link: '/' 
    },
    { 
      name: 'HP', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJUAqZX7gBRJsMprvMyUBfjD6jaL34zasEA&s', 
      link: '/' 
    },
    { 
      name: 'LENOVO', 
      img: 'https://static.vecteezy.com/system/resources/previews/020/927/282/non_2x/lenovo-logo-brand-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg', 
      link: '/' 
    },
    { 
      name: 'MSI', 
      img: 'https://logowik.com/content/uploads/images/msi-new-20223710.jpg', 
      link: '/' 
    },
    { 
      name: 'TOSHIBA', 
      img: 'https://www.vhv.rs/dpng/d/411-4118000_toshiba-logo-black-and-white-hd-png-download.png', 
      link: '/' 
    }
  ];

  const items = [
    {
      name: 'Test Item Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eligendi.',
      price: '101,011',
      pic: lap
    },
    {
      name: 'Test Item Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eligendi.',
      price: '101,011',
      pic: lap
    },
    {
      name: 'Test Item Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eligendi.',
      price: '101,011',
      pic: lap
    },
    {
      name: 'Test Item Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eligendi.',
      price: '101,011',
      pic: lap
    },
    {
      name: 'Test Item Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eligendi.',
      price: '101,011',
      pic: lap
    },
    {
      name: 'Test Item Name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eligendi.',
      price: '101,011',
      pic: lap
    },
  ]

  const settings = {
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
    <div className='w-full min-h-screen pt-[50px]'>
            <div className='w-[85%] mx-auto h-[200px] md:h-[200px] flex flex-col justify-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold md:w-[700px]'>
                    Laptops. <span className='text-gray-500'>The best place to start your laptop journey.</span>
                </h1>
            </div>

            {/* 👇 Slider on mobile screens only */}
            <div className='w-[90%] 2xl:w-[85%] mx-auto block xl:hidden'>
                <Slider {...settings}>
                    {brands.map((brand, index) => (
                        <Link to={brand.link} key={index}>
                            <div className='flex flex-col items-center justify-center p-2 cursor-pointer'>
                                <img src={brand.img} className='w-[80px] h-[80px] object-contain mx-auto' alt={brand.name} />
                                <p className='mt-2 font-roboto text-sm text-center'>{brand.name}</p>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>

            {/* 👇 Grid on large screens */}
            <div className='w-[90%] 2xl:w-[85%] h-full mx-auto grid-cols-7 gap-2 hidden xl:grid'>
                {brands.map((brand, index) => (
                    <Link to={brand.link} key={index}>
                        <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer group'>
                            <img src={brand.img} className='w-[100px] mx-auto h-[100px] object-contain' alt={brand.name} />
                            <p className='mt-2 font-roboto text-sm group-hover:underline'>{brand.name}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='w-[85%] mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-10'>
              {items.map((item) => (
                <div className='w-full mx-auto h-[450px] flex flex-col items-center justify-center rounded-2xl bg-white shadow hover:shadow-lg hover:scale-[102%] cursor-pointer duration-300'>
                  <img src={item.pic} className='h-[250px] mx-auto object-contain p-2 xl:p-3' alt="" />
                  <h1 className='text-2xl font-karla font-semibold mb-1'>{item.name}</h1>
                  <p className='text-center text-sm font-karla w-[97%] mx-auto text-gray-700'>{item.description}</p>
                  <p className='font-semibold mt-1 font-karla text-lg'>Rs. {item.price}</p>
                  <div className='flex items-center h-[50px] justify-center gap-5 mt-2'>
                    <button className='px-6 py-2 border rounded-full bg-blue-500 text-white hover:bg-blue-500/90 font-karla'>Buy Now</button>
                    <BsCartPlus className='text-blue-500 text-2xl hover:text-blue-700' title='add to cart' />
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Index