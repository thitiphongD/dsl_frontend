"use client";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Logging in with:", email);
  };

  return (
    <div className="flex items-center justify-center h-[75vh] overflow-hidden">
      <div className="w-96">
        <p className="text-4xl">Get started</p>
        <p className="text-[#7c7c7c]">
          Type in your email and we&apos;ll send you a link to reset your
          password
        </p>
        <br />

        <form onSubmit={handleSubmit}>
          <div className="mb-10">
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
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-[#7c7c7c]"></div>
          </div>
          <button className="primary w-96" type="submit">
            Send Reset Email
          </button>
        </form>
        <br />
        <p className="text-[#7c7c7c] all-center">
          Already have an account?
          <span className="ml-2 text-white underline">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
