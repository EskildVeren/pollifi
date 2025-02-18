import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginWithEmailAndPassword } from "@/utils/login";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export type LoginInformation = {
  username: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<LoginInformation>();
  const [status, setStatus] = useState("Not logged in");

  const onSubmit: SubmitHandler<LoginInformation> = (data) => {
    const user = loginWithEmailAndPassword(data, setStatus);
    console.log(user);
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
            <CardDescription>{status}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required {...register("username")} />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required {...register("password")} />
                </div>
                <Button type="submit" className="w-full cursor-pointer">
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
