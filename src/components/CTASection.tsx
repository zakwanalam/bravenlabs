import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 flex flex-wrap content-start">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="w-[10%] aspect-square border-[0.5px] border-white/5 transition-colors duration-1000"
            style={{
              backgroundColor: i % 7 === 0 ? (i % 14 === 0 ? 'rgba(6, 105, 249, 0.1)' : 'rgba(53, 154, 242, 0.05)') : 'transparent',
              boxShadow: i % 7 === 0 ? `inset 0 0 20px ${i % 14 === 0 ? 'rgba(6, 105, 249, 0.2)' : 'rgba(53, 154, 242, 0.1)'}` : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Particles = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{
            y: [null, "-20px", "0px"],
            opacity: [null, 0.8, 0.3]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-black">
      {/* Dynamic Grid Background with Colored Squares */}
      <GridBackground />

      {/* Floating Particles */}
      <Particles />

      {/* Radial Gradient Glow for Center Focus */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,105,249,0.2)_0%,transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Top Icon with Brand Gradient */}
          <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#0669F9] to-[#359AF2] flex items-center justify-center mb-14 shadow-[0_0_60px_rgba(6,105,249,0.4)] relative group">
            <div className="absolute inset-0 rounded-[2rem] bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Zap size={40} className="text-white fill-white relative z-10" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white tracking-tight leading-[0.95]">
            Ready to Transform Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0669F9] to-[#359AF2]">Digital Presence?</span>
          </h2>

          <p className="text-xl md:text-xl text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            Join forward-thinking brands that have already scaled their systems and boosted conversions with our high-end websites and automation.
          </p>

          <Button
            className="bg-gradient-to-r from-[#0669F9] to-[#359AF2] text-white px-10 py-8 rounded-full text-xl font-bold flex items-center gap-6 transition-all duration-700 hover:scale-105 shadow-[0_30px_70px_rgba(6,105,249,0.5)] group border-none"
            onClick={() => navigate("/booking")}
          >
            Get Started
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
              <ArrowRight size={28} />
            </div>
          </Button>
        </motion.div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0669F9]/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#359AF2]/10 rounded-full blur-[150px] translate-y-1/2 pointer-events-none" />
    </section>
  );
};

export default CTASection;
