"use client";

import { Utensils, Wine } from "lucide-react";
import { useState } from "react";

export default function DiningReservationForm() {
    const [table, setTable] = useState(true);


    return (
        <div className="min-h-25 bg-[#000000A6] px-4">
            <div className="grid grid-cols-[1fr_1fr]">
                <div className={`flex ${table ? "bg-[#D29784] px-4" : ""}`} >
                    <div><Utensils /></div>
                    <div>Book Table</div>

                </div>
                <div className="flex px-3">
                    <div><Wine /></div>
                    <div>Book Lounge</div>

                </div>
            </div>
        </div>
    );
}
