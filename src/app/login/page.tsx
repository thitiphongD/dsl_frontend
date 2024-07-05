"use client";
import { mdiGithub, mdiGoogle } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // router.push("/dashboard");
  };
  return (
    <div className="all-center">
      <div>
        <p className="text-4xl">Welcome back</p>
        <p className="text-[#7c7c7c]">Sign in to your account</p>
        {/* <label>Email</label>
        <input type="email" />
        <span>Password</span>
        <input type="password" /> */}
        <br />
        <button className="all-center default gap-2 w-96">
          <Icon path={mdiGithub} size={1} />
          Continue With Github
        </button>
        <br />
        <button className="all-center default gap-2 w-96">
          <Icon path={mdiGoogle} size={1} />
          Continue With Google
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-[#7c7c7c]"></div>
          <span className="flex-shrink mx-4 text-[#7c7c7c]">or</span>
          <div className="flex-grow border-t border-[#7c7c7c]"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-[#7c7c7c]">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-96 placeholder-[#7c7c7c]"
            />
          </div>
          <div className="mb-4">
            <div className="flex-center-between">
              <p className="text-[#7c7c7c]">Password</p>
              <Link className="text-[#7c7c7c] text-sm" href="/forgotPassword">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-96 placeholder-[#7c7c7c]"
            />
          </div>
          <button className="default" type="submit">
            Login
          </button>
        </form>
        {/* <Link href="/register">to Register</Link> */}
      </div>
    </div>
  );
};

export default LoginPage;
