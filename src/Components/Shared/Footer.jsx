import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-stone-900 text-gray-400 text-sm py-10 px-6 md:px-20 font-overpass">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div>
            <h3 className="text-white font-medium mb-3">Shop & Learn</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Laptops</a></li>
              <li><a href="/" className="hover:underline">Desktops</a></li>
              <li><a href="/" className="hover:underline">Accessories</a></li>
              <li><a href="/" className="hover:underline">Software</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Help Center</a></li>
              <li><a href="/" className="hover:underline">Warranty</a></li>
              <li><a href="/" className="hover:underline">Order Status</a></li>
              <li><a href="/" className="hover:underline">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">About Us</a></li>
              <li><a href="/" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/" className="hover:underline">Terms of Use</a></li>
              <li><a href="/" className="hover:underline">Sales & Refunds</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Extreme Computers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
