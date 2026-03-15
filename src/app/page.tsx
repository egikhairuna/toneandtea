import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Schedule from "./components/Schedule";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative w-full flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Schedule />
      <FeatureSection />
      <Footer />
    </main>
  );
}
