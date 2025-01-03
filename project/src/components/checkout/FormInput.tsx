import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

const FormInput = ({ 
  label, 
  name, 
  type, 
  required, 
  placeholder,
  value,
  onChange,
  maxLength
}: FormInputProps) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm text-white/80">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-500
        focus:outline-none focus:ring-1 focus:ring-white/20 hover:border-white/20 transition-colors"
    />
  </div>
);

export default FormInput;