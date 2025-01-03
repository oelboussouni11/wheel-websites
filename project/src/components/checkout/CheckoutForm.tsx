import React, { useState } from 'react';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';

interface CheckoutFormProps {
  onPlaceOrder: () => void;
}

const CheckoutForm = ({ onPlaceOrder }: CheckoutFormProps) => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  return (
    <div className="space-y-8">
      <ShippingForm 
        values={shippingInfo}
        onChange={setShippingInfo}
      />
      <PaymentForm />
      <button 
        onClick={onPlaceOrder}
        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-display tracking-wider py-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default CheckoutForm;