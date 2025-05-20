import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleLoginSubmit = async (e) => {
        e.preventDefault();
      
        const apiURL = `${process.env.REACT_APP_API_URL}/Customer/GetByEmail?EmailAddress=${encodeURIComponent(formData.email)}`;
      
        try {
          const apiKey = process.env.REACT_APP_API_KEY;
      
          // Step 1: Check if the email exists
          const emailCheckResponse = await fetch(apiURL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'APIKey': apiKey,
            },
          });
      
          const emailCheckResult = await emailCheckResponse.json();
      
          if (emailCheckResponse.ok && emailCheckResult.success) {
            const customerData = emailCheckResult.data;
      
            // Step 2: Check if the entered password matches
            const enteredPassword = formData.password;
            const storedPassword = customerData.loginPassword;
      
            // Assuming the password is hashed; you should hash the entered password and compare with stored hash.
            if (storedPassword === enteredPassword) {
             
              if (rememberMe) {
                // Set cookies if Remember Me is checked
                Cookies.set('customerId', customerData.customerID, { expires: 30 });
                Cookies.set('firstName', customerData.firstName, { expires: 30 });
                Cookies.set('lastName', customerData.lastName, { expires: 30 });
                Cookies.set('email', customerData.email, { expires: 30 });
              } else {
                // Store data in session
                sessionStorage.setItem('customerId', customerData.customerID);
                sessionStorage.setItem('firstName', customerData.firstName);
                sessionStorage.setItem('lastName', customerData.lastName);
                sessionStorage.setItem('email', customerData.email);
              }
              // Handle successful login, like saving the customer data or redirecting the user
              toast.success('Successfully logged in!', {
                position: "top-right",
                autoClose: 2000, // Automatically close after 3 seconds
              });
              setTimeout(() => {
                navigate('/');
              }, 2000);
            } else {
              toast.error('Wrong Password!', {
                position: "top-right",
              });
            }
          } else {
            toast.error('Email not found!', {
              position: "top-right",
            });
          }
        } catch (error) {
          console.error('Error:', error);
          toast.error('An error occurred. Please try again.', {
            position: "top-right",
          });
        }
      };
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      useEffect(() => {
        // Retrieve customer details from cookies or session storage
        const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');
    
        if (customerId) {
          // Handle auto-login or redirect based on customer data
          navigate('/');
        }
      }, [navigate]);

  return (
    <div className='w-full min-h-screen pt-[50px]'>
            <div className='w-[90%] xl:w-[85%] mx-auto h-[200px] md:h-[200px] flex flex-col justify-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold md:w-[700px]'>
                    Log In. <span className='text-gray-500'>For Already Customers.</span>
                </h1>
            </div>

            <form className="space-y-4 w-[90%] md:w-[45%] lg:w-[35%] mx-auto">
            {/* Email Input */}
            <div>
                <label className="block text-black font-karla">Email</label>
                <input
                name="email"
                value={formData.email}
                onChange={handleChange} 
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
            </div>

            {/* Password Input */}
            <div>
                <label className="block text-black font-karla">Password</label>
                <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-2 text-black font-karla">
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="accent-yellow" />
                <span>Remember Me</span>
                </label>
            </div>
            {/* Login Button */}
            <button onClick={handleLoginSubmit} className="w-full bg-black font-karla text-white py-2 rounded-md hover:bg-amber font-semibold">
                Login
            </button>
          </form>
          <p className='text-sm pb-2 text-center font-semibold text-gray-500 mt-5 font-poppins'>havent signed up yet?  
            <span className='underline cursor-pointer text-blue-500 pl-2'>
              <Link to='/sign-in'>
                Sign Up
              </Link>
            </span>
          </p>
          <Link to='/forgot-password'>
            <p className='text-center text-sm font-poppins text-blue-500 font-semibold cursor-pointer hover:text-cyan-600'>Forgot password?</p>
          </Link>
    </div>
  )
}

export default Login
