import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
  
const Register = () => {

  const [ visibility, setVisibility ] = useState(false);

  const handlePassword = () => {

    setVisibility(!visibility);

  }

  return (
    <>
        <div className='block lg:grid lg:grid-cols-2 min-h-screen w-full'>
            <div className='bg-green-500 hidden lg:block'>
                <div className='m-20'>

                    <div className="">
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

                    <div className='mt-20'>
                        <h1 className='text-5xl font-bold text-white'>
                            Ominicom
                        </h1>

                        <p className='mt-8 text-white text-lg max-w-md'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti beatae vero fugiat error, qui non praesentium doloribus. Magnam, totam!
                        </p>
                    </div>


                </div>
            </div>

            {/* this shows only on lg screen */}
            <div className='bg-green-500 block lg:hidden'>
                <div className='p-6 md:p-12 lg:p-16 xl:p-20'>
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

            <div className='bg-white'>
                <div className='m-6 mt-10 md:m-12 lg:m-16 xl:m-20'>
                    <h1 className='text-3xl md:text-4xl font-bold text-black'>
                        Login
                    </h1>

                    <div className='mt-12'>
                        <div className='space-y-10'>
                            <div className='inline-block w-full md:w-4/5 lg:min-w-form relative'>
                                <input type='text' className='px-5 py-3 outline-none border border-gray-400 rounded-lg hover:border-gray-600 w-full' placeholder='Email*'/>
                            </div>

                            <div className='inline-block w-full md:w-4/5 lg:min-w-form  relative'>
                                <input type={ visibility ? 'text' : 'password' } className='px-5 py-3 outline-none border border-gray-400 rounded-lg hover:border-gray-600 w-full' placeholder='Password*'/>
                                <span 
                                    className='absolute end-3 top-2 text-slate-400 cursor-pointer'
                                    onClick={handlePassword}
                                >
                                 {visibility ? 'hide' : 'show'}
                                </span>
                                <span className="text-red-500 block text-sm mt-2">Password most at least 6 characters</span>
                            </div>

                            <div className='inline-block min-w-form relative'>
                                <button className='px-12 py-4 bg-green-500 hover:bg-green-600 rounded-full text-white font-bold'>Sign in</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='space-y-6'>
                            <div>
                                <Link href={"/reset-password"} className='text-green-500 text-lg tracking-wider'>Reset your password</Link>
                            </div>

                            <div>
                                <p className='text-gray-400'>
                                    Don't have a Ominicom ID?
                                    <Link href={"/reset-password"} className='text-green-500 text-lg tracking-wider'> Sign up here.</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12'>
                        <span className='text-gray-400 text-xs max-w-max'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio qui recusandae tempore doloribus omnis error voluptates harum fugit quas blanditiis! <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nesciunt at eaque impedit totam tempore. 
                        </span>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
  
export default Register;


