import React from 'react';
import Link from 'next/link';

export default function FormLink ( { description, name, link } ) {

  return (
    <>
      <div>
        <p className='text-gray-400'>
            {description}
            <Link href={link} className='text-green-500 text-lg tracking-wider'>{name}</Link>
        </p>
    </div>
    </>
  )
}

