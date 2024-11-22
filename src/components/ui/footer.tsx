import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-8 font-['Poppins',sans-serif]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section: Logo and Description */}
          <div className="mb-6 md:mb-0 flex-1">
            <img
              src="/placeholder.svg?height=40&width=120"
              alt="Company Logo"
              className="h-10 mb-4"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              Empowering innovation through cutting-edge technology solutions.
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="mb-6 md:mb-0 flex-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Connect With Us */}
          <div className="flex-1 md:ml-auto md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
