import React from "react";
import { useState } from "react";
import { validatePassword } from "../utils/validation";

export default function PasswordField({
  register,
  errors,
  label,
  placeholder,
}) {
  const [visibility, setVisibility] = useState(false);
  const [isFocused, setIsFocus] = useState(false);

  const handlePassword = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <div className="inline-block w-full md:w-4/5 lg:min-w-form  relative">
        <input
          {...register("password", {
            required: true,
            validate: validatePassword,
          })}
          name="password"
          type={visibility ? "text" : "password"}
          id="password"
          className="px-5 py-3 focus:outline-none border border-gray-400 rounded-lg hover:border-gray-600 w-full"
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <span
          className="absolute end-3 top-2 text-slate-400 cursor-pointer"
          onClick={handlePassword}
        >
          {visibility ? "hide" : "show"}
        </span>
        <label
          htmlFor="password"
          className={`absolute px-2 left-5 -top-3 tracking-wider bg-white text-green-500 text-base transition-all  pointer-events-none ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </label>
        {errors.password && errors.password.type === "required" && (
          <span className="text-red-500 block text-xs">
            This field is required
          </span>
        )}
        {errors.password && errors.password.type === "validate" && (
          <span className="text-red-500 block text-xs">
            Password most at least 6 characters
          </span>
        )}
      </div>
    </>
  );
}
