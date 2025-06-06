import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/Navbar/Navbar";
import TestimonialsSection from "@/components/testimonial";
import ExploreFeatures from "@/components/ExploreFeatures";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ExploreFeatures />
        <TestimonialsSection />
      </main>
      <Footer/>
    </div>
  );
}
