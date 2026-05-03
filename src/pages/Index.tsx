import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutScrollSection from "@/components/AboutScrollSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import AutomationSection from "@/components/AutomationSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

const Index = () => {
    return (
        <div className="min-h-screen bg-[#0c0c14] overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <AboutScrollSection />
            <StatsSection />
            <ServicesSection />
            <ProjectsSection />
            <AutomationSection />
            <PricingSection />
            <ProcessSection />
            <FAQSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default Index;
