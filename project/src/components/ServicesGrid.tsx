import React from 'react';
import { Paintbrush, Wrench, Home, Scissors, Car, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: 'Home Painting',
    description: 'Professional painting services for your home'
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Plumbing',
    description: 'Expert plumbing repair and installation'
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Home Cleaning',
    description: 'Deep cleaning services for your home'
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Salon at Home',
    description: 'Professional beauty services at your doorstep'
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Car Cleaning',
    description: 'Professional car wash and detailing'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Pest Control',
    description: 'Complete pest control solutions'
  }
];

const ServicesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
