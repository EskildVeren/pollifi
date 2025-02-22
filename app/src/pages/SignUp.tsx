import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signUpWithEmailAndPassword } from "@/utils/signup";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";


export type SignUpInformation = {
    email: string;
    password: string;
    passwordRepeat: string;
}

function SignUp(){
    const {register, handleSubmit} = useForm<SignUpInformation>();
    const [status, setStatus] = useState("Not signed up");

    const onSubmit: SubmitHandler<SignUpInformation> = (credentials) =>{
        if (credentials.password !== credentials.passwordRepeat){
            setStatus("Password and Password-repeat do not match! You are not signed up")
            return;
        }
        const userEmail = signUpWithEmailAndPassword(credentials, setStatus);
        console.log(userEmail)
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sign up</CardTitle>
              <CardDescription>Enter your email and password below to create an account</CardDescription>
              <CardDescription>{status}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required {...register("email")} />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required {...register("password")} />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Repeat password</Label>
                    </div>
                    <Input id="passwordRepeat" type="password" required {...register("passwordRepeat")} />
                  </div>
                  <Button type="submit" className="w-full cursor-pointer">
                    SignUp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}
export default SignUp;