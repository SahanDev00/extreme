import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs';
import Slider from 'react-slick';

const Index = () => {

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productImages, setProductImages] = useState({}); 
  const [brandName, setBrandName] = useState(''); // Store images by item IDs
  const [subCategories, setSubCategories] = useState([]); 

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
                  [itemID]: `${process.env.REACT_APP_IMG_URL}/${data.data[0].imageID}.jpg`
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item`, {
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

  const fetchCategories = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/CategoryMain`, {
            headers: {
                APIKey: process.env.REACT_APP_API_KEY
            }
        })
        setCategories(response.data.data);
      } catch (err) {
          console.log(err)
      }
  };
  
  const fetchCategoryProducts = async (categoryMainID) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/Item?CategoryMainID=${categoryMainID}`,
            { headers: { APIKey: process.env.REACT_APP_API_KEY } }
        );
        setItems(response.data.data);
      } catch (err) {
          console.log(err);
      }
  };

  const fetchSubCategoryProducts = async (categorySubID) => {
      try {
          // Fetch subcategory products
          const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/Item?CategorySubID=${categorySubID}`,
              { headers: { APIKey: process.env.REACT_APP_API_KEY } }
          );
          setItems(response.data.data);
      } catch (err) {
          console.log(err);
      }
  };

  const fetchBrandProducts = async (BrandID) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?&BrandID=${BrandID}`, {
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

  const fetchSubCategories = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/CategorySub`, {
            headers: {
                APIKey: process.env.REACT_APP_API_KEY
            }
        })
        setSubCategories(response.data.data)
    } catch (err) {
        console.log(err)
    }
};
  
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchSubCategories();
  }, [])

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
                  All Products. <span className='text-gray-500'>From Zero to Hero.</span>
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
                <h1 className='text-3xl font-roboto font-semibold'><span className='text-gray-600'>{brandName}</span> Products</h1>
                ) : (
                <h1 className='text-3xl font-roboto font-semibold'><span className='text-gray-600'>All</span> Products</h1>
              )}
            </div>

            <div className='w-[90%] mx-auto md:flex justify-between pb-10'>
              <div className='w-[90%] mx-auto sm:mx-0 md:w-[250px] lg:w-[300px] xl:w-[250px] mb-10 md:mb-0'>
                  <h1 className='text-gray-700 font-semibold text-lg mb-2'>Categories</h1>
                  <hr />
                  {categories.map((category) => (
                      <div key={category.categoryMainID} className='w-full mt-2 text-lg text-gray-800 font-light'>
                          <div className='flex gap-2'>
                              <p className='font-karla cursor-pointer' onClick={() => {fetchCategoryProducts(category.categoryMainID); setBrandName(category.categoryMainName);}}>{category.categoryMainName}</p>
                          </div>

                          {/* Filter subcategories by the current category */}
                          <ul className='pl-4 mb-2 border-l'>
                              {subCategories
                                  .filter(subCategory => subCategory.categoryMainID === category.categoryMainID)
                                  .map(subCategory => (
                                      <div key={subCategory.categorySubID} className='flex gap-2'>
                                          <p onClick={() => {fetchSubCategoryProducts(subCategory.categorySubID); setBrandName(subCategory.categorySubName);}} className='text-gray-700 text-[16px] cursor-pointer'>{subCategory.categorySubName}</p>
                                      </div>
                                  ))
                              }
                          </ul>
                      </div>
                  ))}
              </div>
            
              <div className='w-[90%] xl:w-[80%] mx-auto grid sm:grid-cols-2 xl:grid-cols-3 gap-5 pb-10'>
                {items.length > 0 ? 
                  items.map((item) => (
                    <div className='w-full mx-auto h-[400px] lg:h-[450px] flex flex-col items-center justify-center rounded-2xl bg-white shadow hover:shadow-lg hover:scale-[102%] cursor-pointer duration-300'>
                      <img src={productImages[item.itemID] || 'https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko='} className='h-[200px] lg:h-[250px] mx-auto object-contain p-2 xl:p-3' alt="" />
                      <h1 className='text-lg lg:text-2xl font-karla font-semibold mb-1 text-center w-[95%] mx-auto line-clamp-2' title={item.itemName}>{item.itemName}</h1>
                      <p className='font-semibold mt-1 font-karla text-[16px] lg:text-lg text-blue-600'>
                        Rs. {Number(item.retailPrice).toLocaleString('en-LK')}
                      </p>
                      {item.stockAvailable === 'A' ? (
                        <div className='flex items-center h-[50px] justify-center gap-5 mt-2'>
                          <button className='px-4 lg:px-6 py-1 lg:py-2 border rounded-full bg-blue-500 text-white hover:bg-blue-500/90 font-karla'>Learn More</button>
                          <BsCartPlus className='text-blue-500 text-2xl hover:text-blue-700' title='add to cart' />
                        </div>
                      ) : (
                        <div className='flex items-center h-[50px] justify-center gap-5 mt-2'>
                          <button className='px-4 lg:px-6 py-1 lg:py-2 border rounded-full text-red-500 border-red-500 font-karla cursor-not-allowed'>Out of Stock</button>
                        </div>
                      )}
                    </div>
                  )) : (
                    <p className='text-gray-700 font-karla'>No Items Available</p>
                  )
              }
              </div>
            </div>
    </div>
  )
}

export default Index