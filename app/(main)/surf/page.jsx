import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

export default function surf() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      <div className='flex flex-col pb-5 lg:flex-row justify-between items-center lg:mx-32 mx-4 mt-12'>
        
        {/* Left Section: Information about Fuvahmulah Surfing Adventures */}
        <div className='max-w-md text-white mb-6 lg:mb-0'>
          
          {/* Heading: Surfing in Fuvahmulah */}
          <h1 className='text-2xl font-bold mb-2'>
            Surfing in Fuvahmulah: A Hidden Gem of the Indian Ocean
          </h1>
          
          {/* Paragraph: Overview of Surfing in Fuvahmulah */}
          <p>
            Fuvahmulah, often celebrated for its breathtaking underwater biodiversity, has quietly emerged as one of the Maldives&lsquo; most unique and exciting surf destinations. Nestled in the heart of the Indian Ocean, the island offers a distinct surfing experience unlike any other in the Maldives, where surfers are met with uncrowded waves, rich local culture, and an adventurous surf scene.
          </p>

          {/* Subheading: Thoondu and Eleyi’s Hut */}
          <h2 className='text-xl font-semibold mt-4'>
            Thoondu and Eleyi&lsquo;s Hut – A Surfer&lsquo;s Paradise
          </h2>
          <p>
            The most iconic surf spot in Fuvahmulah is undoubtedly Thoondu, a semi-beach break located on the northern end of the island. Known for its pristine white sand and powerful swells, Thoondu presents an exhilarating challenge for surfers. The surf season here typically coincides with the island&lsquo;s southern monsoon, which brings in consistent waves that peel perfectly along the shore.
          </p>
          <p>
            Within Thoondu, an area known as Eleyi&lsquo;s Hut has become a favorite among local surfers. Positioned at the north end corner on the southwest side of the island, this break is ideal for intermediate and advanced surfers looking to push their skills. The waves here are fast and can get hollow on the right conditions, offering surfers the opportunity to carve out some incredible rides.
          </p>

          {/* Subheading: Kalho Akiri Gando (Black Stone Beach) */}
          <h2 className='text-xl font-semibold mt-4'>
            Kalho Akiri Gando (Black Stone Beach) – A Dream for Goofy Footers
          </h2>
          <p>
            For goofy footers, Kalho Akiri Gando, or Black Stone Beach, is a hidden treasure. This spot is known for its smooth left-handers, making it a prime location for surfers who ride with their right foot forward. The dramatic backdrop of black volcanic stones lining the beach adds a unique charm to the surf experience. It&lsquo;s a place where surfers can truly connect with the raw, untamed beauty of Fuvahmulah.
          </p>

          {/* Subheading: Geragando Fanno */}
          <h2 className='text-xl font-semibold mt-4'>
            Geragando Fanno – The Perfect Place to Learn
          </h2>
          <p>
            For those new to surfing or looking to improve their skills, Geragando Fanno is the go-to spot. Known within the surf community as a friendly and forgiving wave, it&lsquo;s ideal for beginners. The gentle swells here provide the perfect conditions to learn, practice, and enjoy the ocean. Several local surf schools and associations offer lessons and surf-related services, ensuring that newcomers are guided by experienced instructors who understand the unique dynamics of the island&lsquo;s waves.
          </p>

          {/* Subheading: The Rise of Surf Culture in Fuvahmulah */}
          <h2 className='text-xl font-semibold mt-4'>
            The Rise of Surf Culture in Fuvahmulah
          </h2>
          <p>
            What makes Fuvahmulah stand out from other surf destinations is not just the quality of its waves, but the strong surf culture that has blossomed here. Surfing is more than a sport—it&lsquo;s a lifestyle and a subcultural movement on the island. Over the years, the surf scene has evolved into a close-knit community, where local surfers share a deep respect for the ocean and a passion for riding its waves. This spirit of camaraderie and enthusiasm has helped shape Fuvahmulah&lsquo;s identity as a rising surf destination, drawing surfers from across the Maldives and beyond.
          </p>

          {/* Contact Link */}
          {/* <p className='mt-4'>
            <a 
              href="https://wa.me/9607930760" 
              target="_blank" 
              className='text-green-500 font-semibold hover:underline'
            >
              Get in touch with me on WhatsApp (+960 7930760) to book your surf adventure in Fuvahmulah.
            </a>
          </p> */}
        </div>

        {/* Right Section: Surfing Images in a Column with Gap */}
        <div className='lg:flex lg:flex-col gap-5 w-full lg:w-auto'>
          <div className='relative w-full h-64 lg:w-80 lg:h-44'>
            <Image 
              src="/images/surf.jpg"  // Replace with a surfing-related image
              layout="fill" // Fill the container
              objectFit="cover" // Cover the container
              className='rounded-lg'
              alt="surfing image"
            />
          </div>
          <div className='relative mt-2 w-full h-64 lg:w-80 lg:h-44'>
            <Image 
              src="/images/img4.jpg"  // Replace with a surfing-related image
              layout="fill" // Fill the container
              objectFit="cover" // Cover the container
              className='rounded-lg'
              alt="surfing image"
            />
          </div>
          <div className='relative mt-2 w-full h-64 lg:w-80 lg:h-44'>
            <Image 
              src="/images/surf2.jpg"  // Replace with a surfing-related image
              layout="fill" // Fill the container
              objectFit="cover" // Cover the container
              className='rounded-lg'
              alt="surfing image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
