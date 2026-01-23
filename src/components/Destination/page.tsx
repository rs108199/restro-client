import Navbar from "@/src/components/HomePage/Navbar";
import DestNavbar from "./DestNavbar";

export default function DestinationPage() {
  return (
    <>
      <div className="relative">
        <img src="JaipurDestination.jpg" alt="" width={"100%"} />
        <div className="absolute top-2 h-full w-full z-20">
          <DestNavbar />
        </div>
        <div className="absolute top-0 h-full w-full flex justify-center items-center bg-linear-to-b from-[#000000a4] to-[#000000a4]">
          <div className="mx-[7%] w-full max-w-360 flex justify-between">
            <div className="w-111.25 text-white text-center">
              <div className="text-[40px] font-normal mt-14">
                The Imperial Sanctuary
              </div>
              <div className="">
                Nestled within the historic landscapes of Jaipur and Rajasthan,
                our restaurant is a tribute to royal heritage and timeless
                luxury. Reimagined for modern connoisseurs, it presents an
                exquisite dining experience where tradition, elegance, and
                indulgence come together seamlessly.
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
