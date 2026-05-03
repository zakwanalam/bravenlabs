import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic Package",
    price: "35,000",
    prefix: "Rs. ",
    description: "For businesses starting out that need a professional presence without the bells and whistles.",
    features: [
      "No custom design",
      "Offer-focused messaging",
      "CTA optimization",
      "Hosting + Domain Setup",
    ],
    buttonText: "Book a Free Consultation",
    highlight: false,
  },
  {
    name: "Conversion Website",
    price: "75,000",
    prefix: "Rs. ",
    description: "For businesses that need a sharper online presence and a clearer path to enquiries.",
    features: [
      "Custom web design",
      "Mobile-first design",
      "SEO Optimization",
      "Hosting + Domain Setup",
    ],
    buttonText: "Book a Free Consultation",
    highlight: true,
    badge: "TOP SELLER",

  },

  {
    name: "Website + Automation",
    price: "150,000",
    prefix: "Rs. ",
    description: "For teams that need better websites plus faster follow-up and less manual admin.",
    features: [
      "Website + workflow setup",
      "Lead routing automation",
      "Booking / follow-up flows",
    ],
    buttonText: "Book a Free Consultation",
    highlight: false,
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-16 relative overflow-hidden bg-[#0c0c14]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-bold text-[#0669F9] uppercase tracking-widest mb-4">Pricing Plans</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Plans That Grow With <br className="hidden md:block" /> Your Business
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. Transparent pricing, professional results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <motion.div
                className={`flex flex-col h-full group relative overflow-visible rounded-[2rem] p-8 md:p-10 border transition-all duration-500 ${plan.highlight
                  ? "border-transparent shadow-[0_25px_60px_rgba(6,105,249,0.4)] scale-105 z-10"
                  : "glass-card border-white/10"
                  }`}
                style={
                  plan.highlight
                    ? {
                      background: "linear-gradient(135deg, #0669F9 0%, #359AF2 100%)",
                    }
                    : {}
                }
                whileHover={{ y: plan.highlight ? -15 : -10 }}
              >
                {/* Shine effect only for glass cards */}
                {!plan.highlight && <div className="glass-card-shine" />}

                {/* Badge for highlight - Top Center */}
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="bg-white/20 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full border border-white/40 shadow-2xl">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-col h-full relative z-10">
                  <h3 className={`font-bold text-3xl mb-6 tracking-tight ${plan.highlight ? "text-white" : "text-white group-hover:text-[#0669F9] transition-colors"}`}>
                    {plan.name}
                  </h3>

                  <div className="mb-8">
                    <p className={`${plan.highlight ? "text-white/60" : "text-white/40"} text-[10px] uppercase tracking-[0.2em] mb-2 font-bold`}>Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-lg font-bold ${plan.highlight ? "text-white/80" : "text-white/60"}`}>{plan.prefix}</span>
                      <span className="text-5xl md:text-6xl font-bold text-white">{plan.price}</span>
                    </div>
                  </div>

                  <p className={`${plan.highlight ? "text-white/80" : "text-white/50"} text-base leading-relaxed mb-10 font-medium max-w-xs`}>
                    {plan.description}
                  </p>

                  <Button
                    className={`w-full py-8 rounded-[1.5rem] text-lg font-bold mb-10 transition-all duration-300 ${plan.highlight
                      ? "bg-white text-[#0669F9] hover:bg-white/95 shadow-2xl shadow-black/10"
                      : "bg-[#0669F9] text-white hover:bg-[#0669F9]/90 shadow-xl shadow-[#0669F9]/10"
                      }`}
                    onClick={() => navigate("/booking")}
                  >
                    {plan.buttonText}
                  </Button>

                  <div className={`mt-auto w-full space-y-6 pt-10 border-t ${plan.highlight ? "border-white/20" : "border-white/10"}`}>
                    <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${plan.highlight ? "text-white" : "text-white/80"}`}>What's included</p>
                    <div className="space-y-4">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-white/20" : "bg-[#0669F9]/20"
                            }`}>
                            <Check size={14} className={plan.highlight ? "text-white" : "text-[#0669F9]"} strokeWidth={3} />
                          </div>
                          <span className={`text-base leading-tight font-bold ${plan.highlight ? "text-white" : "text-white/70"}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner glow for highlighted card */}
                {plan.highlight && (
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 blur-[100px] pointer-events-none" />
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
