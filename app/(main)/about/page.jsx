import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

export default function about() {
  return (
    <div className='pb-5 px-1'>
      <Navbar />

      {/* Title Section */}
      <h1 className='mt-5 text-center lg:text-left lg:ml-20 text-2xl lg:text-3xl font-bold text-white'>
        My Story
      </h1>

      {/* Story Section */}
      <div className='text-center max-w-3xl mx-auto font-normal text-xs lg:text-sm mt-5 bg-white/10 p-4 lg:p-6 rounded-lg text-white'>
        <h1>
          My career in diving began in 2011, when Fuvahmulah had no dive centers or equipment readily
          available. Despite the lack of resources, my passion for the ocean kept driving me forward.
          I remember borrowing scuba gear from a local fishing boat and, alongside a few friends,
          venturing out into the waters near the harbor. That&lsquo;s when I saw my first tiger shark—a
          moment that changed everything. I shared the news with others, but many didn&lsquo;t believe that
          tiger sharks could be found here. <br /><br />
          Undeterred, I gathered a few divers who shared my enthusiasm, and together we explored what
          would soon become Fuvahmulah&lsquo;s famous tiger shark diving site. Slowly but surely, others
          began to recognize the potential. Local entrepreneurs, like Mr. Saud, opened guest houses
          and began offering dives to this special spot. I was proud to guide the first of many
          divers, helping put Fuvahmulah on the map as a premier diving destination. <br /><br />
          What started as a dream, against all odds, has grown into a thriving industry. Today, we
          have multiple dive centers and guest houses, and Fuvamulah is recognized as the world&lsquo;s
          top tiger shark diving destination. I&lsquo;m proud of the role I&lsquo;ve played in this journey, and
          I remain committed to pushing this industry further, continuing to develop and promote the
          incredible underwater world that we&lsquo;re fortunate to call home.
        </h1>
      </div>

      {/* Image Section */}
      <div className='flex flex-col lg:flex-row gap-5 justify-center items-center mt-5'>
        {/* First Image */}
        <div className='flex flex-col items-center'>
          <div className='relative w-36 h-36 lg:w-40 lg:h-40'>
            <Image 
              src={"/images/about.jpg"} 
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
              alt='about'
            />
          </div>
          <p className='text-xs text-white mt-2 text-center'>Lonu&lsquo;s first dive experience with Zaff in 2014</p>
        </div>

        {/* Second Image */}
        <div className='flex flex-col items-center'>
          <div className='relative w-36 h-36 lg:w-40 lg:h-40'>
            <Image 
              src={"/images/about2.jpg"} 
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
              alt='about'
            />
          </div>
          <p className='text-xs text-white mt-2 text-center'>Zaff leading a dive group in 2014</p>
        </div>
      </div>
    </div>
  );
}
