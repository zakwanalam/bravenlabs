import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
      {/* User-provided Glow Image */}
      <div className="absolute inset-0 flex items-end justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/assets/hero-glow.png"
          alt="Hero Glow"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Animated Subtle Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" className="text-primary" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
          animate={{ 
            y: [0, -40, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
