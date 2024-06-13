import BlogsSection from "@/components/landing/blogs-section";
import FAQsSection from "@/components/landing/faqs-section";
import Features2Section from "@/components/landing/features-2-section";
import FeaturesSection from "@/components/landing/features-section";
import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import FloatingHeader from "@/components/layouts/floating-header";
import Header from "@/components/layouts/header";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <FloatingHeader />
      <HeroSection />
      <FeaturesSection />
      <Features2Section />
      <TestimonialsSection />
      {/* <GetStartedSection /> */}
      <PricingSection />
      <FAQsSection />
      <BlogsSection />
      <Footer />
    </div>
  );
};

export default Landing;
