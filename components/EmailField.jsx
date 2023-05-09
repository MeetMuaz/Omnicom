import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { validateEmail } from '../utils/validation';

export default function EmailField ({ register, errors }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='inline-block w-full md:w-4/5 lg:min-w-form relative'>
      <input
        {...register('email', { required: true, validate: validateEmail })}
        type='text'
        id='email' 
        name="email"
        className='px-5 py-3 focus:outline-none border border-gray-400 rounded-lg hover:border-gray-600 w-full' 
        placeholder='Email*'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label 
        htmlFor="email" 
        className={`absolute px-2 left-5 -top-3 tracking-wider bg-white text-green-500 text-base transition-all pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0'}`}
      >
        Email
      </label>
      {errors.email && errors.email.type === "required" && <span className="text-red-500 block text-xs">This field is required</span>}
      {errors.email && errors.email.type === "validate" && <span className="text-red-500 block text-xs">Please enter a valid email address</span>}
    </div>
  );
}
