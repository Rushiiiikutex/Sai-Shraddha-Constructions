import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <main>
        <Navbar />
        <Hero />
        <TrustBanner />
        <Services />
        <Portfolio />
        <Footer />
      </main>
    </SplashScreen>
  );
}
