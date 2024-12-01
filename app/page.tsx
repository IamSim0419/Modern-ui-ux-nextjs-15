import { Cta } from "@/app/components/Cta";
import { Faq } from "@/app/components/Faq";
import { Features } from "@/app/components/Features";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { Navbar } from "@/app/components/Navbar";
import { Pricing } from "@/app/components/Pricing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Pricing />
      <Cta />
      <Footer />
    </main>
  );
}
