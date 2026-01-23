"use client";

import { Utensils, Wine } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";

export default function DiningReservationForm() {
    const [table, setTable] = useState(true);


    return (
        <div className="bg-[#00000066] rounded-[12px]">
            <div className="grid grid-cols-[1fr_1fr] py-1">
                <div className={`flex justify-center mx-2 my-1 py-3 px-4 cursor-pointer ${table ? "bg-[#D29784] rounded-[8px]" : ""}`} onClick={() => setTable(true)}>
                    <div className="flex">
                        <div><Utensils /></div>
                        <div>Book Table</div>
                    </div>


                </div>
                <div className={`flex justify-center mx-2 my-1 py-3 px-4 cursor-pointer ${!table ? "bg-[#D29784] rounded-[8px]" : ""}`} onClick={() => setTable(false)} >
                    <div className="flex">
                        <div><Wine /></div>
                        <div>Book Lounge</div>
                    </div>

                </div>
                <div>

                </div>
            </div>

            <div>
                <BookingForm tableEnabled={table}/>
            </div>

        </div>
    );
}
