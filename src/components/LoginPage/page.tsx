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
    <main className="min-h-[300px] flex items-center justify-center px-4">
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



// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function LoginPage() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log({ email, password });
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//             <div className="w-full max-w-md bg-white rounded-md shadow-md p-8">
//                 {/* Logo */}
//                 <div className="flex justify-center mb-6">
//                     <div className="text-3xl font-semibold">Swagatam</div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {/* Username / Email */}
//                     <input
//                         type="text"
//                         placeholder="Username or E-mail"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
//                     />

//                     {/* Password */}
//                     <div className="relative">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
//                         />
//                     </div>

//                     {/* Human Verification (Mock UI) */}
//                     <div className="border rounded-md p-4 flex items-center gap-3">
//                         <input type="checkbox" className="w-5 h-5" />
//                         <span className="text-sm text-gray-700">Verify you are human</span>
//                         <span className="ml-auto text-xs text-gray-400">Cloudflare</span>
//                     </div>

//                     {/* Sign In Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-gray-300 text-white py-3 rounded-md cursor-not-allowed"
//                     >
//                         Sign In
//                     </button>
//                 </form>

//                 {/* Footer Links */}
//                 <div className="flex justify-between mt-6 text-sm text-blue-600">
//                     <button className="hover:underline">Forgot Password?</button>
//                     <button className="hover:underline">Sign Up</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
