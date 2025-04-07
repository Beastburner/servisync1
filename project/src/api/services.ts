import { Service, ServiceProvider } from './types';

export const fetchService = async (serviceId: string): Promise<Service> => {
  // Mock data matching Service type
  return Promise.resolve({
    id: serviceId,
    name: 'Haircut',
    description: 'Professional haircut service',
    price: {
      startingFrom: 30,
      unit: 'USD'
    },
    category: 'Beauty',
    image: '/images/haircut.jpg'
  });
};

export const fetchServices = async (): Promise<Service[]> => {
  // Temporary mock data
  return Promise.resolve([
    {
      id: '1',
      name: 'Haircut',
      description: 'Professional haircut service',
      price: {
        startingFrom: 30,
        unit: 'USD'
      },
      category: 'Beauty',
      image: '/images/haircut.jpg'
    },
    {
      id: '2',
      name: 'Manicure',
      description: 'Basic manicure service',
      price: {
        startingFrom: 25,
        unit: 'USD'
      },
      category: 'Beauty',
      image: '/images/manicure.jpg'
    }
  ]);
};

export const fetchServiceProviders = async (serviceId: string): Promise<ServiceProvider[]> => {
  // Mock data matching ServiceProvider type
  return Promise.resolve([
    {
      id: '1',
      name: 'John Doe',
      services: [serviceId],
      rating: 4.5,
      totalBookings: 42,
      experience: 5,
      image: '/images/john-doe.jpg'
    },
    {
      id: '2',
      name: 'Jane Smith',
      services: [serviceId],
      rating: 4.8,
      totalBookings: 65,
      experience: 7,
      image: '/images/jane-smith.jpg'
    }
  ]);
};

export const bookService = async (
  serviceId: string,
  providerId: string,
  bookingDetails: {
    date: string;
    time: string;
    address: string;
  }
) => {
  // This would be replaced with actual API call
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      serviceId,
      providerId,
      ...bookingDetails,
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to book service');
  }
  return response.json();
};