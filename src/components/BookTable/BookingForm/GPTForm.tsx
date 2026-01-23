"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [guests, setGuests] = useState(4);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      {/* Card */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 p-8 shadow-2xl text-white">
        
        {/* Tabs */}
        <div className="flex gap-6 mb-8">
          <button className="flex items-center gap-2 rounded-full bg-[#e1a48a] text-black px-6 py-2 text-sm font-semibold">
            🍽 BOOK A TABLE
          </button>
          <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm text-white/70 hover:text-white">
            🍸 BOOK A LOUNGE
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-serif tracking-wide mb-2">
          DINING RESERVATION
        </h1>
        <p className="text-center text-white/60 mb-8">
          Experience culinary excellence in our main dining room.
        </p>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Number of Guests */}
          <div>
            <label className="text-sm text-white/70 mb-2 block">
              Number of Guests
            </label>
            <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-white/70">👤</span>
                <span>{guests}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f2e6dc] rounded-full px-2 py-1">
                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black font-bold"
                >
                  –
                </button>
                <button
                  onClick={() => setGuests((g) => g + 1)}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-white/70 mb-2 block">Date</label>
            <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl px-4 py-3">
              <input
                type="date"
                className="bg-transparent outline-none text-white w-full"
              />
              <span className="text-white/60 ml-2">📅</span>
            </div>
          </div>

          {/* Preferred Time */}
          <div>
            <label className="text-sm text-white/70 mb-2 block">
              Preferred Time
            </label>
            <div className="grid grid-cols-2 gap-3">
              <select className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none">
                <option>From</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
              </select>
              <select className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none">
                <option>To</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
          </div>

          {/* Seating Preference */}
          <div>
            <label className="text-sm text-white/70 mb-2 block">
              Seating Preference
            </label>
            <select className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none w-full">
              <option>Main Dining Room</option>
              <option>Outdoor Seating</option>
              <option>Private Room</option>
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div className="mt-6">
          <label className="text-sm text-white/70 mb-2 block">
            Special Requests (Optional)
          </label>
          <textarea
            rows={4}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none resize-none"
            placeholder=""
          />
        </div>

        {/* Submit */}
        <button className="mt-8 w-full rounded-full bg-[#e1a48a] text-black font-semibold tracking-wide py-4 hover:opacity-90 transition">
          PROCEED TO CONFIRM
        </button>
      </div>
    </div>
  );
}
