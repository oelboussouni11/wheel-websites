import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'VISIT US',
      content: 'Quartier Industriel Sidi Ghanem, Marrakech 40000, Morocco'
    },
    {
      icon: Phone,
      title: 'CALL US',
      content: '+212 524-335-678'
    },
    {
      icon: Mail,
      title: 'EMAIL US',
      content: 'contact@beomwheels.ma'
    },
    {
      icon: Clock,
      title: 'WORKING HOURS',
      content: 'Mon - Fri: 8:30 AM - 6:30 PM'
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="font-display text-2xl text-white tracking-wider">
        GET IN TOUCH
      </h2>
      
      <div className="space-y-6">
        {contactDetails.map(({ icon: Icon, title, content }) => (
          <div key={title} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/40 border border-white/5 rounded-lg p-6 hover:border-white/10 transition-all duration-500">
              <div className="flex items-start space-x-4">
                <Icon className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-sm text-white/80 mb-2 tracking-wider group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/5">
        <h3 className="font-display text-sm text-white/80 mb-4 tracking-wider">
          FOLLOW US
        </h3>
        <div className="flex space-x-4">
          {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map(platform => (
            <a
              key={platform}
              href="#"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;