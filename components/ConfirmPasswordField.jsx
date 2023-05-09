import React from 'react';
import { useState } from 'react';
import { validateConfirmPassword } from '../utils/validation';

export default function ConfirmPasswordField ({ register, errors }) {

  const [ visibility, setVisibility ] = useState(false);
  const [ isFocused, setIsFocus] = useState(false);

  const handlePassword = () => {

    setVisibility(!visibility);

  }

  return (
    <>
      <div className='inline-block w-full md:w-4/5 lg:min-w-form  relative'>
          <input 
              {...register("confirmPassword", { required: true, validate: validateConfirmPassword  })}
              name='confirmPassword'
              type={ visibility ? 'text' : 'password' } 
              id='confirm-password' className='px-5 py-3 focus:outline-none border border-gray-400 rounded-lg hover:border-gray-600 w-full' 
              placeholder='Confirm Password*'
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
          />
          <span 
              className='absolute end-3 top-2 text-slate-400 cursor-pointer'
              onClick={handlePassword}
          >
              {visibility ? 'hide' : 'show'}
          </span>
          <label 
              htmlFor="confirm-password" 
              className={`absolute px-2 left-5 -top-3 tracking-wider bg-white text-green-500 text-base transition-all  pointer-events-none ${ isFocused ? 'opacity-100' : 'opacity-0'}`}
          >
              Confirm Password
          </label>
           {errors.confirmPassword && errors.confirmPassword.type === "required" && <span className="text-red-500 block text-xs">This field is required</span>}
           {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span className="text-red-500 block text-xs">Password do not match</span>}
      </div>
    </>
  )
}
