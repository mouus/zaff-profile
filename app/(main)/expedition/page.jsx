import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

export default function expedition() {
  return (
    <div>
      <Navbar />
      <div className='flex pb-5 flex-col lg:flex-row justify-between items-center lg:mx-32 mx-4 mt-12'>
        {/* Left Section: Information about Fuvamulah Shark Expeditions */}
        <div className='max-w-md text-white mb-6 lg:mb-0'>
          <h1 className='text-2xl font-bold mb-2'>Fuvamulah Shark Expeditions</h1>
          <p>
            Experience the thrill of diving with Fuvamulah&lsquo;s famous tiger sharks in the crystal-clear waters of the Indian Ocean. 
            Our expeditions offer you the chance to explore the unique underwater world of Fuvamulah, guided by experienced divers. 
            Whether you&lsquo;re a seasoned diver or a beginner, we ensure a safe and unforgettable adventure.
          </p>
          <p className='mt-4'>
            <a 
              href="https://wa.me/9607930760" 
              target="_blank" 
              className='text-green-500 font-semibold hover:underline'
            >
              Get in touch with me on WhatsApp (+960 7930760) to book your shark diving adventure.
            </a>
          </p>
        </div>

        {/* Right Section: Image */}
        <div className='relative w-full h-64 lg:w-80 lg:h-44'>
          <Image 
            src="/images/loc.png"
            layout="fill" // Fill the container
            objectFit="cover" // Cover the container
            className='rounded-lg'
            alt="location"
          />
        </div>
      </div>
    </div>
  );
}
