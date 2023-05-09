import React from 'react';
import Image from 'next/image';

export default function SmallFormLogo () {
  return (
    <>
        <div className='block lg:hidden'>
            <div>
                <Image 
                    src='/omnicom.png'
                    alt='logo'
                    layout='responsive'
                    maxWidth="max-content"
                    maxHeight="max-content"
                    width={300}
                    height={200}
                />
            </div>
        </div>
    </>
  )
}
