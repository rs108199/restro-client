"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className="min-h-75 flex items-center justify-center px-4">
      <section
        aria-labelledby="login-heading"
        className="w-full max-w-md bg-white rounded-md shadow-md p-8"
      >
        {/* Heading */}
        <h1
          id="login-heading"
          className="text-3xl font-semibold text-center mb-6"
        >
          Swagatam
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-describedby="login-instructions"
        >
          <p id="login-instructions" className="sr-only">
            Enter your username or email and password to sign in.
          </p>

          {/* Username / Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username or Email
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
          <div>
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

          {/* Human Verification (Accessible Mock) */}

          {/* Sign In Button */}
          <button
            type="submit"
            disabled
            aria-disabled="true"
            className="w-full bg-[black] text-white py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Sign In
          </button>
        </form>

        {/* Footer Navigation */}
        <nav
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
        </nav>
      </section>
    </main>
  );
}



