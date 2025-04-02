import React from 'react';

import { heroVid } from '../../assets/assets';

const Hero = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Video Background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        autoPlay
        muted
        loop
        src={heroVid}
      />

      {/* Overlay and Text */}
      <div className='absolute inset-0 flex items-center justify-center bg-black/60'>
        <div className='text-center text-white px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4'>
            Welcome to PlantStore
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl font-medium text-orange-200'>
            Discover the beauty of nature with our premium plants.
          </p>
          <button className='mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
