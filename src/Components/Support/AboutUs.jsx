import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-black min-h-screen px-6 md:px-20 font-sans pt-[50px]">
        <div className='w-[90%] xl:w-[85%] mx-auto h-[200px] md:h-[200px] flex flex-col justify-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold md:w-[700px]'>
                About Us. <span className='text-gray-500'>Extreme Computers</span>
            </h1>
        </div>
      <div className="w-[90%] xl:w-[85%] mx-auto font-overpass">
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl font-overpass">
          Welcome to <span className="font-semibold text-black">Extreme Computers</span> — where performance meets innovation. We're not just a tech store. We're a movement that empowers creators, gamers, and dreamers to go extreme with their gear.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-overpass">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              We bring next-gen computing to your fingertips — blazing-fast PCs, elite components, and future-proof builds. Whether you're designing worlds, cracking code, or dominating in-game, we've got the machine for you.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-overpass">Why Extreme?</h2>
            <p className="text-gray-700 text-lg">
              Extreme Computers is built for the bold. We don’t follow trends — we create them. With hand-picked gear, expert support, and a community of enthusiasts, we deliver a tech experience that’s clean, powerful, and unforgettable.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-4 font-overpass">Designed to Impress.</h2>
          <p className="text-gray-700 text-lg">
            Inspired by the world's most iconic brands but with our own rebellious twist. Our aesthetic is minimalist, our attitude is maximalist. Built for tech-lovers who crave power and style in one sleek package.
          </p>
        </div>

        <div className="mt-20 text-center pb-5 xl:pb-0">
          <p className="text-3xl font-medium mb-4">Welcome to the Extreme.</p>
          <p className="text-lg text-gray-600">Only at <span className="font-semibold text-black">Extreme Computers</span></p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
