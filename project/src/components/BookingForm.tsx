import React, { useState } from 'react';
import { Service, ServiceProvider } from '../api/types';
import { bookService } from '../api/services';

interface BookingFormProps {
  service: Service;
  providers: ServiceProvider[];
  initialValues?: {
    date: string;
    time: string;
  };
}

const BookingForm: React.FC<BookingFormProps> = ({ service, providers, initialValues }) => {
  const [selectedProvider] = useState(providers[0]?.id || '');
  const [date, setDate] = useState(initialValues?.date || '');
  const [time, setTime] = useState(initialValues?.time || '');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    setIsSubmitting(true);
    setError('');
    
    try {
      await bookService(service.id, selectedProvider, { date, time, address });
      alert('Booking confirmed!');
    } catch (err) {
      setError('Failed to book service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md disabled:opacity-50"
      >
        {isSubmitting ? 'Booking...' : 'Confirm Booking'}
      </button>
    </form>
  );
};

export default BookingForm;
