import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Zap } from "lucide-react";

const BravenVariations = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Brand Variations</h2>
          <p className="text-muted-foreground text-lg">Visualizing Braven Labs across platforms.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Social Media Carousel Mockup */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Instagram className="text-primary" size={20} /> Social Media Concept
            </h3>
            <div className="aspect-[4/5] max-w-sm mx-auto glass-panel rounded-[2.5rem] p-8 flex flex-col justify-between anti-gravity-card bg-black border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Braven Labs</span>
                <Zap size={20} className="text-primary fill-primary" />
              </div>
              
              <div className="space-y-4">
                <h4 className="text-4xl font-bold leading-tight">Physics <br />Defying <br />Design.</h4>
                <p className="text-muted-foreground text-sm">We don't just build websites. We create digital gravity.</p>
              </div>

              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground text-center italic">Instagram Carousel Slide #1</p>
          </div>

          {/* Ad Creative Mockup */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Zap className="text-primary" size={20} /> Ad Creative
            </h3>
            <div className="aspect-video w-full glass-panel rounded-3xl p-10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <motion.div 
                className="relative z-10 text-center space-y-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <h4 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">THE FUTURE IS BRAVEN.</h4>
                <p className="text-sm tracking-widest uppercase text-white/60 font-medium">AI Automation & High-End Design</p>
                <div className="pt-4">
                  <button className="px-6 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                    Learn More
                  </button>
                </div>
              </motion.div>
              
              {/* Abstract elements in ad */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-30" />
            </div>
            <p className="text-sm text-muted-foreground text-center italic">LinkedIn Display Ad Concept</p>
          </div>
        </div>

        {/* Landing Page UI Section Variant */}
        <div className="mt-32 space-y-12">
          <h3 className="text-xl font-semibold flex items-center gap-2 px-6">
            <Linkedin className="text-primary" size={20} /> UI Section Variant
          </h3>
          <div className="w-full glass-panel rounded-[3rem] p-12 lg:p-24 relative overflow-hidden border-white/5">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <h4 className="text-4xl md:text-6xl font-bold leading-[1.1]">Suspended in <br />Innovation.</h4>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our interfaces are designed to feel weightless, intuitive, and remarkably premium. 
                  Every element is placed with surgical precision.
                </p>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                    <Zap size={20} />
                  </div>
                  <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white/40">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-transparent rounded-[4rem] border border-white/5 flex items-center justify-center">
                  <motion.div 
                    className="w-3/4 h-3/4 glass-panel rounded-3xl p-8 anti-gravity-card"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="space-y-4">
                      <div className="w-16 h-2 bg-primary rounded-full" />
                      <div className="h-40 rounded-2xl bg-white/5" />
                      <div className="flex justify-between">
                        <div className="h-2 w-20 bg-white/10 rounded-full" />
                        <div className="h-2 w-12 bg-white/10 rounded-full" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BravenVariations;
