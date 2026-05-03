import React from "react";
import { motion } from "framer-motion";
import { Heart, HeartPulse, HeartPulseIcon, LucideHeartPulse } from "lucide-react";
import f3Logo from "../assets/F3/f3_logo.png";
import vitcareLogo from "../assets/Vitcare/vitcare_logo.png";
import cclogo from "../assets/CClogo/cremecottagelogo2.png";

const logos: { name: string; image: string; typographic?: boolean; vitcare?: boolean }[] = [
  { name: "F3 Real Estate", image: f3Logo },
  { name: "Vital Care", image: vitcareLogo, vitcare: true },
  // { name: "Bravo Gym", image: "" },
  { name: "Creme Cottage", image: cclogo },
  { name: "AETHER", image: "", typographic: true },
];

const LogoItem = ({ logo }: { logo: { name: string; image: string; typographic?: boolean; vitcare?: boolean } }) => {
  const [imgFailed, setImgFailed] = React.useState(false);
  const hasImage = Boolean(logo.image) && !imgFailed;

  return (
    <div className="flex-shrink-0 flex items-center gap-4 group cursor-pointer opacity-60 hover:opacity-100 transition-all duration-500">
      {hasImage ? (
        <img
          src={logo.image}
          alt={logo.name}
          className="h-14 md:h-20 w-auto object-contain transition-all duration-500"
          style={logo.vitcare ? { filter: "invert(1)", mixBlendMode: "screen" } : undefined}
          onError={() => setImgFailed(true)}
        />
      ) : logo.typographic ? (
        <span className="font-light text-3xl md:text-4xl tracking-[0.3em] uppercase text-white whitespace-nowrap">
          {logo.name}
        </span>
      ) : (
        <>
          <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white group-hover:text-primary transition-colors"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-bold text-3xl tracking-tight text-white whitespace-nowrap">
            {logo.name}
          </span>
        </>
      )}
    </div>
  );
};

const LogoMarquee = () => {
  // Repeat logos enough times so they always exceed the viewport width
  const repeated = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-sm text-white/40 mb-0 tracking-[0.2em] uppercase font-bold">
          Trusted by Growth-Focused Brands
        </p>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-16 md:gap-24 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {repeated.map((logo, index) => (
            <LogoItem key={index} logo={logo} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee;
