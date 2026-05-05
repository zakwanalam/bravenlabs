import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroBackground from "./HeroBackground";
import LogoMarquee from "./LogoMarquee";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black text-white">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6 flex-grow flex flex-col items-center justify-center text-center pt-32 pb-20">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary/80">Software Agency · Est. 2024</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight max-w-7xl mb-8"
        >
          <span className="block mb-2">Engineering Products</span>
          <span className="bg-gradient-to-r from-[#0669F9] to-[#38bdf8] bg-clip-text text-transparent">Built to Outperform</span>
        </motion.h1>

        {/* Tagline Pills */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
        >
          {[
            "Built for Speed",
            "Designed to Convert",
            "Engineered for Growth",
          ].map((phrase, i) => (
            <motion.span
              key={phrase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-white/70"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0669F9]" />
              {phrase}
            </motion.span>
          ))}
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mb-12 leading-relaxed"
        >
          We partner with ambitious brands to build custom web apps, SaaS platforms, and AI systems that solve complex problems and drive measurable growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <Button
            className="bg-white text-black hover:bg-white/90 px-8 py-7 rounded-2xl text-lg font-bold flex items-center gap-2 group transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/booking")}
          >
            Start Your Project
            <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </div>
          </Button>
          <Button
            variant="outline"
            className="border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 px-8 py-7 rounded-2xl text-lg font-medium transition-all duration-300"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Pricing
          </Button>
        </motion.div>
      </div>

      {/* Logo Marquee Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <LogoMarquee />
      </motion.div>
    </section>
  );
};

export default HeroSection;
