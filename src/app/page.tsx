import MyCarousel from "../components/CenteredCarousel";
import CoverflowCarousel from "../components/CenteredCarousel/Coverflow";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <HomePage />
      
      <div className="bg-black flex justify-center p-10 min-h-25">
        <CoverflowCarousel/>
        
      </div>

      <Footer/>
    </>
  );
}
