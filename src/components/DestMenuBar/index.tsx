import { ArrowDownToLine } from 'lucide-react'

function DestMenuBar() {
    return (
        <div className='bg-black text-white px-[7%] min-h-[700px]'>
            <div className=' text-[64px] font-[400] pb-14'>Our Destinations</div>
            <div>
                <div className='mb-6 flex justify-between border-b border-solid border-b border-b-white py-2'>
                    <div className='text-[40px] font-[900]'>Jaipur</div>
                    <div className='flex items-center'>
                        <div className='mx-8'>View Menu </div>
                        <div className=''><ArrowDownToLine /></div>

                    </div>
                </div>
                <div className='mb-6 flex justify-between border-b border-solid border-b-white py-2'>
                    <div className='text-[40px] font-[700]'>Goa</div>
                    <div className='flex items-center'>
                        <div className='mx-8'>View Menu </div>
                        <div className=''><ArrowDownToLine /></div>

                    </div>
                </div>
                <div className='mb-6 flex justify-between border-b border-solid border-b-white py-2'>
                    <div className='text-[40px] font-[600]'>Rajasthan</div>
                    <div className='flex items-center'>
                        <div className='mx-8'>View Menu </div>
                        <div className=''><ArrowDownToLine /></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestMenuBar