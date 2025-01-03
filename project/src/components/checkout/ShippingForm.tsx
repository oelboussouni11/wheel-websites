import React from 'react';
import FormInput from './FormInput';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface ShippingFormProps {
  values: ShippingInfo;
  onChange: (values: ShippingInfo) => void;
}

const ShippingForm = ({ values, onChange }: ShippingFormProps) => {
  const handleChange = (field: keyof ShippingInfo) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({
      ...values,
      [field]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl text-white tracking-wider">SHIPPING INFORMATION</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            required
            value={values.firstName}
            onChange={handleChange('firstName')}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            required
            value={values.lastName}
            onChange={handleChange('lastName')}
          />
        </div>
        
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange('email')}
        />
        
        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          required
          value={values.phone}
          onChange={handleChange('phone')}
        />
        
        <FormInput
          label="Address"
          name="address"
          type="text"
          required
          value={values.address}
          onChange={handleChange('address')}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="City"
            name="city"
            type="text"
            required
            value={values.city}
            onChange={handleChange('city')}
          />
          <FormInput
            label="Postal Code"
            name="postalCode"
            type="text"
            required
            value={values.postalCode}
            onChange={handleChange('postalCode')}
          />
        </div>
        
        <FormInput
          label="Country"
          name="country"
          type="text"
          required
          value={values.country}
          onChange={handleChange('country')}
        />
      </div>
    </div>
  );
};

export default ShippingForm;