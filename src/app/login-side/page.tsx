"use client"

import SlideLogin from '@/src/components/LoginPage/SlideLogin';
import StyledLogin from '@/src/components/LoginPage/StyledLogin';
import LoginModal from '@/src/components/Modal';
import React, { useState } from 'react'

function page() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>


            {/* <div onClick={() => setIsOpen(true)}>Click</div>
            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <SlideLogin />
            </LoginModal> */}

            <StyledLogin/>

        </>
    )
}

export default page