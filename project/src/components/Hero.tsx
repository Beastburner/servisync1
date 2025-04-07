import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
          Home Services, On Demand
        </h1>
        <p className="text-xl text-white text-center mb-12">
          Expert home services at your doorstep
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center bg-white rounded-lg p-2 shadow-lg">
            <Search className="w-6 h-6 text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Search for services..."
              className="flex-1 p-2 outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;