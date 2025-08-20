import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="w-full h-[300px] bg-stone-900 flex flex-col items-center justify-center text-white text-center px-6 font-karla">
      <h2 className="text-3xl md:text-5xl font-semibold">
        Experience the Future of Computing
      </h2>
      <p className="text-lg md:text-xl mt-3 opacity-80">
        Discover cutting-edge tech, premium builds, and exclusive deals.
      </p>
      <Link to="/all-products">
        <button className="mt-5 bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default CTA;
