import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';

const Home = () => {
  return (
    <div className="bg-orange-500">
      <Hero />
      <ServicesGrid />
    </div>
  );
};

export default Home;