"use client";
import { mdiGithub, mdiGoogle } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import TermAndCondition from "../components/TermAndCondition";

const RegisterPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Logging in with:", email, password, confirmPassword);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  return (
    <div className="all-center">
      <div className="w-96">
        <p className="text-4xl">Get started</p>
        <p className="text-[#7c7c7c]">Create a new account</p>
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
            <PasswordInput
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              className="mb-2"
            />
          </div>
          <div className="mb-4">
            <p className="text-[#7c7c7c]">Confirm Password</p>
            <PasswordInput
              placeholder="Enter Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="mb-2"
            />
          </div>

          <button className="primary w-96" type="submit">
            Login
          </button>
        </form>
        <br />
        <p className="text-[#7c7c7c] all-center">
          Have an account?
          <span className="ml-2 text-white underline">
            <Link href="/login">Login Now</Link>
          </span>
        </p>
        <br />
        <TermAndCondition />
      </div>
    </div>
  );
};

export default RegisterPage;
