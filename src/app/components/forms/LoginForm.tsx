"use client";
import Link from "next/link";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { loginUserAction } from "../../data/actions/auth.actions";
import { useFormState } from "react-dom";
import { ZodErrors } from "../custom/ZodErrors";

const INITIAL_STATE = {
  data: null,
};

const LoginForm = () => {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);
  console.log(formState);

  return (
    <form action={formAction}>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your details to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="username"
            />
            <ZodErrors error={formState?.zodErrors?.username} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />
            <ZodErrors error={formState?.zodErrors?.password} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <button className="w-full">Sign In</button>
        </CardFooter>
      </Card>
      <div className="mt-4 text-center text-sm">
        Dont have an account?
        <Link className="underline ml-2" href="register">
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
