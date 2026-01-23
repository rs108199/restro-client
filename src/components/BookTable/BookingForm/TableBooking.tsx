import { Users } from 'lucide-react'
import React from 'react'

function TableBooking() {
    return (
        <div className='bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.8)_100%)] p-4'>
            <div className="text-center">
                <div className="font-cinzel text-[32px]">DINING RESERVATION</div>
                <div >Experience culinary excellence in our main dining room.</div>

            </div>

            <div className='grid grid-cols-[1fr_1fr] gap-4'>
                <div>
                    <label>Count</label>
                    <div className='flex items-center w-full px-2 h-8 rounded-[12px] border border-white/10'>
                        <div className='flex justify-between w-full'>
                            <div className='flex'>
                                <div><Users /></div>
                                <div className='pl-8'>4</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex'>
                                    <div className='flex items-center px-4 bg-[#F1E8D5] text-black rounded-l-[12px]'>-</div>
                                    <div className='flex items-center px-4 bg-[#F1E8D5] text-black rounded-r-[12px]'>+</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label>Date</label>
                    <div className='w-full h-8 border border-solid rounded-[12px]'>
                        <div className='flex w-full'>
                            <div>Pick a date</div>
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-[1fr_1fr] gap-4'>
                <div>
                    <label>Preferred Time</label>
                    <div className='w-full h-8 grid grid-cols-2 gap-2'>
                        <div className='border border-gray-700 rounded-[12px]'>
                            
                        </div>
                        <div className='border border-gray-700 rounded-[12px]'></div>
                       
                    </div>
                </div>
                <div>
                    <label>Seating Preference</label>
                    <div className='w-full h-8 border border-solid rounded-[12px]'>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TableBooking