import React, { useEffect, useState } from 'react'
import logo from '../../Assets/logo-mini.png'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useCart } from '../Cart/CartContext'

const Navbar = () => {

  const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');
  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [isBag, setIsBag] = useState(false);
  const location = useLocation();
  const [macItems ,setMacItems] = useState([]);
  const [iphoneItems ,setIphoneItems] = useState([]);
  const [laptopItems ,setLaptopItems] = useState([]);
  const [computerItems ,setComputerItems] = useState([]);
  const [monitorItems ,setMonitorItems] = useState([]);
  const [keyboardMoseItems ,setKeyboardMouseItems] = useState([]);
  const [accessoriesItems ,setAccessoriesItems] = useState([]);
  const [casingItems ,setCasingItems] = useState([]);
  const Navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();

  useEffect(() => {
    const fetchMacItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0015`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const rawData = response?.data?.data;

      if (!Array.isArray(rawData)) {
        return; // or set fallback state
      }
      
      const itemsData = rawData.slice(0, 6).map(item => ({
        itemName: item.itemName,
        Link: `/items/${item.itemID}`
      }));

      setMacItems(itemsData);
    }
    fetchMacItems();
  }, []);

  useEffect(() => {
    const fetchIphoneItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0014`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const rawData = response?.data?.data;

      if (!Array.isArray(rawData)) {
        return; // or set fallback state
      }
      
      const itemsData = rawData.slice(0, 6).map(item => ({
        itemName: item.itemName,
        Link: `/items/${item.itemID}`
      }));      

      setIphoneItems(itemsData);
    }
    fetchIphoneItems();
  }, []);

  useEffect(() => {
    const fetchLaptopItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0021`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const rawData = response?.data?.data;

      if (!Array.isArray(rawData)) {
        return; // or set fallback state
      }
      
      const itemsData = rawData.slice(0, 6).map(item => ({
        itemName: item.itemName,
        Link: `/items/${item.itemID}`
      }));

      setLaptopItems(itemsData);
    }
    fetchLaptopItems();
  }, []);

  useEffect(() => {
    const fetchComputerItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0016`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const rawData = response?.data?.data;

      if (!Array.isArray(rawData)) {
        return; // or set fallback state
      }
      
      const itemsData = rawData.slice(0, 6).map(item => ({
        itemName: item.itemName,
        Link: `/items/${item.itemID}`
      }));

      setComputerItems(itemsData);
    }
    fetchComputerItems();
  }, []);

  useEffect(() => {
    const fetchMonitorItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0017`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const rawData = response?.data?.data;

      if (!Array.isArray(rawData)) {
        return; // or set fallback state
      }
      
      const itemsData = rawData.slice(0, 6).map(item => ({
        itemName: item.itemName,
        Link: `/items/${item.itemID}`
      }));

      setMonitorItems(itemsData);
    }
    fetchMonitorItems();
  }, []);

  useEffect(() => {
    const fetchKeyboardMouseItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0018`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const rawData = response?.data?.data;

      if (!Array.isArray(rawData)) {
        return; // or set fallback state
      }
      
      const itemsData = rawData.slice(0, 6).map(item => ({
        itemName: item.itemName,
        Link: `/items/${item.itemID}`
      }));

      setKeyboardMouseItems(itemsData);
    }
    fetchKeyboardMouseItems();
  }, []);

  useEffect(() => {
    const fetchAccessoriesItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0019`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const rawData = response?.data?.data;

      if (!Array.isArray(rawData)) {
        return; // or set fallback state
      }
      
      const itemsData = rawData.slice(0, 6).map(item => ({
        itemName: item.itemName,
        Link: `/items/${item.itemID}`
      }));

      setAccessoriesItems(itemsData);
    }
    fetchAccessoriesItems();
  }, []);

  useEffect(() => {
    const fetchCasingItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?CategoryMainID=CTM_0020`, {
        headers: {
          'APIKey' : process.env.REACT_APP_API_KEY
        }
      })

      const rawData = response?.data?.data;

      if (!Array.isArray(rawData)) {
        return; // or set fallback state
      }
      
      const itemsData = rawData.slice(0, 6).map(item => ({
        itemName: item.itemName,
        Link: `/items/${item.itemID}`
      }));

      setCasingItems(itemsData);
    }
    fetchCasingItems();
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleNavbar = () => {
    setIsNavbar(!isNavbar);
    setIsSearchBar(false);
    setIsBag(false)
  }

  const toggleSearchBar = () => {
    setIsSearchBar(!isSearchBar);
    setIsBag(false);
  }

  const toggleBag = () => {
    setIsBag(!isBag);
    setIsSearchBar(false);
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
        Navigate(`/search/${searchQuery.trim()}`);
        setSearchQuery('')
        setIsSearchBar(false);
    }
};

  const navItems = [
    {
      name: 'Store',
      Heading: 'Shop',
      subHeading: 'All Items',
      Link: '/store',
      items: [
        {
          itemName: 'Mac',
          Link: '/mac'
        },
        {
          itemName: 'iPhones',
          Link: '/iphones'
        },
        {
          itemName: 'Laptops',
          Link: '/laptops'
        },
        {
          itemName: 'Computers',
          Link: '/computers'
        },
        {
          itemName: 'Monitors',
          Link: '/monitors'
        },
        {
          itemName: 'Keyboards / Mouse',
          Link: '/keyboards-mouse'
        }
      ]
    },{
      name: 'Mac',
      Heading: 'Eplore Mac',
      subHeading: 'Explore All Mac',
      Link: '/mac',
      items: [...macItems]
    },
    {
      name: 'iPhones',
      Heading: 'Explore iPhones',
      subHeading: 'Explore All iPhones',
      Link: '/iphones',
      items: [...iphoneItems]
    },
    {
      name: 'Laptops',
      Heading: 'Explore Laptops',
      subHeading: 'Explore All Laptops',
      Link: '/laptops',
      items: [...laptopItems]
    },
    {
      name: 'Computers',
      Heading: 'Explore Computers',
      subHeading: 'Explore All Computers',
      Link: '/computers',
      items: [...computerItems]
    },
    {
      name: 'Monitors',
      Heading: 'Explore Monitors',
      subHeading: 'Explore All Monitors',
      Link: '/monitors',
      items: [...monitorItems]
    },
    {
      name: 'Keyboards / Mouse',
      Heading: 'Explore Keyboards / Mouse',
      subHeading: 'Explore All Keyboards / Mouse',
      Link: '/keyboards-mouse',
      items: [...keyboardMoseItems]
    },
    {
      name: 'Accessories',
      Heading: 'Explore Accessories',
      subHeading: 'Explore All Accessories',
      Link: '/accessories',
      items: [...accessoriesItems]
    },
    {
      name: 'Casings',
      Heading: 'Explore Casings',
      subHeading: 'Explore All Casings',
      Link: '/casings',
      items: [...casingItems]
    },
    {
      name: 'Support',
      Heading: 'Explore Support',
      subHeading: '',
      Link: '/contact',
      items: [
        {
          itemName: 'Contact Us',
          Link: '/contact'
        },
        {
          itemName: 'About Us',
          Link: '/about'
        }
      ]
    }
  ]

  return (
    <div className={`w-full h-[50px] duration-500 backdrop-blur-sm fixed z-50 ${isActive('/') ? 'bg-stone-900/90 hover:bg-stone-900' : 'bg-gray-50'}`}>
      <div className='w-[96%] md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] mx-auto h-full flex justify-between md:justify-evenly items-center'>
        <Link to='/' className='h-full'>
          <img src={logo} alt="" className='h-full py-2'  />
        </Link>

        {navItems.map((nav, index) => (
          <div key={index} className='group h-full flex items-center'>
            <Link to={nav.Link}>
              <p className={`hidden md:block text-xs font-overpass font-light cursor-pointer p-2 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-black hover:text-gray-800'}`}>{nav.name}</p>
            </Link>
            <div className={`w-screen left-0 top-[50px] h-[0px] absolute group-hover:h-[400px] duration-500 overflow-hidden ${isActive('/') ? 'bg-stone-900' : 'bg-gray-50 shadow-lg'}`}>
                <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                  <div className='flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                      <h1 className={`font-overpass text-sm ${isActive('/') ? 'text-gray-400' : 'text-gray-600'}`}>{nav.Heading}</h1>
                      {nav.subHeading === 'All Items' ? (
                        <Link to='all-products'>
                          <p className={`text-3xl font-karla font-semibold mb-1 cursor-pointer ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>{nav.subHeading}</p>
                        </Link>
                      ) : (
                        <p className={`text-3xl font-karla font-semibold mb-1 ${isActive('/') ? 'text-gray-200' : 'text-gray-600'}`}>{nav.subHeading}</p>
                      )}
                      {nav.items.map((item, index) => (
                        <Link to={item.Link}>
                          <p className={`text-3xl font-karla font-semibold cursor-pointer mb-1 line-clamp-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>{item.itemName}</p>
                        </Link>
                      ))}
                  </div>
                </div>
            </div>
          </div>
        ))}

        <FaSearch onClick={() => toggleSearchBar()} className={`hidden md:block cursor-pointer size-4 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
          <div className='relative'> 
            <MdOutlineShoppingBag onClick={() => toggleBag()} className={`hidden md:block cursor-pointer size-5 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
            {getTotalItems() > 0 && (
                <p className='absolute -top-2 -right-4 bg-gray-600 text-white rounded-full px-1 text-xs hidden md:block'>{getTotalItems()}</p>
            )}
          </div>

        <div className='flex gap-6 justify-evenly items-center md:hidden relative'>
          <FaSearch onClick={() => toggleSearchBar()} className={`cursor-pointer size-4 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
          <div className='relative'>
            <MdOutlineShoppingBag onClick={() => toggleBag()} className={`cursor-pointer size-5 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
            {getTotalItems() > 0 && (
                <p className='absolute -top-2 -right-4 bg-gray-600 text-white rounded-full px-1 text-xs md:hidden '>{getTotalItems()}</p>
            )}
          </div>
          <HiOutlineMenuAlt4 onClick={() => toggleNavbar()} className={`cursor-pointer size-6 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}/>
        </div>
      </div>

      {/* searchbar */}
      <div className={`w-screen left-0 top-0 md:top-[50px] absolute overflow-hidden duration-300 ${isActive('/') ? 'bg-stone-900' : 'bg-gray-50 shadow-lg'} ${!isSearchBar ? 'h-[0px] opacity-0' : 'h-screen md:h-[300px] opacity-100'}`}>
          <IoClose onClick={() => toggleSearchBar()} className={`md:hidden cursor-pointer size-6 fixed top-3 right-3 duration-300 z-50 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-800'} ${isBag && 'hidden'} ${isSearchBar ? 'opacity-100 ' : 'opacity-0'}`} />
          <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto p-12 sm:p-14'>
            <div className='flex flex-col md:justify-center duration-1000 font-karla'>
              <div className='flex items-center h-[70px] gap-4'>
                <FaSearch className={`size-6 ${isActive('/') ? 'text-gray-200' : 'text-gray-500'}`} />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
                  type="text" placeholder='Search on Extreme...' className={`bg-transparent p-2 w-full md:w-[600px] outline-none text-lg ${isActive('/') ? 'text-gray-200' : 'text-gray-500'}`} />
              </div>
              <div className=' flex flex-col justify-center mt-5 duration-1000'>
                  <h1 className={`font-overpass text-sm mb-2 ${isActive('/') ? 'text-gray-400' : 'text-gray-600'}`}>Quick Links</h1>
                  <Link to='/laptops' onClick={() => setIsSearchBar(false)}>
                    <p className={`text-xl font-karla font-semibold cursor-pointer mb-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>Laptops</p>
                  </Link>
                  <Link to='/computers' onClick={() => setIsSearchBar(false)}>
                    <p className={`text-xl font-karla font-semibold cursor-pointer mb-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>Computers</p>
                  </Link>
                  <Link to='/monitors' onClick={() => setIsSearchBar(false)}>
                    <p className={`text-xl font-karla font-semibold cursor-pointer mb-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>Monitors</p>
                  </Link>
              </div>
            </div>
          </div>
      </div>

      {/* Bag */}
      <div className={`w-screen left-0 top-0 md:top-[50px] absolute overflow-hidden duration-300 ${isActive('/') ? 'bg-stone-900' : 'bg-gray-50 shadow-lg'} ${!isBag ? 'h-[0px] opacity-0' : 'h-screen md:h-[300px] opacity-100'}`}>
        <IoClose onClick={() => toggleBag()} className={`md:hidden cursor-pointer size-6 fixed top-3 right-3 duration-300 z-50 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-800'} ${isBag ? 'opacity-100 ' : 'opacity-0'}`} />
        <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
          <div className='flex flex-col md:justify-center duration-1000 font-karla p-12 sm:p-14'>
            {!customerId && (
              <div>
                  <p className={`text-3xl font-karla font-semibold mb-1 ${isActive('/') ? 'text-gray-300' : 'text-gray-500'}`}>Your Bag Is Empty</p>
                  <p className={`text-xs font-karla font-semibold mb-1 ${isActive('/') ? 'text-gray-200' : 'text-gray-500'}`}><a href="/sign-in" className={` underline cursor-pointer ${isActive('/') ? 'text-blue-300' : 'text-blue-500'}`}>Sign in</a> to see your orders</p>
              </div>     
            )}
            <div className=' flex flex-col justify-center mt-5 duration-1000'>
                <h1 className={`font-overpass text-sm ${isActive('/') ? 'text-gray-400' : 'text-gray-600'}`}>My Profile</h1>
                {customerId && (
                  <div>
                    <Link to='/account' onClick={() => setIsBag(false)}>
                      <p className={`text-xl font-karla font-semibold cursor-pointer mb-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-600'}`}>Account</p>
                    </Link>
                    <Link to='orders' onClick={() => setIsBag(false)}>
                      <p className={`text-xl font-karla font-semibold cursor-pointer mb-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-600'}`}>Orders</p>
                    </Link>
                  </div>
                )}
                <Link to='cart' onClick={() => setIsBag(false)}>
                  <p className={`text-xl font-karla font-semibold cursor-pointer mb-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-600'}`}>Cart</p>
                </Link>
                {!customerId && (
                  <div>
                    <Link to='login' onClick={() => setIsBag(false)}>
                      <p className={`text-xl font-karla font-semibold cursor-pointer mb-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-600'}`}>Login</p>
                    </Link>
                    <Link to='sign-in' onClick={() => setIsBag(false)}>
                      <p className={`text-xl font-karla font-semibold cursor-pointer mb-1 ${isActive('/') ? 'text-gray-200 hover:text-white' : 'text-gray-500 hover:text-gray-600'}`}>Sign In</p>
                    </Link>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* mini nav panel */}
      <div className={`absolute w-screen left-0 top-0 overflow-hidden duration-300 z-50 ${isActive('/') ? 'bg-stone-900' : 'bg-gray-50 shadow-lg'} ${isNavbar ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
        <IoClose onClick={() => toggleNavbar()} className={`text-gray-200 hover:text-white cursor-pointer size-6 fixed top-3 right-3 duration-300 ${isSearchBar && 'hidden'} ${isBag && 'hidden'} ${isNavbar ? 'opacity-100  z-50' : 'opacity-0'}`} /> 
        <div className='h-full w-full p-12 sm:p-14'>
          {navItems.map((nav, index) => (
            <Link onClick={() => setIsNavbar(false)} to={nav.Link}>
              <p className={`text-3xl font-karla font-semibold cursor-pointer mb-3 ${isActive('/') ? 'text-gray-200' : 'text-gray-600'}`}>{nav.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar