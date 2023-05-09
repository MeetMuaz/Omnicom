import React from 'react';

export default function SubmitButton ( { name } ) {
  return (
    <>
      <div className='inline-block min-w-form relative'>
          <button 
            type='submit'
            className='px-12 py-4 bg-green-500 hover:bg-green-600 rounded-full text-white font-bold'
          >
            {name}
          </button>
      </div>
    </>
  )
}
