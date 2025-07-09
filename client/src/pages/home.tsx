import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import WhyChooseUs from "@/components/why-choose-us";
import EngagementsSection from "@/components/engagements-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <EngagementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
