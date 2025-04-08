import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';

const Phones = () => {

  const [items, setItems] = useState([]);
  const [productImages, setProductImages] = useState({}); // Store images by item IDs

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0022`, {
          headers: {
            'APIKey' : process.env.REACT_APP_API_KEY
          }
        })
        setItems(response.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, [])

    const fetchImageData = async (itemID) => {
      try {
          const apiKey = process.env.REACT_APP_API_KEY;
          const response = await fetch(`${process.env.REACT_APP_API_URL}/ImageData/${itemID}`, {
            headers: {
                'APIKey': apiKey,
            },
          });
          const data = await response.json();
  
          if (data.success && data.data.length > 0) {
              setProductImages(prevImages => ({
                  ...prevImages,
                  [itemID]: `${process.env.REACT_APP_IMG_URL}/${data.data[0].imageID}.png`
              }));
          }
          } catch (error) {
              console.error('Fetch error:', error);
          }
      };
      useEffect(() => {
          items.forEach(item => {
              fetchImageData(item.itemID);
          });
    },[items])

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
  
    return (
      <div className='w-full mt-[80px] xl:h-[650px] flex flex-col items-end mb-10'>
        <div className='w-[93%] flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-2xl font-roboto font-semibold'>
            Mobile Phones. <span className='text-gray-500'>Take a look at trending phones, right now.</span>
          </h1>
        </div>
        <div className='w-[96%] sm:w-[94%] h-full overflow-hidden p-2 mx-auto'>
          <Slider {...settings}>
            {items.map((item) => (
                <div className='sm:pl-2 h-[550px] sm:h-[500px] md:h-[480px] lg:h-[500px] xl:h-[670px]'>
                    <div className='2xl:w-[410px] mx-auto lg:h-[400px] 2xl:h-[520px] mt-7 rounded-2xl shadow-md bg-white cursor-pointer hover:shadow-lg hover:scale-[102%] duration-300'>
                        <div className='p-8'>
                            <h1 className='text-2xl font-semibold font-roboto line-clamp-2' title={item.itemName}>{item.itemName}</h1>
                            <p className='text-transparent bg-clip-text bg-gradient-to-r text-lg from-red-400 to-blue-600 font-roboto mt-1'>{item.itemDescription || 'No description'}</p>
                        </div>
                        <img src={productImages[item.itemID] || 'https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko='} 
                        className='h-[350px] sm:h-[250px] md:h-[250px] xl:h-[320px] w-full p-4 object-contain' alt="" />
                    </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
  
  export default Phones;