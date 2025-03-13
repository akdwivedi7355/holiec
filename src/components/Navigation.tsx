import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavigationProps {
  cartItems: CartItem[];
}

export function Navigation({ cartItems }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-500 shadow-lg fixed w-full z-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Holi</span>
            
          </div>
          
          <div className="flex items-center space-x-4">
           
            
          </div>
          <div className="hidden  items-center md:flex space-x-8 ml-10">
              <a href="#home" className="text-white hover:scale-105 hover:text-purple-600 ">Home</a>
              <a href="#products" className="text-white hover:text-purple-600">Products</a>
              <a href="#testimonal" className="text-white hover:text-purple-600">Testimonials</a>
              <a href="#contact" className="text-white hover:text-purple-600">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="text-gray-700 cursor-pointer" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;



