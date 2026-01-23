"use client";

import { EyeOff } from "lucide-react";
import { useState } from "react";

export default function RegistrationPage({
  setShowLogin,
}: {
  setShowLogin: (x: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className=" flex items-center justify-center px-4 ">
      <section
        aria-labelledby="login-heading"
        className="w-full bg-white rounded-[12px] shadow-md p-8 bg-linear-to-b from-[#F1E8D5] to-[#FFFFFF]"
      >
        {/* Heading */}
        <h1
          id="login-heading"
          className="text-[22px] text-center my-6 font-instr_serif"
        >
          An exclusive circle awaits. Join in now
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-describedby="login-instructions"
        >
          {/* <p id="login-instructions" className="sr-only">
            Enter your username or email and password to sign in.
          </p> */}

          {/* Username / Email */}
          <div>
            <label
              htmlFor="mobileNo"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile
            </label>
            <input
              id="mobile"
              name="mobileNo"
              type="text"
              autoComplete="mobileNo"
              required
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="mt-1 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          {/* Password */}
          <div className="my-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div className="flex justify-end">
            <div className="flex text-right">
              <div className="text-[14px] mr-2">Show Password </div>
              <EyeOff />
            </div>
          </div>

          {/* Human Verification (Accessible Mock) */}

          {/* Sign In Button */}
          <button
            type="submit"
            disabled
            aria-disabled="true"
            className="my-4 w-full bg-[black] text-white py-3 rounded-[24px]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Continue
          </button>
        </form>
        <div className="flex justify-center">
          <div>
            <span className="text-[14px] mb-6">
              Already have an account?{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                 Login
              </span>
            </span>
          </div>
        </div>
        <div className="mb-6" />
        {/* <nav
          className="flex justify-between mt-6 text-sm"
          aria-label="Authentication links"
        >
          <a
            href="#"
            className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Forgot Password?
          </a>
          <a
            href="#"
            className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </a>
        </nav> */}
      </section>
    </main>
  );
}
