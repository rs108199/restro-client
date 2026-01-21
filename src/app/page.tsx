import MyCarousel from "../components/CenteredCarousel";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <HomePage />
      
      <div className="bg-black flex justify-center p-10">
        <div className="w-full max-w-350 py-25">
          <MyCarousel/>
        </div>
        
      </div>

      <Footer/>
    </>
  );
}
