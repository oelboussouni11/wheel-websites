import React from 'react';
import { Circle, Weight, Ruler, Palette } from 'lucide-react';

const specs = [
  { icon: Circle, label: 'Diameter', value: '19" - 22"' },
  { icon: Weight, label: 'Weight', value: '8.5 - 12.2 kg' },
  { icon: Ruler, label: 'Width', value: '8.5" - 11.5"' },
  { icon: Palette, label: 'Finishes', value: '6 Options' },
];

const FeaturedSpecs = () => (
  <div className="space-y-8">
    <div>
      <h3 className="font-display text-2xl text-white mb-2 tracking-wider">BEOM FORGED RS-01</h3>
      <p className="text-zinc-400 mb-6">
        Precision-engineered forged wheels, crafted for ultimate performance and unmatched style.
      </p>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {specs.map(({ icon: Icon, label, value }) => (
          <div key={label} className="border border-white/10 rounded-lg p-4 bg-black/30">
            <Icon className="text-white/80 mb-2" size={20} strokeWidth={1} />
            <div className="text-sm text-white/60">{label}</div>
            <div className="text-white font-semibold">{value}</div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="text-2xl text-white">From $2,199 <span className="text-sm text-zinc-400">per wheel</span></div>
        <button className="w-full bg-white text-black font-display tracking-wider py-4 px-8 rounded-lg hover:bg-white/90 transition-colors">
          CONFIGURE NOW
        </button>
      </div>
    </div>
  </div>
)

export default FeaturedSpecs;