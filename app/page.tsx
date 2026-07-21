import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandLogos from "@/components/home/BrandLogos";
import PortfolioHighlight from "@/components/home/PortfolioHighlight";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandLogos />
      <WhyChooseUs />
      <PortfolioHighlight />
      <Testimonials />
    </>
  );
}
