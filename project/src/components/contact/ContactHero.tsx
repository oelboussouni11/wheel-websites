import React from 'react';

const ContactHero = () => (
  <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
    {/* Background with parallax effect */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?auto=format&fit=crop&q=80)',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    </div>

    <div className="relative text-center">
      <h1 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-[0.2em]">
        CONTACT US
      </h1>
      <p className="text-zinc-300 max-w-xl mx-auto px-4">
        Get in touch with our team of experts for personalized wheel solutions
        and technical support.
      </p>
    </div>
  </section>
)

export default ContactHero;