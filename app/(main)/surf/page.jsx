import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

export default function surf() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col pb-5 lg:flex-row justify-between items-center lg:mx-32 mx-4 mt-12'>
        {/* Left Section: Information about Fuvamulah Surfing Adventures */}
        <div className='max-w-md text-white mb-6 lg:mb-0'>
          <h1 className='text-2xl font-bold mb-2'>Fuvamulah Surf Adventures</h1>
          <p>
            Ride the waves of Fuvamulah, 
            home to some of the most exhilarating and uncrowded surf spots in the Indian Ocean. 
            Whether you're a seasoned surfer looking for the perfect break, or a beginner eager to catch your first wave, 
            Fuvamulah offers the ideal conditions for all skill levels.
          </p>
          <p className='mt-2'>
            With pristine beaches, powerful swells, 
            and year-round surfable waves, Fuvamulah is a hidden gem for surfers. 
            Join us for an unforgettable surf adventure, 
            where you&lsquo;ll get to explore the untouched beauty of the island while riding the waves.
          </p>
          <p className='mt-4'>
            <a 
              href="https://wa.me/9607930760" 
              target="_blank" 
              className='text-green-500 font-semibold hover:underline'
            >
              Get in touch with me on WhatsApp (+960 7930760) to book your surf adventure in Fuvamulah.
            </a>
          </p>
        </div>

        {/* Right Section: Image */}
        <div className='relative w-full h-64 lg:w-80 lg:h-44'>
          <Image 
            src="/images/loc.png"  // Replace with a surfing-related image
            layout="fill" // Fill the container
            objectFit="cover" // Cover the container
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  );
}
