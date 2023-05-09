import React from 'react';

export default function FormHeader ( { name } ) {

  return (
    <>
        <h1 className='text-3xl md:text-4xl font-bold text-black'>
            {name}
        </h1>
    </>
  )
}

