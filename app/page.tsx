import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Reviews from "@/components/Reviews";
import { Highlights, Services, About, WhyUs, Contact, Social, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <About />
        <WhyUs />
        <Gallery />
        <Booking />
        <Reviews />
        <Contact />
        <Social />
      </main>
      <Footer />
    </>
  );
}