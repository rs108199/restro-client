"use client"

import Link from "next/link";
import { useState } from "react";
import LoginModal from "../Modal";
import LoginPage from "../LoginPage/page";
import RegistrationPage from "../LoginPage/Registration";

export default function DestNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [destDropDown, setDestDropDown] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>


            <div className="z-20 w-full max-w-[92%] mx-auto bg-[#000000A6] rounded-[12px]">
                <div className="mx-auto flex items-center justify-between my-4 p-4 uls:mx-0">
                    <div className="flex justify-around">
                        <div className="text-white font-serif text-lg tracking-wide">
                            <img src="nav_logo.png" alt="" width={"80%"} />
                        </div>

                        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/90 mx-4">
                            <div onClick={() => setDestDropDown(x => !x)} className="rounded-full border px-5 py-2 text-xs uppercase hover:bg-white hover:text-black transition">Destinations</div>
                            <Link href="#">About Us</Link>
                            <Link href="#">Contact Us</Link>
                        </div>

                    </div>

                    <div>
                      <button className="rounded-full border bg-[#F1E8D5] px-5 py-2 text-xs uppercase tracking-wider text-black hover:bg-white hover:text-black transition">
                        Book Table
                    </button>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="rounded-full border bg-[#F1E8D5] px-5 py-2 text-xs uppercase tracking-wider text-black hover:bg-white hover:text-black transition">
                        Login / Join
                    </button>  
                    </div>
                    

                </div>

                {
                    destDropDown &&
                    <div className="mx-5 border border-solid bg-white py-2 rounded-xl">
                        <div className="w-full grid grid-cols-[1fr_1fr_1fr_1fr]">
                            <DestCard />
                            <DestCard />
                            <DestCard />
                            <DestCard />

                        </div>
                    </div>
                }

                <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}>
                    {showLogin ? <LoginPage setShowLogin={setShowLogin}/> : <RegistrationPage setShowLogin={setShowLogin}/>}
                </LoginModal>
            </div>

        </>

    );
}


function DestCard() {
    return (<>
        <div className="flex justify-center">
            <img src="goa.jpg" alt="" />
        </div>
    </>)


}
