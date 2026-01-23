import MyCarousel from "../components/CenteredCarousel";
import CoverflowCarousel from "../components/CenteredCarousel/Coverflow";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <HomePage />
      <div className="bg-black py-20 min-h-25">
        <CoverflowCarousel />
      </div>
      <Footer />
    </>
  );
}
