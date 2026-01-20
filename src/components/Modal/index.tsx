"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import React from "react";

export default function LoginModal({ children, isOpen, setIsOpen }: { children: React.ReactNode; isOpen: boolean; setIsOpen: (value: boolean) => void; }) {

    return (
        <>

            <Dialog
                open={isOpen}
                onClose={setIsOpen}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/60" aria-hidden="true" />


                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mb-4 text-sm text-gray-500 hover:text-black"
                        >
                            Close
                        </button>

                        {children}
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
