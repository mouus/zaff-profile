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
          As a native of Fuvahmulah with over 10 years of experience in the shark expedition industry, I specialize in creating unforgettable diving experiences. We provide comprehensive services, including group management with accommodations, food and beverage, boat hire, and private charter luxury options. Our fleet features modern fiberglass boats, accommodating up to 20 passengers, ensuring both comfort and safety. Each expedition is led by experienced local guides who offer deep knowledge of Fuvahmulah&lsquo;s marine life, providing you with a seamless and immersive experience, tailored to your needs.
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
