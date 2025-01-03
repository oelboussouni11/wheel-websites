import React, { useState, useEffect } from 'react';
import CheckoutSummary from '../components/checkout/CheckoutSummary';
import PaymentForm from '../components/checkout/PaymentForm';
import ShippingForm from '../components/checkout/ShippingForm';
import OrderComplete from '../components/checkout/OrderComplete';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type CheckoutStep = 'shipping' | 'payment';

const Checkout = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const { items, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [isComplete, setIsComplete] = useState(false);
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

  // Scroll to top when step changes or order completes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep, isComplete]);

  const handlePlaceOrder = () => {
    clearCart();
    setIsComplete(true);
    setTimeout(() => {
      onNavigate('home');
    }, 3000);
  };

  if (isComplete) {
    return <OrderComplete />;
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="font-display text-2xl text-white mb-4">Your Cart is Empty</h1>
          <p className="text-white/60 mb-8">Add some items to your cart to proceed with checkout.</p>
          <button
            onClick={() => onNavigate('products')}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Steps indicator */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {['shipping', 'payment'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border ${
                  currentStep === step
                    ? 'border-white bg-white text-black'
                    : 'border-white/20 text-white'
                }`}>
                  {index + 1}
                </div>
                <div className={`ml-3 font-display text-sm ${
                  currentStep === step ? 'text-white' : 'text-white/60'
                }`}>
                  {step.toUpperCase()}
                </div>
                {index === 0 && (
                  <div className="mx-4 flex-1 h-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Forms */}
          <div className="space-y-8">
            {currentStep === 'shipping' ? (
              <>
                <ShippingForm
                  values={shippingInfo}
                  onChange={setShippingInfo}
                />
                <button
                  onClick={() => setCurrentStep('payment')}
                  className="w-full bg-white text-black font-display tracking-wider py-4 rounded-lg hover:bg-white/90 transition-colors"
                >
                  CONTINUE TO PAYMENT
                </button>
              </>
            ) : (
              <>
                <PaymentForm onPlaceOrder={handlePlaceOrder} />
                <button
                  onClick={() => setCurrentStep('shipping')}
                  className="w-full bg-white/10 text-white font-display tracking-wider py-4 rounded-lg hover:bg-white/20 transition-colors"
                >
                  BACK TO SHIPPING
                </button>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;