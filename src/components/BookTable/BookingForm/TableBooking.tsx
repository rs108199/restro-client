import { Users } from 'lucide-react'
import React from 'react'

function TableBooking() {
    return (
        <div className='bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.8)_100%)] p-4 h-[600px]'>
            <div className="text-center">
                <div className="font-cinzel text-[32px]">DINING RESERVATION</div>
                <div >Experience culinary excellence in our main dining room.</div>

            </div>

            <div className='my-6 grid grid-cols-[1fr_1fr] gap-4'>
                <div>
                    <label>Count</label>
                    <div className='mt-2 flex items-center w-full px-2 h-8 rounded-5 border border-white/10'>
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
                    <div className='mt-2 w-full h-8 border border-solid rounded-[12px] border-white/10'>
                        <div className='flex w-full px-2 py-1'>
                            <div>
                               <select name="cars" id="cars" className="
          appearance-none
          bg-black/40
          text-white
          border border-white/20
          rounded-md
          px-3 pr-10
          py-1.5
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500/50
          focus:border-blue-400
          shadow-sm
        ">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
                            </div>
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='my-6 grid grid-cols-[1fr_1fr] gap-4'>
                <div>
                    <label>Preferred Time</label>
                    <div className='mt-2 w-full h-8 grid grid-cols-2 gap-2 '>
                        <div className='border border-white/10 rounded-[12px]'>
                            
                        </div>
                        <div className='border border-white/10 rounded-[12px]'></div>
                       
                    </div>
                </div>
                <div>
                    <label>Seating Preference</label>
                    <div className='mt-2 w-full h-8 border border-solid rounded-[12px] border-white/10'>
                        
                    </div>

                </div>
            </div>
            <div>
                <label>Special Requests (Optional)</label>
                <div className="mt-1 mb-3 h-40">
                  <textarea
                    name="description"
                    // value={descript}
                    placeholder={"Enter Message"}
                    // onChange={handleChange}
                    className="border border-white/10 border-solid w-full text-xs h-full px-4 py-2 rounded-[6px] focus:ring-2 focus:outline-none"
                  ></textarea>
                  </div>
            </div>

            <div>PROCEED TO CONFIRM</div>

            
        </div>
    )
}

export default TableBooking