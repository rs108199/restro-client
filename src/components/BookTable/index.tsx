"use client"
import DiningReservationForm from "./TableForm"

function BookTable() {
    return (
        <div className='relative'>
            <img src="luxuryInterior.jpg" alt="" width={"100%"} className=""/>

            <div className="absolute top-0 h-full w-full flex justify-center items-center ">
                <div className='mx-[7%] w-full max-w-360 flex justify-center'>
                    <div className='w-111.25 text-white text-center' style={{border: "1px solid white"}}>
                        <DiningReservationForm/>
                    </div>
                    <div className="flex items-center justify-center md:justify-center">
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookTable