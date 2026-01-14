import Navbar from '@/src/components/HomePage/Navbar'
import { Play } from 'lucide-react'

export default function HomePage() {
    return (
        <>
            <div className='relative'>
                <img src="home.jpg" alt="" />
                <div className='absolute top-0 h-full w-full z-20'>
                    <Navbar />
                </div>
                <div className="absolute top-0 h-full w-full flex justify-center items-center">
                    <div className='mx-[7%] w-full flex justify-between'>
                        <div className='w-[445px] text-white text-center'>
                            <div className='text-[40px] font-[400]'>
                                The Imperial Sanctuary
                            </div>
                            <div className=''>Nestled within the historic landscapes of Jaipur and Rajasthan, our restaurant is a tribute to royal heritage and timeless luxury. Reimagined for modern connoisseurs, it presents an exquisite dining experience where tradition, elegance, and indulgence come together seamlessly.</div>
                        </div>
                        <div className="flex items-center justify-center md:justify-center">
                            <button className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 backdrop-blur-md hover:scale-105 transition">
                                <Play className="h-7 w-7 text-white" fill="white" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

