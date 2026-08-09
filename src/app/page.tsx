import CountriesSection from "@/components/CountriesSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import TrustStrip from "@/components/TrustStrip";
import { fetchBdtRates } from "@/lib/rates";

export default async function Home() {
  const { rates } = await fetchBdtRates();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <CountriesSection rates={rates} />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
