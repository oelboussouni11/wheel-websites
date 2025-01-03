import React from 'react';
import { Wind } from 'lucide-react';

interface TechnicalSpecsProps {
  isInView: boolean;
}

const TechnicalSpecs = ({ isInView }: TechnicalSpecsProps) => (
  <div className={`transition-all duration-1000 delay-300 ${
    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}>
    <div className="relative">
      <div className="absolute -inset-1">
        <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
      </div>
      
      <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Simple Aero Visualization */}
          <div className="relative aspect-square bg-gradient-to-br from-black/50 to-black/30 rounded-lg overflow-hidden">
            {/* Simple flow lines */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-0.5 w-full left-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-[flow_3s_linear_infinite]"
                  style={{
                    top: `${20 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            {/* Central wheel representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-12 border border-white/10 rounded-full" />
                <div className="absolute -inset-16 border border-white/5 rounded-full" />
                <Wind className="w-20 h-20 text-white/20" strokeWidth={1} />
              </div>
            </div>

            {/* Key metrics */}
            <div className="absolute inset-x-0 bottom-8 flex justify-center space-x-8">
              <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <div className="text-white/80 text-lg font-light">-18%</div>
                <div className="text-xs text-white/40">Drag</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <div className="text-white/80 text-lg font-light">+35%</div>
                <div className="text-xs text-white/40">Cooling</div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl text-white tracking-wider">
              AERODYNAMIC EFFICIENCY
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Our advanced wheel design incorporates sophisticated aerodynamic principles, 
              validated through extensive wind tunnel testing and computational fluid dynamics 
              simulations. The result is a wheel that not only enhances vehicle performance 
              but also optimizes brake cooling and reduces turbulence.
            </p>
            
            <div className="space-y-4">
              <div className="bg-black/30 p-6 rounded-lg border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80">Performance Metrics</span>
                  <div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <span className="text-white/40 text-sm">CFD Validated</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Drag Coefficient", value: "0.275 Cd" },
                    { label: "Air Mass Flow", value: "460 CFM" },
                    { label: "Heat Dissipation", value: "+35%" },
                    { label: "Wake Turbulence", value: "-22%" }
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-zinc-400">{label}</span>
                      <span className="text-white font-light">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TechnicalSpecs;