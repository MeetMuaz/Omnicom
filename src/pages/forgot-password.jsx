import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import EmailField from '../../components/EmailField';
import SubmitButton from '../../components/SubmitButton';
import FormHeader from '../../components/FormHeader';
import FormLink from '../../components/FormLink';
import PrivacyPolicy from '../../components/PrivacyPolicy';
import FormLogo from '../../components/SmallFormLogo';
import EmptySpace from '../../components/EmptySpace';
import LargeFormLogo from '../../components/LargeFormLogo';
import FormIntro from '../../components/FormIntro';
  
const ForgotPassword = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) =>  {
        try {

            const res = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data }),
            });

            const result = await response.json();
            console.log(result);
        
        } catch (error) {

            console.log(error);

        }
        reset();
    }
    


  return (
    <>
        <div className='block lg:grid lg:grid-cols-2 min-h-screen w-full'>
            <div className='bg-green-500 hidden lg:block'>
                <div className='flex justify-between flex-col w-full min-h-screen p-6 pt-10 pd:m-12 lg:p-16 xl:p-20'>

                    {/* first section */}
                    <LargeFormLogo />

                    {/* second section */}
                    <FormIntro />

                    {/* third section */}
                    <EmptySpace />

                </div>
            </div>


            <div className='bg-white flex justify-between flex-col'>
                <div className='flex justify-between flex-col w-full min-h-screen p-6 lg:p-16 xl:p-20'>

                    {/* first section */}
                    <EmptySpace />

                    {/* this shows only on lg to small screen */}
                    <FormLogo />
                    

                    {/* second section */}
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='space-y-7 mt-12'>
                            <FormHeader name="Forgot Password" />
                            <EmailField register={register} errors={errors}/>
                            <SubmitButton name="Submit" />
                            <FormLink 
                                link="/login" 
                                name=" Login here." 
                                description="Want to Try Again?" 
                            />
                        </div>
                    </form>

                    {/* third section */}
                    <PrivacyPolicy />
                
                </div>
            </div>
        </div>
    </>
  )
}
  
export default ForgotPassword;





