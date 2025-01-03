import React from 'react';

interface SpecsTableProps {
  style: string;
}

const SpecsTable = ({ style }: SpecsTableProps) => (
  <div className="space-y-4">
    <div className="font-display text-sm tracking-wider text-white/80">SPECIFICATIONS</div>
    <div className="border border-white/10 rounded-lg divide-y divide-white/10">
      {[
        { label: 'Construction', value: style },
        { label: 'Weight', value: '8.5 - 12.2 kg' },
        { label: 'Offset Range', value: '+15 to +45' },
        { label: 'Bolt Pattern', value: '5x112, 5x114.3' },
        { label: 'Load Rating', value: '850 kg' }
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center px-4 py-3">
          <span className="flex-1 text-white/60">{label}</span>
          <span className="text-white">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SpecsTable;