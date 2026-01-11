"use client";

import { Dialog } from "@headlessui/react";
import LoginPage from "../LoginPage/page";
import React from "react";

export default function LoginModal({children, isOpen, setIsOpen }: {children: React.ReactNode; isOpen: boolean; setIsOpen: (value: boolean) => void; }) {

    return (
        <>

            <Dialog
                open={isOpen}
                onClose={setIsOpen}
                className="relative z-50"
            >
                {/* Overlay */}
                <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

                {/* Fullscreen centering wrapper */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    {/* Modal panel */}
                    <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mb-4 text-sm text-gray-500 hover:text-black"
                        >
                            Close
                        </button>

                        {/* Your login UI */}
                        {children}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}
