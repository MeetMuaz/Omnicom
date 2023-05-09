import React from 'react';
import { useState } from 'react';
import { validateName } from '../utils/validation';


export default function NameField ({ register, errors }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className='inline-block w-full md:w-4/5 lg:min-w-form  relative'>
          <input 
              {...register("name", { required: true, validate: validateName })}
              name='name'
              type='text' 
              id='name' className='px-5 py-3 focus:outline-none border border-gray-400 rounded-lg hover:border-gray-600 w-full' 
              placeholder='Name*'
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
          />
          <label 
              htmlFor="name" 
              className={`absolute px-2 left-5 -top-3 tracking-wider bg-white text-green-500 text-base transition-all  pointer-events-none ${ isFocused ? 'opacity-100' : 'opacity-0'}`}
          >
              Name
          </label>
          {errors.name && errors.name.type === "required" && <span className="text-red-500 block text-xs">This field is required</span>}
          {errors.name && errors.name.type === "validate" && <span className="text-red-500 block text-xs">Enter a valid name</span>}
      </div>
    </>
  )
}
