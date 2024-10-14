'use client'
import Footer from "@/components/Footer";
// Home Component
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Array of background images
  const backgroundImages = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg','/images/img4.jpg','/images/img5.jpg','/images/img6.jpg','/images/img7.jpg','/images/img8.jpg','/images/img9.jpg','/images/img10.jpg','/images/img11.jpg','/images/img12.jpg','/images/img13.jpg','/images/dive.jpg'];

  // State for current image index and fade effect
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Function to handle image change with fade effect
    const changeImage = () => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(true); // Start fade-in
      }, 1000); // Match duration with CSS transition time
    };

    const interval = setInterval(changeImage, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <Navbar />

      <div className="relative">
        {/* Image Section (Background) */}
        <div className="absolute inset-0 h-full w-full">
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={backgroundImages[currentImageIndex]} // Dynamic image source
              alt="banner"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
            {/* Optional overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[550px] px-4 mt-2">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mt-4 rounded-full overflow-hidden relative">
            <Image
              src="/images/profileimg.jpg" // Ensure this is the correct path
              alt="Profile Picture"
              layout="fill" // Fill the container
              objectFit="cover" // Cover the container
            />
          </div>
          <h1 className="text-white text-md text-base sm:text-lg font-bold mt-4 custom-text-shadow">
            Zafar Ali
          </h1>
          <p className="text-white text-xs sm:text-sm mt-2 py-2 max-w-md text-center">
          Since 2014, I&lsquo;ve been leading the introduction of recreational diving in Fuvahmulah (FVM), turning my passion for the ocean into my life&lsquo;s work.
          With years of experience as a diver and surfer, I&lsquo;ve guided countless individuals through Fuvahmulah&lsquo;s unique underwater world and exhilarating surf. 
          From beginners to seasoned professionals seeking shark encounters, I&lsquo;m dedicated to making every experience safe and unforgettable. My commitment to marine education, 
          safety, and conservation drives me to inspire others to explore and protect the ocean we all depend on.
          </p>
        </div>
      </div>

      <div className="mt-6 px-10 py-6">
        <h1 className="text-3xl text-white font-bold ">Instagram</h1>
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {['/images/insta1.jpg', '/images/insta2.jpg', '/images/insta3.jpg', '/images/shark.jpg', '/images/lake.jpg', '/images/insta6.jpg', '/images/insta7.jpg', '/images/img9.jpg','/images/img14.jpg','/images/dive.jpg','/images/img11.jpg','/images/surf4.jpg'].map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
            <Image
              src={src}
              alt={`Instagram Image ${index + 1}`}
              layout="fill" // Fill the container
              objectFit="cover" // Ensure the image covers the container
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}
