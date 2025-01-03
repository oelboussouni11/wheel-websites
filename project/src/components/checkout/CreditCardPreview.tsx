import React from 'react';
import { CreditCard as CardIcon } from 'lucide-react';

interface CreditCardPreviewProps {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvc: string;
  isFlipped: boolean;
}

const CreditCardPreview = ({
  cardNumber,
  cardName,
  expiryDate,
  cvc,
  isFlipped
}: CreditCardPreviewProps) => {
  return (
    <div className="relative h-48 w-full max-w-sm mx-auto perspective">
      <div className={`absolute inset-0 transition-transform duration-700 transform-preserve-3d ${
        isFlipped ? '[transform:rotateY(180deg)]' : ''
      }`}>
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full rounded-2xl p-6 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-white/10">
            {/* Card chip */}
            <div className="w-12 h-8 mb-6">
              <div className="w-full h-full rounded bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 opacity-80" />
            </div>
            
            {/* Card number */}
            <div className="mb-6 font-mono text-xl tracking-wider text-white">
              {cardNumber || '•••• •••• •••• ••••'}
            </div>
            
            {/* Card details */}
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs text-white/60 mb-1">Card Holder</div>
                <div className="font-mono text-white tracking-wide">
                  {cardName || 'YOUR NAME'}
                </div>
              </div>
              <div>
                <div className="text-xs text-white/60 mb-1">Expires</div>
                <div className="font-mono text-white">
                  {expiryDate || 'MM/YY'}
                </div>
              </div>
            </div>

            {/* Card brand logo */}
            <div className="absolute top-6 right-6">
              <CardIcon className="text-white/80" size={32} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
          <div className="h-full w-full rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-white/10">
            {/* Magnetic stripe */}
            <div className="w-full h-12 bg-zinc-800 mt-8" />
            
            {/* CVC */}
            <div className="px-6 mt-8">
              <div className="bg-white/10 rounded p-3">
                <div className="font-mono text-right text-white tracking-wider">
                  {cvc || '•••'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPreview;