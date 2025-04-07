import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchServiceProviders } from '../api/services';
import { ServiceProvider } from '../api/types';
import CalendarPicker from '../components/CalendarPicker';
import LoadingScreen from '../components/LoadingScreen';

const BookingPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { cart } = useCart();
  const [services, setServices] = useState<any[]>([]);
  const [providers, setProviders] = useState<ServiceProvider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load providers for all services in cart
        const providersData = await Promise.all(
          cart.map(item => fetchServiceProviders(item.serviceId))
        );
        setProviders(providersData.flat());
        setServices(cart);
      } catch (error) {
        console.error('Error loading data:', error);
        if (error instanceof Error) {
          alert(`Error loading service data: ${error.message}`);
        } else {
          alert('An unknown error occurred while loading service data');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [serviceId]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">Please add services before booking</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Book Your Services</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Selected Services</h2>
        <ul className="divide-y">
          {services.map((service, index) => (
            <li key={index} className="py-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{service.serviceName}</h3>
                  <p className="text-gray-600">{service.subService}</p>
                </div>
                <span className="text-primary font-medium">{service.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
        <CalendarPicker 
          onDateSelect={setSelectedDate}
          onTimeSelect={setSelectedTime}
        />
      </div>

      {selectedDate && selectedTime && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter your address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                className="w-full p-2 border rounded"
                rows={3}
                placeholder="Any special instructions"
              />
            </div>
            <button
              type="button"
              className="mt-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
