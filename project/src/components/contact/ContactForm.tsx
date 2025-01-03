import React, { useState } from 'react';
import SelectSubject from './SelectSubject';
import SendButton from './SendButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="relative">
      <div className="absolute -inset-1">
        <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
      </div>
      
      <form onSubmit={handleSubmit} className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
        <h2 className="font-display text-2xl text-white mb-6 tracking-wider text-center">
          SEND US A MESSAGE
        </h2>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-500 
                focus:outline-none focus:ring-1 focus:ring-white/20 hover:border-white/20 transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-500 
                focus:outline-none focus:ring-1 focus:ring-white/20 hover:border-white/20 transition-colors"
              required
            />
          </div>

          <SelectSubject value={formData.subject} onChange={handleChange} />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-500 
              focus:outline-none focus:ring-1 focus:ring-white/20 hover:border-white/20 transition-colors resize-none"
            required
          />

          <div className="flex justify-center pt-2">
            <SendButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;