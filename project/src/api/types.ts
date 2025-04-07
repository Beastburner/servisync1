export interface Service {
  id: string;
  name: string;
  description: string;
  price: {
    startingFrom: number;
    unit: string;
  };
  category: string;
  image: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  services: string[];
  rating: number;
  totalBookings: number;
  experience: number;
  image: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  providerId: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  scheduledDate: string;
  scheduledTime: string;
  address: Address;
  price: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  landmark?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}