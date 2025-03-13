import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied customers about their Holi shopping experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative group"
            >
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-100 group-hover:border-purple-200 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic relative">
                <span className="text-5xl text-purple-200 absolute -top-4 -left-2">"</span>
                {testimonial.review}
                <span className="text-5xl text-purple-200 absolute -bottom-8 -right-2">"</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;