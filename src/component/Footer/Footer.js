import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-5 bg-black text-gray-400 mt-1">
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 mb-4 gap-5">
        <div className="ml-5">
          <a href="/thole" className="hover:text-white ml-5 footextext">AERSENSE</a>
          <a href="/my-orders" className="hover:text-white ml-5 footextext">my orders</a>
          <a href="/careers" className="hover:text-white ml-5 footextext">careers</a>
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        <a href="https://twitter.com" className="hover:text-white footextext">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.instagram.com/aersense_global/" className="hover:text-white footextext" target="_blank" rel="noopener noreferrer">          <FaInstagram size={24} />
        </a>
      </div>
      <div className="text-sm">
        <p>AERSENSE inc. © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;