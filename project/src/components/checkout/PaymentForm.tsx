import React, { useState } from 'react';
import FormInput from './FormInput';
import { CreditCard, Truck } from 'lucide-react';
import CreditCardPreview from './CreditCardPreview';

interface PaymentFormProps {
  onPlaceOrder: () => void;
}

const PaymentForm = ({ onPlaceOrder }: PaymentFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: ''
  });
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    // Format card number
    if (field === 'number') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .slice(0, 19);
    }
    
    // Format expiry date
    if (field === 'expiry') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .slice(0, 5);
    }
    
    // Format CVC
    if (field === 'cvc') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }

    setCardDetails(prev => ({ ...prev, [field]: formattedValue }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="font-display text-xl text-white tracking-wider">PAYMENT METHOD</h2>
        
        {/* Payment Method Selection */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`group relative p-4 rounded-lg border ${
              paymentMethod === 'card'
                ? 'border-white/20 bg-white/10'
                : 'border-white/10 hover:border-white/20'
            } transition-all duration-300`}
          >
            <div className="flex items-center space-x-3">
              <CreditCard className="text-white/60 group-hover:text-white" size={20} />
              <span className="text-white">Credit Card</span>
            </div>
          </button>

          <button
            onClick={() => setPaymentMethod('cod')}
            className={`group relative p-4 rounded-lg border ${
              paymentMethod === 'cod'
                ? 'border-white/20 bg-white/10'
                : 'border-white/10 hover:border-white/20'
            } transition-all duration-300`}
          >
            <div className="flex items-center space-x-3">
              <Truck className="text-white/60 group-hover:text-white" size={20} />
              <span className="text-white">Cash on Delivery</span>
            </div>
          </button>
        </div>

        {/* Credit Card Form */}
        {paymentMethod === 'card' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <CreditCardPreview
              cardNumber={cardDetails.number}
              cardName={cardDetails.name}
              expiryDate={cardDetails.expiry}
              cvc={cardDetails.cvc}
              isFlipped={isCardFlipped}
            />
            
            <div className="space-y-4">
              <FormInput
                label="Card Number"
                name="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                maxLength={19}
                required
              />
              
              <FormInput
                label="Name on Card"
                name="nameOnCard"
                type="text"
                value={cardDetails.name}
                onChange={(e) => handleInputChange('name', e.target.value.toUpperCase())}
                required
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Expiry Date"
                  name="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => handleInputChange('expiry', e.target.value)}
                  maxLength={5}
                  required
                />
                <div 
                  onFocus={() => setIsCardFlipped(true)}
                  onBlur={() => setIsCardFlipped(false)}
                >
                  <FormInput
                    label="CVC"
                    name="cvc"
                    type="text"
                    placeholder="123"
                    value={cardDetails.cvc}
                    onChange={(e) => handleInputChange('cvc', e.target.value)}
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cash on Delivery Notice */}
        {paymentMethod === 'cod' && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 animate-in fade-in duration-300">
            <p className="text-white/60 text-sm leading-relaxed">
              Pay with cash upon delivery. Please note that a small COD fee may apply. 
              Our delivery partner will contact you before delivery.
            </p>
          </div>
        )}
      </div>

      {/* Place Order Button */}
      <button 
        onClick={onPlaceOrder}
        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-display tracking-wider py-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default PaymentForm;