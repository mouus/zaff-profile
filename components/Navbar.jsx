'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto py-2 px-4 relative">
      <div className="flex space-x-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} color="white" className="cursor-pointer hover:text-gray-400" />
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={20} color="white" className="cursor-pointer hover:text-gray-400" />
        </a>
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={20} color="white" className="cursor-pointer hover:text-gray-400" />
        </a>
      </div>
      <div>
        <FaBars size={25} color="white" onClick={toggleMenu} className="cursor-pointer" />
      </div>
      {menuOpen && (
        <div className="absolute right-0 top-12 bg-white shadow-md rounded-lg py-2 w-40 sm:w-48 z-50">
          <ul className="text-right">
          <Link href={'/'}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li></Link>
          <Link href={'#'}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Accommodation</li></Link>
          <Link href={'#'}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li></Link>
          <Link href={'#'}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About Us</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
}
