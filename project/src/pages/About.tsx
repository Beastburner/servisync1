import React from 'react';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">About ServiSync</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-4">Our Mission</h2>
            <p className="text-black mb-6">
              At ServiSync, we're dedicated to revolutionizing the way people access home services. 
              Our platform connects skilled professionals with homeowners, ensuring quality service 
              delivery at your convenience.
            </p>
            <h2 className="text-2xl font-semibold text-secondary mb-4">Our Vision</h2>
            <p className="text-black mb-6">
              We envision a world where accessing quality home services is as easy as a click of a button. 
              Through technology and innovation, we're making this vision a reality.
            </p>
          </div>
          <div className="bg-primary rounded-lg p-8 text-white">
            <img 
              src="./assets/images/why-choose.jpg" 
              alt="Why Choose ServiSync" 
              className="w-full h-48 object-cover rounded-lg mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose ServiSync?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Verified Professional Service Providers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>100% Satisfaction Guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Transparent Pricing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
