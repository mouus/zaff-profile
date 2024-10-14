import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

export default function about() {
  return (
    <div className='pb-5 px-1'>
      <Navbar />
      <div className='justify-center flex mt-5'>
        <div className='relative flex gap-5'>
            <Image 
                src={"/images/padi.png"} 
                objectFit='cover'
                className='rounded-lg'
                alt='about banner'
                width={100}
                height={50}
              />
               <Image 
                src={"/images/dan.png"} 
                objectFit='cover'
                className='rounded-lg'
                alt='about banner'
                width={40}
                height={40}
              />
              <Image 
                src={"/images/subapro.png"} 
                objectFit='cover'
                alt='about banner'
                width={40}
                height={40}
                className="bg-white rounded-lg"
              />
        </div>
      </div>
      
      {/* Title Section */}
      <h1 className='mt-5 text-center lg:text-left lg:ml-20 text-2xl lg:text-3xl font-bold text-white'>
        My Story
      </h1>

      {/* Story Section */}
      <div className='text-center max-w-3xl mx-auto font-normal text-xs lg:text-sm mt-5 bg-white/10 p-4 lg:p-6 rounded-lg text-white'>
        <h1>
        Mr. Abdulla Zafar Ali pioneered the discovery of the first Tiger shark in Fuvahmulah. He is currently working as an instructor in Fuvahmulah. Apart from being a dive instructor, he is one of the few divers who are continually concerned about the advancement of this field in Fuvahmulah.<br /><br />
        
        “I had my very first experience scuba diving in Fuvahmulah in the year 2011. At that time the dive equipment was very scarce and there were no dive center or dive schools in this island. But I never gave up. The ambition of bringing a successful recreational diving in Fuvahmulah never dies.<br /><br />
        
        As time passes, I came to know that there are Tiger sharks close to the harbor of this island. This made me more enthusiastic in bringing recreational diving. I managed to get scuba equipment from one of the local fishing boats (boadhi dhoni), Tharaanage Iburey, and with the help of Mr. Hussain Saeed (Kao) and Riyaz, Fehigiri, I was able to catch the first sight of a Tiger shark.<br /><br />

        When I brought this news to my friends, most of them made fun of what I had told them. Many people said that you won&lsquo;t be able to see that kind of shark on this island. It was then that I felt I should discuss this with stakeholders. Hence, I managed to convince a few divers who were keen to explore this brand-new Tiger shark spot.<br /><br />
        
        As I envisioned earlier, after a few months, a local entrepreneur (Mr. Saud) established a guest house and started selling diving trips to the Tiger shark point, and I became one of the divers who guided clients diving for Mr. Saud. Within 1 or 2 years, people started investing in this field. New dive centers and guest houses opened.<br /><br />
        
        Today, I stand proudly as a pioneer of this profitable venture. We now have 21 guest houses and 7 diving schools or centers. I believe there is still room for development and expansion in this field. At the same time, I wish to see the water sport activities prosper and expand in a wider range.”<br /><br />
        
        Fuvahmulah is becoming more popular day by day. Even dive stakeholders have started promoting Fuvahmulah on different platforms, such as dive fairs. Our dive site is the world&lsquo;s No. 1 Tiger shark dive destination, achieving celebrity status. From the beginning until today, Mr. Zafar has followed his passion as a scuba diving legend. I salute you all for trying to make this place shine for scuba diving. This place is Shark Island, located in the middle of the southern hemisphere below zero degrees.
        </h1>
      </div>

      {/* Image Section */}
      <div className='flex flex-col lg:flex-row gap-5 justify-center items-center mt-5 mr-7'>
        {/* First Image */}
        <div className='flex flex-col items-center'>
          <div className='relative w-36 h-36 lg:w-40 lg:h-40'>
            <Image 
              src={"/images/old.jpg"} 
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
              alt='about'
            />
          </div>
          <p className='text-5px text-white mt-2 text-center'>First Tiger Shark Dive (L) Livia (R) Hussain Saeed (Kao) on 2011</p>
        </div>

        {/* Second Image */}
        <div className='flex flex-col items-center'>
          <div className='relative w-36 h-36 lg:w-40 lg:h-40'>
            <Image 
              src={"/images/old2.jpg"} 
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
              alt='about'
            />
          </div>
          <p className='text-5px text-white mt-2 text-center'>Tiger Shark dive trip on 2013</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='relative w-36 h-36 lg:w-40 lg:h-40'>
            <Image 
              src={"/images/old3.jpg"} 
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
              alt='about'
            />
          </div>
          <p className='text-5px text-white mt-2 text-center'>Zafar & Shah getting ready to jump in the wate</p>
        </div>
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
          <p className='text-5px text-white mt-2 text-center'>Zaff leading a dive group in 2014</p>
        </div>
      </div>
    </div>
  );
}
