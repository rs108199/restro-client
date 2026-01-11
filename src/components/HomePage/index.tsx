import { Play } from "lucide-react";
import Navbar from "./Navbar";

export default function HomePage() {
    return (
        <>
            <div className='relative'>
                <div>
                    <img src="home.jpg" alt="Home Screen" width={"100%"} />
                </div>
                <div className='absolute top-0 z-10 w-full'>
                    <div>
                        <Navbar />
                    </div>
                    <div className="my-auto mt-12 lg:mt-24">
                        <div className="md:mx-auto px-18 lg:px-34 max-w-[1440px] flex justify-between">
                            {/* Left Content */}
                            <div className="flex flex-col justify-center text-white w-[450px] pr-2">
                                <h1 className="font-[400] md:text-[40px] leading-[1.2]">
                                    The Imperial Sanctuary
                                </h1>

                                <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed">
                                    Nestled within the historic landscapes of Jaipur and
                                    Rajasthan, the Imperial Sanctuary offers an unforgettable
                                    journey. Rediscover royal heritage, timeless luxury, and
                                    immersive cultural experiences.
                                </p>

                                <span className="mt-10 text-xs uppercase tracking-widest text-white/70">
                                    Scroll Down
                                </span>
                            </div>

                            {/* Right Play Button */}
                            <div className="flex items-center justify-center md:justify-center">
                                <button className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 backdrop-blur-md hover:scale-105 transition">
                                    <Play className="h-7 w-7 text-white" fill="white" />
                                </button>
                            </div>
                        </div>

                    </div>



                </div>


            </div>

            <div className="bg-black min-h-[600px]">

            </div>
        </>
    )
}