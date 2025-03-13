import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-200">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center text-lg hover:text-purple-300 transition-colors">
                <Phone size={20} className="mr-2" /> +91 7355923271
              </p>
              <p className="flex items-center text-lg hover:text-purple-300 transition-colors">
                <Mail size={20} className="mr-2" /> akdwivedi7355@gmail.com
              </p>
              <p className="flex items-center text-lg hover:text-purple-300 transition-colors">
                <MapPin size={20} className="mr-2" /> Kanpur
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-200">Follow Us</h3>
            <div className="flex space-x-6">
              <Facebook className="cursor-pointer text-2xl hover:text-purple-400 transform transition-all duration-300 hover:scale-110" />
              <Twitter className="cursor-pointer text-2xl hover:text-purple-400 transform transition-all duration-300 hover:scale-110" />
              <Instagram className="cursor-pointer text-2xl hover:text-purple-400 transform transition-all duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-2">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />
              <button
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:px-3 sm:py-1 sm:text-sm xs:px-2 xs:py-1 xs:text-xs"
                 
              // className="bg-purple-600 px-6 py-3 rounded-r-lg hover:bg-purple-700 transition-colors"
              >
                
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
       
      </div>
    </footer>
  );
}


export default Footer;