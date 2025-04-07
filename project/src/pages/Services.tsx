import React, { useState } from 'react';
import CartModal from '../components/CartModal';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Paintbrush, Wrench, Home, Scissors, Car, Sparkles, Zap, Shirt, ChevronDown, ChevronUp } from 'lucide-react';

interface SubService {
  name: string;
  price: string;
}

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  subServices: SubService[];
}

const services: Service[] = [
  {
    id: '1',
    icon: <Paintbrush className="w-12 h-12" />,
    title: 'Home Painting',
    description: 'Professional painting services for your home',
    price: 'Starts from ₹199',
    subServices: [
      { name: 'Wall Painting', price: '₹199 per room' },
      { name: 'Ceiling Painting', price: '₹149 per room' },
      { name: 'Exterior Painting', price: '₹399 per wall' },
      { name: 'Texture Painting', price: '₹249 per room' }
    ]
  },
  {
    id: '2',
    icon: <Wrench className="w-12 h-12" />,
    title: 'Plumbing',
    description: 'Expert plumbing solutions for your home',
    price: 'Starts from ₹99',
    subServices: [
      { name: 'Leak Repair', price: '₹99 per hour' },
      { name: 'Pipe Installation', price: '₹149 per hour' },
      { name: 'Drain Cleaning', price: '₹129 per service' },
      { name: 'Faucet Repair', price: '₹79 per fixture' }
    ]
  },
  {
    id: '3',
    icon: <Home className="w-12 h-12" />,
    title: 'Cleaning',
    description: 'Thorough cleaning services for your space',
    price: 'Starts from ₹129',
    subServices: [
      { name: 'Deep Cleaning', price: '₹199 per room' },
      { name: 'Move-In Cleaning', price: '₹299 per home' },
      { name: 'Carpet Cleaning', price: '₹149 per room' },
      { name: 'Window Cleaning', price: '₹99 per window' }
    ]
  },
  {
    id: '4',
    icon: <Scissors className="w-12 h-12" />,
    title: 'Gardening',
    description: 'Professional lawn and garden care',
    price: 'Starts from ₹79',
    subServices: [
      { name: 'Lawn Mowing', price: '₹79 per session' },
      { name: 'Hedge Trimming', price: '₹129 per hour' },
      { name: 'Weed Control', price: '₹99 per treatment' },
      { name: 'Tree Pruning', price: '₹149 per tree' }
    ]
  },
  {
    id: '5',
    icon: <Car className="w-12 h-12" />,
    title: 'Moving',
    description: 'Reliable moving and packing services',
    price: 'Starts from ₹299',
    subServices: [
      { name: 'Local Moving', price: '₹299 per hour' },
      { name: 'Long Distance', price: '₹1.50 per mile' },
      { name: 'Packing Service', price: '₹99 per room' },
      { name: 'Furniture Assembly', price: '₹79 per item' }
    ]
  },
  {
    id: '6',
    icon: <Sparkles className="w-12 h-12" />,
    title: 'Electrical',
    description: 'Safe and professional electrical work',
    price: 'Starts from ₹129',
    subServices: [
      { name: 'Outlet Installation', price: '₹129 per outlet' },
      { name: 'Light Fixture', price: '₹149 per fixture' },
      { name: 'Panel Upgrade', price: '₹999 per panel' },
      { name: 'Wiring Repair', price: '₹199 per hour' }
    ]
  },
  {
    id: '7',
    icon: <Zap className="w-12 h-12" />,
    title: 'HVAC',
    description: 'Heating and cooling system services',
    price: 'Starts from ₹149',
    subServices: [
      { name: 'AC Repair', price: '₹149 per hour' },
      { name: 'Furnace Tune-Up', price: '₹129 per service' },
      { name: 'Duct Cleaning', price: '₹399 per system' },
      { name: 'Thermostat Install', price: '₹199 per unit' }
    ]
  },
  {
    id: '8',
    icon: <Shirt className="w-12 h-12" />,
    title: 'Laundry',
    description: 'Professional laundry and dry cleaning',
    price: 'Starts from ₹29',
    subServices: [
      { name: 'Wash & Fold', price: '₹29 per load' },
      { name: 'Dry Cleaning', price: '₹9 per item' },
      { name: 'Ironing', price: '₹10 per item' },
      { name: 'Stain Removal', price: '₹50 per stain' }
    ]
  }
];

const Services = () => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const handleAddToCart = (service: Service, subService: SubService) => {
    addToCart({
      serviceId: service.id,
      serviceName: service.title,
      subService: subService.name,
      price: subService.price
    });
  };

  const handleBookNow = (serviceId: string) => {
    navigate(`/booking/${serviceId}`);
  };

  const handleServiceClick = (index: number, e: React.MouseEvent) => {
    // Only toggle expansion when clicking the chevron button
    const target = e.target as HTMLElement;
    if (target.closest('button')) {
      setExpandedService(expandedService === index ? null : index);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={(e) => handleServiceClick(index, e)}
            >
              <div className="flex justify-between items-start">
                <div className="text-primary mb-4 group-hover:text-primary-dark transition-colors">
                  {service.icon}
                </div>
                <button className="text-gray-400 hover:text-primary p-1 rounded-full hover:bg-gray-100 transition-colors">
                  {expandedService === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-black mb-4">{service.description}</p>
              <p className="text-primary font-semibold mb-4">{service.price}</p>
              
              {expandedService === index && (
                <div className="mt-4 border-t pt-4 animate-fadeIn">
                  <h4 className="font-medium text-gray-700 mb-3">Sub-Services:</h4>
                  <ul className="space-y-3">
                    {service.subServices.map((sub: SubService, i: number) => {
                      const itemCount = cart.filter(item => 
                        item.serviceId === service.id && 
                        item.subService === sub.name
                      ).length;
                      
                      return (
                        <li key={i} className="flex justify-between items-center text-sm px-4 py-1.5 rounded hover:bg-gray-50 transition-colors">
                          <span className="text-black">{sub.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-primary font-medium bg-primary/10 px-4 py-2 rounded">
                              {sub.price}
                            </span>
                            <div className="flex items-center border rounded-md overflow-hidden">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFromCart(service.id, sub.name);
                                }}
                                className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
                                disabled={itemCount === 0}
                              >
                                -
                              </button>
                              <span className="px-2 text-sm">
                                {itemCount}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAddToCart(service, sub);
                                }}
                                className="px-2 py-1 bg-gray-100 hover:bg-gray-100 text-gray-600"
                              > +
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="fixed bottom-4 right-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2"
          >
            <span>View Cart ({cart.length})</span>
          </button>
        </div>
        
        <CartModal 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </div>
  );
};

export default Services;
