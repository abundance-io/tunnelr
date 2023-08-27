"use client";
import Image from "next/image";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface SignInInput {
  email: "string";
  password: "string";
  confirmPassword: "string";
}

const onSubmit: SubmitHandler<SignInInput> = () => {};

export default function Login() {
  const { register, watch, formState, handleSubmit } = useForm<SignInInput>({
    mode: "onTouched",
  });
  const { errors, isValid } = formState;
  const password = useRef({});
  password.current = watch("password");

  return (
    <div className="flex justify-center items-center h-[100vh] transition-all">
      <div className="flex flex-col justify-between items-center font-light">
        <Image
          src="/images/logo.svg"
          alt=""
          width={33}
          height={27}
          className="mb-[100px]"
        />
        <div className="flex flex-col bg-[#161D2F]  justify-between rounded-lg min-h-[60vh] min-w-[32vw] p-10">
          <p className="text-3xl text-white py-4">Sign Up</p>
          <div className="flex flex-col justify-between">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col w-full my-4">
                {errors.email ? (
                  <div className="flex justify-end text-xs text-[#FC4747]">
                    {errors.email?.message}
                  </div>
                ) : (
                  ""
                )}
                <input
                  className={`bg-transparent font-light ${
                    errors.email
                      ? "border-b-[#FC4747]"
                      : "border-b-[#5A698F] hover:border-b-white"
                  }  border-b-[1.5px] pl-4 pt-2 pb-4 w-full text-white text-sm placeholder-[#96abd6]/70`}
                  placeholder="Email address"
                  {...register("email", { required: "Can't be empty" })}
                />
              </div>
              <div className="my-4">
                {errors.password ? (
                  <div className="flex justify-end text-xs text-[#FC4747]">
                    {errors.password?.message}
                  </div>
                ) : (
                  ""
                )}
                <input
                  type="password"
                  placeholder="Password"
                  className={`
                  bg-transparent font-light  ${
                    errors.password
                      ? "border-b-[#FC4747]"
                      : "border-b-[#5A698F] hover:border-b-white"
                  }  border-b-[1.5px] pl-4 pt-2 pb-4 w-full text-white text-sm placeholder-[#96abd6]/70
                  `}
                  {...register("password", {
                    pattern: {
                      value: /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/,
                      message: "password error message",
                    },
                    required: "Can't be empty",
                  })}
                />
              </div>

              <div className="my-4">
                {errors.confirmPassword ? (
                  <div className="flex justify-end text-xs text-[#FC4747]">
                    {errors.confirmPassword?.message}
                  </div>
                ) : (
                  ""
                )}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={`
                  bg-transparent font-light  ${
                    errors.confirmPassword
                      ? "border-b-[#FC4747]"
                      : "border-b-[#5A698F] hover:border-b-white"
                  }  border-b-[1.5px] pl-4 pt-2 pb-4 w-full text-white text-sm placeholder-[#96abd6]/70
                  `}
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password.current || "Passwords must match",
                    required: "Can't be empty",
                  })}
                />
              </div>
              <button
                type="submit"
                disabled={!isValid}
                className={`w-full my-10 min-h-[48px] rounded-md ${
                  !isValid
                    ? "bg-gray-500 text-gray-800"
                    : "bg-[#FC4747] text-white"
                }`}
              >
                {" "}
                Create an account
              </button>
            </form>
          </div>
          <div className="flex justify-center">
            <p className="text-white text-sm">
              Already have an account?
              <a className="text-[#FC4747] !important">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
