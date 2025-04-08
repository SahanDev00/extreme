import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsCartPlus } from 'react-icons/bs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../Cart/CartContext';

const Index = () => {

  const [items, setItems] = useState([]);
  const [productImages, setProductImages] = useState({}); // Store images by item IDs
  const [brandName, setBrandName] = useState(''); // Store images by item IDs
  const [subCategories, setSubCategories] = useState([]); // Store images by item IDs
  const { addToCart } = useCart(); 

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

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0016`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const sortedData = response.data.data.sort((a, b) =>
        a.stockAvailable === 'A' ? -1 : b.stockAvailable === 'A' ? 1 : 0
      );
      setItems(sortedData);
      
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSubProducts = async (SubID) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0016&CategorySubID=${SubID}`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const sortedData = response.data.data.sort((a, b) =>
        a.stockAvailable === 'A' ? -1 : b.stockAvailable === 'A' ? 1 : 0
      );
      setItems(sortedData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/CategorySub?CategoryMainID=CTM_0016`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })
      setSubCategories(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBrandProducts = async (BrandID) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0016&BrandID=${BrandID}`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })
      fetchBrandName(BrandID);
      const sortedData = response.data.data.sort((a, b) =>
        a.stockAvailable === 'A' ? -1 : b.stockAvailable === 'A' ? 1 : 0
      );
      setItems(sortedData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBrandName = async (BrandID) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Brand/${BrandID}`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })
      setBrandName(response.data.data.brandName);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchSubCategories();
  }, [])

  const handleAddToCart = (item) => {
    addToCart({
      ...item,
      quantity: 1,
    });
    toast.success(item.itemName + ' Added To The Cart!', {
      toastId: 1,
      position: "top-right",
      autoClose: 2000,
    });
  };
  

  const brands = [
    { 
      name: 'ACER', 
      img: 'https://static.vecteezy.com/system/resources/thumbnails/019/766/419/small/acer-logo-acer-icon-transparent-free-png.png', 
      BrandID: 'BRD_007' 
    },
    { 
      name: 'ASUS', 
      img: 'https://static.cdnlogo.com/logos/a/92/asus.png', 
      BrandID: 'BRD003' 
    },
    { 
      name: 'DELL', 
      img: 'https://www.pngall.com/wp-content/uploads/13/Dell-Logo.png', 
      BrandID: 'BRD_008' 
    },
    { 
      name: 'HP', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJUAqZX7gBRJsMprvMyUBfjD6jaL34zasEA&s', 
      BrandID: 'BRD014' 
    },
    { 
      name: 'LENOVO', 
      img: 'https://static.vecteezy.com/system/resources/previews/020/927/282/non_2x/lenovo-logo-brand-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg', 
      BrandID: 'BRD_009' 
    },
    { 
      name: 'MSI', 
      img: 'https://logowik.com/content/uploads/images/msi-new-20223710.jpg', 
      BrandID: 'BRD002' 
    },
    { 
      name: 'TOSHIBA', 
      img: 'https://www.vhv.rs/dpng/d/411-4118000_toshiba-logo-black-and-white-hd-png-download.png', 
      BrandID: 'BRD_010' 
    }
  ];


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
                    Computers. <span className='text-gray-500'>Build Your Own Beast.</span>
                </h1>
            </div>

            <div className='w-[85%] mx-auto flex flex-col justify-center'>
              <h1 className='text-xl sm:text-2xl font-roboto font-semibold md:w-[700px]'>
                    Filter By <span className='text-gray-500'>Brands</span>
                </h1>
            </div>

            {/* 👇 Slider on mobile screens only */}
            <div className='w-[90%] 2xl:w-[85%] mx-auto block xl:hidden'>
                <Slider {...settings}>
                    {brands.map((brand, index) => (
                        <div onClick={() => fetchBrandProducts(brand.BrandID)} key={index}>
                            <div className='flex flex-col items-center justify-center p-2 cursor-pointer'>
                                <img src={brand.img} className='w-[80px] h-[80px] object-contain mx-auto' alt={brand.name} />
                                <p className='mt-2 font-roboto text-sm text-center'>{brand.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* 👇 Grid on large screens */}
            <div className='w-[90%] 2xl:w-[85%] h-full mx-auto grid-cols-7 gap-2 hidden xl:grid'>
                {brands.map((brand, index) => (
                    <div onClick={() => fetchBrandProducts(brand.BrandID)} key={index}>
                        <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer group'>
                            <img src={brand.img} className='w-[100px] mx-auto h-[100px] object-contain' alt={brand.name} />
                            <p className='mt-2 font-roboto text-sm group-hover:underline'>{brand.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='w-[90%] 2xl:w-[85%] mx-auto my-10 md:flex items-center justify-between'>
              {brandName ? (
                <h1 className='text-3xl font-roboto font-semibold'><span className='text-gray-600'>{brandName}</span> Computers</h1>
                ) : (
                <h1 className='text-3xl font-roboto font-semibold'><span className='text-gray-600'>All</span> Computers</h1>
              )}
              <select onChange={(e) => fetchSubProducts(e.target.value)} className='w-[200px] mt-3 md:mt-0 md:py-2 border font-karla p-1 md:px-2 cursor-pointer outline-none' name="subCats" id="subCats">
                <option value="">No Filters</option>
                {subCategories.map((sub) => (
                  <option key={sub.categorySubID} value={sub.categorySubID}>{sub.categorySubName}</option>
                ))}
              </select>
            </div>

            <div className='w-[85%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-10'>
              {items.length > 0 ? 
                items.map((item) => (
                  <div className='w-full mx-auto h-[450px] flex flex-col items-center justify-center rounded-2xl bg-white shadow hover:shadow-lg hover:scale-[102%] cursor-pointer duration-300'>
                    <img src={productImages[item.itemID] || 'https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko='} className='h-[250px] mx-auto object-contain p-2 xl:p-3' alt="" />
                    <h1 className='text-2xl font-karla font-semibold mb-1 text-center w-[95%] mx-auto line-clamp-2' title={item.itemName}>{item.itemName}</h1>
                    <p className='font-semibold mt-1 font-karla text-lg text-blue-600'>
                      Rs. {Number(item.retailPrice).toLocaleString('en-LK')}
                    </p>
                    {item.stockAvailable === 'A' ? (
                      <div className='flex items-center h-[50px] justify-center gap-5 mt-2'>
                          <Link to={`/items/${item.itemID}`}>
                            <button className='px-4 lg:px-6 py-1 lg:py-2 border rounded-full bg-blue-500 text-white hover:bg-blue-500/90 font-karla'>Learn More</button>
                          </Link>
                        <BsCartPlus
                            onClick={(e) => {
                              e.preventDefault(); // Prevents navigation
                              e.stopPropagation(); // Stops event bubbling to the Link
                              handleAddToCart(item);
                            }}
                              className='text-blue-500 text-2xl hover:text-blue-700' title='add to cart' />
                      </div>
                    ) : (
                      <div className='flex items-center h-[50px] justify-center gap-5 mt-2'>
                        <Link to={`/items/${item.itemID}`}>
                          <button className='px-4 lg:px-6 py-1 lg:py-2 border rounded-full bg-blue-500 text-white hover:bg-blue-500/90 font-karla'>Learn More</button>
                        </Link>
                        <button className='px-4 lg:px-6 py-1 lg:py-2 rounded-full text-red-500 font-karla cursor-not-allowed'>Out of Stock</button>
                      </div>
                    )}
                  </div>
                )) : (
                  <p className='text-gray-700 font-karla'>No Items Available</p>
                )
            }
            </div>
    </div>
  )
}

export default Index