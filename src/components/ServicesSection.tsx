import { ArrowRight, Bot, Globe, LayoutTemplate, ShoppingCart, Layers3, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Websites That Convert",
    description:
      "Modern business websites designed to build trust, explain your offer clearly, and turn more visitors into leads.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages & Funnels",
    description:
      "High-converting pages for paid ads, offers, launches, and campaigns that need stronger conversion performance.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate lead capture, follow-up, reminders, admin tasks, and internal workflows so your business runs faster.",
  },
  {
    icon: Layers3,
    title: "SaaS Product Development",
    description:
      "We build modern SaaS platforms, dashboards, portals, and web apps designed for usability, growth, and scale.",
  },
  {
    icon: Wrench,
    title: "Custom Development",
    description:
      "Need something beyond a standard website? We build tailored systems, custom features, and integrations around your workflow.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Growth Systems",
    description:
      "Improve product pages, checkout flow, and post-click experience so your store converts more traffic into sales.",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-16 relative overflow-hidden bg-[#0c0c14]/40">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-bold text-[#0669F9] uppercase tracking-widest mb-4">What We Help With</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">Services Built Around <br className="hidden md:block" /> Business Outcomes</h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            We focus on the work that matters most to growing businesses: better websites, stronger funnels,
            faster follow-up, and scalable products.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <motion.div
                className="glass-card flex flex-col items-start text-left h-full group cursor-default !p-5 md:!p-10"
                whileHover={{ y: -10 }}
              >
                {/* Icon Container with Depth and Shine */}
                <div className="mb-4 md:mb-8 relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 icon-depth">
                    {/* Glow background */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center blur-[10px] md:blur-[15px] absolute group-hover:bg-white/20 transition-all duration-700" />

                    {/* Inner shine highlight */}
                    <div className="icon-shine" />

                    {/* Icon */}
                    <service.icon size={22} className="text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4 text-white tracking-tight group-hover:text-[#0669F9] transition-colors duration-300">{service.title}</h3>
                  <p className="text-white/50 text-[11px] md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300 ">{service.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-20 flex justify-center">
          <Button
            className="bg-white text-black hover:bg-white/90 px-10 py-7 rounded-2xl text-lg font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl shadow-white/10"
            onClick={() => navigate("/booking")}
          >
            Book a Free Consultation <ArrowRight size={20} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
