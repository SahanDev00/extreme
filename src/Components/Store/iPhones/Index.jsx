import React, { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../Cart/CartContext';

const Index = () => {

  const [items, setItems] = useState([]);
  const [productImages, setProductImages] = useState({}); // Store images by item IDs
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0014&CategorySubID=${SubID}`, {
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/CategorySub?CategoryMainID=CTM_0014`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })
      setSubCategories(response.data.data);
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
  

  return (
    <div className='w-full min-h-screen pt-[50px]'>
            <div className='w-[85%] mx-auto h-[200px] md:h-[200px] flex flex-col justify-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold md:w-[700px]'>
                    iPhones. <span className='text-gray-500'>Best and Secured.</span>
                </h1>
            </div>
            
            <div className='w-[90%] 2xl:w-[85%] mx-auto mb-10 md:flex items-center justify-between'>
              <h1 className='text-3xl font-roboto font-semibold'><span className='text-gray-600'>All</span> iPhones</h1>
              <select onChange={(e) => fetchSubProducts(e.target.value)} className='w-[200px] mt-3 md:mt-0 md:py-2 border font-karla p-1 md:px-2 cursor-pointer outline-none' name="subCats" id="subCats">
                <option value="">No Filters</option>
                {subCategories?.map((sub) => (
                  <option key={sub.categorySubID} value={sub.categorySubID}>{sub.categorySubName}</option>
                ))}
              </select>
            </div>

            <div className='w-[85%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-10'>
              {items.length > 0 ? 
                items.map((item, index) => (
                  <div key={index} className='w-full mx-auto h-[450px] flex flex-col items-center justify-center rounded-2xl bg-white shadow hover:shadow-lg hover:scale-[102%] cursor-pointer duration-300'>
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