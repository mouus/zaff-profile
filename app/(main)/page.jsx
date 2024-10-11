'use client'
// Home Component
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Array of background images
  const backgroundImages = ['/img-1.jpg', '/img-2.jpg', '/img-3.jpg'];

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
          <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mt-4">
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile Picture"
              width={160}
              height={160}
              objectFit="cover"
            />
          </div>
          <h1 className="text-white text-base sm:text-xl font-bold mt-4 custom-text-shadow">
            Zafar Ali
          </h1>
          <p className="text-white text-xs sm:text-sm mt-2 py-2 max-w-md text-center">
            Since 2014, Zafar Ali has been a passionate and dedicated dive instructor and surfer in
            Fuvahmulah (FVM). With years of experience exploring the depths of the Indian Ocean and
            riding its powerful waves, he has built a reputation for both his expertise and his love
            for the sea. Zafar has guided countless divers, from beginners taking their first breaths
            underwater to seasoned professionals seeking the thrill of FVM’s famous shark dives. His
            commitment to safety, education, and conservation has made him a respected figure in the
            diving and surfing community, where he continues to inspire others to connect with and
            protect the marine environment he treasures.
          </p>
        </div>
      </div>

      <div className="mt-6 px-4 py-6">
        <h1 className="text-3xl text-white font-bold ">Instagram</h1>
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="dummy-img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
