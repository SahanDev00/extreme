import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const { tokenID } = useParams(); // Extract tokenID from the URL
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const [customerID, setCustomerID] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to verify the token and check expiry
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(`${process.env.REACT_APP_API_URL}/Token/${tokenID}`,{
            method: 'GET',
            headers: {
              'APIKey': apiKey,
            },
        });
        const tokenData = await response.json();

        if (tokenData.success) {
          const expiryDate = new Date(tokenData.data.expiryDate);
          const currentDate = new Date();
          
          // Check if token is valid and not expired
          if (tokenData.data.tokenStatus === 'A' && expiryDate > currentDate) {
            setIsValidToken(true); // Valid token
            setCustomerID(tokenData.data.refID);
          } else {
            setMessage('Token has expired or is invalid.');
            setIsValidToken(false); // Invalid token
          }
        } else {
          setMessage('Invalid or expired token.');
        }
      } catch (error) {
        setMessage('Something went wrong. Please try again later.');
      }
    };

    verifyToken();
  }, [tokenID]);

  // Function to handle password update
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }

    setLoading(true);

    try {
    const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Customer/EditPassword?CustomerID=${customerID}&LoginPassword=${newPassword}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': apiKey,
        },
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Password reset successfully!', {
            position: "top-right",
            autoClose: 2000,
          });
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after success
        }, 2000);
      } else {
        setMessage('Error resetting password. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-[500px] w-[700px]'>
        <div className='w-full h-full p-5 justify-center items-center flex flex-col'>
          {isValidToken ? (
            <>
              <h1 className='text-3xl text-center font-bold font-overpass text-gray-600'>
                Reset Your Password
              </h1>
              <form className='mt-5 w-full' onSubmit={handleResetPassword}>
                <input
                  type="password"
                  placeholder='Enter new password'
                  className='w-full border pl-3 py-4'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder='Confirm new password'
                  className='w-full border pl-3 py-4 mt-3'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type='submit'
                  className={`w-full py-2 rounded bg-cyan-500 hover:bg-cyan-600 duration-100 text-white text-2xl font-overpass mt-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Updating...' : 'Reset Password'}
                </button>
              </form>
              {message && <p className='mt-4 text-center text-red-500'>{message}</p>}
            </>
          ) : (
            <p className='mt-4 text-center text-red-500'>{message || 'Verifying token...'}</p>
          )}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ResetPassword;
