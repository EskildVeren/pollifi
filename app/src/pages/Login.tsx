import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { logWithEmail } from "@/utils/login";
import { useState } from "react";

export type LoginInformation = {
  username: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<LoginInformation>();
  const [status, setStatus] = useState("Not logged in");

  const onSubmit: SubmitHandler<LoginInformation> = (data) => {
    const user = logWithEmail(data, setStatus);
    console.log(user);
  };

  return (
    <form className="w-full h-full flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-2xs aspect-square">
        <p className="text-center mt-2 mb-2">{status}</p>
        <Input placeholder="username" {...register("username")} />
        <Input placeholder="password" {...register("password")} />
        <Input type="submit" className="cursor-pointer" />
      </Card>
    </form>
  );
}

export default Login;
