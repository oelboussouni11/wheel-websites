import React from 'react';
import { CheckCircle } from 'lucide-react';

const OrderComplete = () => (
  <div className="min-h-screen pt-32 px-4">
    <div className="max-w-lg mx-auto text-center">
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full opacity-50 blur-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          <CheckCircle className="relative text-white w-16 h-16" />
        </div>
      </div>
      <h1 className="font-display text-3xl text-white mb-4">
        Thank You for Your Order!
      </h1>
      <p className="text-white/60 mb-8">
        Your order has been successfully placed. You will receive a confirmation email shortly.
      </p>
      <div className="animate-pulse text-white/40 text-sm">
        Redirecting to home page...
      </div>
    </div>
  </div>
);

export default OrderComplete;