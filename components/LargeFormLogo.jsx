import React from 'react';
import Image from 'next/image';

export default function LargeFormLogo () {
  return (
    <>
    <div>
        <Image 
            src='/omnicom.png'
            alt='logo'
            layout='responsive'
            maxWidth="max-content"
            maxHeight="max-content"
            width={500}
            height={300}
        />
    </div>
    </>
  )
}
