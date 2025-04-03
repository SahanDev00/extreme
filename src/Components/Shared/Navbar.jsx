import React, { useState } from 'react'
import logo from '../../Assets/logo-mini.png'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {

  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [isBag, setIsBag] = useState(false);

  const toggleNavbar = () => {
    setIsNavbar(!isNavbar);
  }

  const toggleSearchBar = () => {
    setIsSearchBar(!isSearchBar);
  }

  const toggleBag = () => {
    setIsBag(!isBag);
  }

  return (
    <div className='w-full h-[50px] bg-stone-900/90 hover:bg-stone-900 duration-500 backdrop-blur-sm fixed z-50'>
      <div className='w-[96%] md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] mx-auto h-full flex justify-between md:justify-evenly items-center'>
        <img src={logo} alt="" className='h-full py-2' />

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Store</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className='flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                    <h1 className='text-gray-400 font-overpass text-sm'>Shop</h1>
                    <p className='text-3xl text-gray-200 font-karla font-semibold mb-1'>Shop The Latest</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Mac</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>iPhones</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Laptops</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Computers</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Monitors</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Keyboards / Mouse</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Mac</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>Explore Mac</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Explore All Mac</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 6</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>iPhones</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>Explore iPhones</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Explore All iPhones</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 6</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Laptops</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>Explore Laptops</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Explore All iPhones</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 6</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Computers</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>Explore Computers</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Explore All Computers</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 6</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Monitors</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>Explore Monitors</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Explore All Monitors</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 6</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Keyboards / Mouse</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>Explore Keyboards / Mouse</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Explore All Keyboards / Mouse</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 6</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Accessories</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>Explore Accessories</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Explore All Accessories</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 6</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Casings</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>Explore Casings</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Explore All Casings</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 6</p>
                </div>
              </div>
          </div>
        </div>

        <div className='group h-full flex items-center'>
          <p className='hidden md:block text-xs font-overpass font-light text-gray-200 hover:text-white cursor-pointer p-2'>Support</p>
          <div className='w-screen left-0 top-[50px] h-[0px] absolute bg-stone-900 group-hover:h-[400px] duration-500 overflow-hidden'>
              <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
                <div className=' flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 duration-1000'>
                    <h1 className='text-gray-400 font-overpass text-sm'>Explore Support</h1>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 4</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 5</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 6</p>
                    <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer'>Test Item 7</p>
                </div>
              </div>
          </div>
        </div>
        <FaSearch onClick={() => toggleSearchBar()} className='hidden md:block text-gray-200 hover:text-white cursor-pointer size-4' />
        <MdOutlineShoppingBag onClick={() => toggleBag()} className='hidden md:block text-gray-200 hover:text-white cursor-pointer size-5' />

        <div className='flex gap-6 justify-evenly items-center md:hidden relative'>
          <FaSearch onClick={() => toggleSearchBar()} className=' text-gray-200 hover:text-white cursor-pointer size-4' />
          <MdOutlineShoppingBag onClick={() => toggleBag()} className=' text-gray-200 hover:text-white cursor-pointer size-5' />
          <HiOutlineMenuAlt4 onClick={() => toggleNavbar()} className='text-gray-200 hover:text-white cursor-pointer size-6'/>
        </div>
      </div>

      {/* searchbar */}
      <div className={`w-screen left-0 top-0 md:top-[50px] absolute bg-stone-900 overflow-hidden duration-300 ${!isSearchBar ? 'h-[0px] opacity-0' : 'h-screen md:h-[300px] opacity-100'}`}>
          <IoClose onClick={() => toggleSearchBar()} className={`text-gray-200 md:hidden hover:text-white cursor-pointer size-6 fixed top-3 right-3 duration-300 z-50 ${isBag && 'hidden'} ${isSearchBar ? 'opacity-100 ' : 'opacity-0'}`} />
          <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto p-12 sm:p-14'>
            <div className='flex flex-col md:justify-center duration-1000 font-karla'>
              <div className='flex items-center h-[70px] gap-4'>
                <FaSearch className='size-6 text-gray-300' />
                <input type="text" placeholder='Search on Extreme...' className='bg-transparent p-2 w-full md:w-[600px] outline-none text-white text-lg' />
              </div>
              <div className=' flex flex-col justify-center mt-5 duration-1000'>
                  <h1 className='text-gray-400 font-overpass text-sm mb-2'>Quick Links</h1>
                  <p className='text-xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 1</p>
                  <p className='text-xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 2</p>
                  <p className='text-xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Test Item 3</p>
              </div>
            </div>
          </div>
      </div>

      {/* Bag */}
      <div className={`w-screen left-0 top-0 md:top-[50px] absolute bg-stone-900 overflow-hidden duration-300 ${!isBag ? 'h-[0px] opacity-0' : 'h-screen md:h-[300px] opacity-100'}`}>
        <IoClose onClick={() => toggleBag()} className={`text-gray-200 md:hidden hover:text-white cursor-pointer size-6 fixed top-3 right-3 duration-300 z-50 ${isBag ? 'opacity-100 ' : 'opacity-0'}`} />
        <div className='md:w-full lg:w-[90%] xl:w-[70%] 2xl:w-[55%] flex h-full mx-auto'>
          <div className='flex flex-col md:justify-center duration-1000 font-karla p-12 sm:p-14'>
            <p className='text-3xl text-gray-300 font-karla font-semibold cursor-pointer mb-1'>Your Bag Is Empty</p>
            <p className='text-xs text-gray-200 font-karla font-semibold cursor-pointer mb-1'><a href="/" className='text-blue-300 underline cursor-pointer'>Sign in</a> to see your orders</p>
            <div className=' flex flex-col justify-center mt-5 duration-1000'>
                <h1 className='text-gray-400 font-overpass text-sm'>My Profile</h1>
                <p className='text-xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Account</p>
                <p className='text-xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Orders</p>
                <p className='text-xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Login</p>
                <p className='text-xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-1'>Sign In</p>
            </div>
          </div>
        </div>
      </div>

      {/* mini nav panel */}
      <div className={`absolute w-screen left-0 top-0 overflow-hidden duration-300 bg-stone-900 z-50 ${isNavbar ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
        <IoClose onClick={() => toggleNavbar()} className={`text-gray-200 hover:text-white cursor-pointer size-6 fixed top-3 right-3 duration-300 ${isSearchBar && 'hidden'} ${isBag && 'hidden'} ${isNavbar ? 'opacity-100  z-50' : 'opacity-0'}`} /> 
        <div className='h-full w-full p-12 sm:p-14'>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Store</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Mac</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>iPhones</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Laptops</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Computers</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Monitors</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Keyboards / Mouse</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Accessories</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Casings</p>
          <p className='text-3xl text-gray-200 hover:text-white font-karla font-semibold cursor-pointer mb-3'>Support</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar