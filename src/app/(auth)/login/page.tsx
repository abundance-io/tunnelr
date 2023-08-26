import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginInput {
  username: "string";
  password: "string";
}

const onSubmit: SubmitHandler<LoginInput> = () => {};

export default function Login() {
  const { register, handleSubmit } = useForm<LoginInput>();
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col justify-center items-center">
        <Image src="/images/logo.svg" alt="" width={33} height={27} />
        <form></form>
      </div>
    </div>
  );
}
