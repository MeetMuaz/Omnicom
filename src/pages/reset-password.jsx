import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import PasswordField from "../../components/PasswordField";
import SubmitButton from "../../components/SubmitButton";
import FormHeader from "../../components/FormHeader";
import FormLink from "../../components/FormLink";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import FormLogo from "../../components/SmallFormLogo";
import EmptySpace from "../../components/EmptySpace";
import LargeFormLogo from "../../components/LargeFormLogo";
import FormIntro from "../../components/FormIntro";
import ConfirmPasswordField from "../../components/ConfirmPasswordField";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <div className="block lg:grid lg:grid-cols-2 min-h-screen w-full">
        <div className="bg-green-500 hidden lg:block">
          <div className="flex justify-between flex-col w-full min-h-screen p-6 pt-10 pd:m-12 lg:p-16 xl:p-20">
            {/* first section */}
            <LargeFormLogo />

            {/* second section */}
            <FormIntro />

            {/* third section */}
            <EmptySpace />
          </div>
        </div>

        <div className="bg-white flex justify-between flex-col">
          <div className="flex justify-between flex-col w-full min-h-screen p-6 lg:p-16 xl:p-20">
            {/* first section */}
            <EmptySpace />

            {/* this shows only on lg to small screen */}
            <FormLogo />

            {/* second section */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-7 mt-12">
                <FormHeader name="Reset Password" />
                <PasswordField
                  register={register}
                  errors={errors}
                  label="New Password"
                  placeholder="New Password*"
                />
                <ConfirmPasswordField
                  register={register}
                  errors={errors}
                  //   confirmPassword={confirmPassword}
                  //   password={password}
                />
                <SubmitButton name="Submit" />
                <FormLink
                  link="/login"
                  name=" Login here."
                  description="Already have an Ominicom Account?"
                />
              </div>
            </form>

            {/* third section */}
            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
