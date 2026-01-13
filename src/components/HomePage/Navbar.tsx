"use client"

import Link from "next/link";
import { useState } from "react";
import LoginModal from "../Modal";
import LoginPage from "../LoginPage/page";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="z-20 w-full max-w-[1420px] mx-auto ">
            <div className="mx-auto mx-8 flex items-center justify-between px-6 py-6 uls:mx-0">
                <div className="flex justify-around">
                    {/* Logo */}
                    <div className="text-white font-serif text-lg tracking-wide">
                        <img src="nav_logo.png" alt="" width={"80%"} />
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/90 mx-4">
                        <Link href="#">Destinations</Link>
                        <Link href="#">About Us</Link>
                        <Link href="#">Contact Us</Link>
                    </div>

                </div>


                {/* CTA */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full border bg-[#F1E8D5] px-5 py-2 text-xs uppercase tracking-wider text-black hover:bg-white hover:text-black transition">
                    Login / Join
                </button>

            </div>

            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <LoginPage />
            </LoginModal>
        </nav>
    );
}
