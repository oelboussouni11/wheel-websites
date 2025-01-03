import React, { useState } from 'react';
import { Send } from 'lucide-react';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div>
      <h3 className="font-display text-sm text-white tracking-wider mb-4">
        STAY UPDATED
      </h3>
      <p className="text-zinc-400 text-sm mb-4">
        Subscribe to our newsletter for exclusive updates and special offers.
      </p>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/10"
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Subscribe"
        >
          <Send size={20} strokeWidth={1.5} />
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;