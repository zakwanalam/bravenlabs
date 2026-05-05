import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Split text into words for the reveal effect
    const text = textElement.innerText;
    textElement.innerHTML = text
      .split(" ")
      .map((word) => `<span class="inline-block mr-[0.25em] opacity-20 transition-all duration-300">${word}</span>`)
      .join("");

    const spans = textElement.querySelectorAll("span");

    gsap.to(spans, {
      opacity: 1,
      color: "white",
      stagger: 0.05,
      scrollTrigger: {
        trigger: textElement,
        start: "top 85%",
        end: "bottom 45%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="pb-40 pt-20   bg-black relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,105,249,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-12 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          <div className="w-8 h-8 icon-depth scale-75">
            <Info size={14} className="text-white" strokeWidth={3} />
          </div>
          <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/90">About Us</span>
        </div>

        {/* Animated Text */}
        <h2
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-6xl font-light leading-[1.1] text-white/20 tracking-tight mb-16 max-w-4xl mx-auto"
        >
          Built On Creativity, Collaboration, And Top Excellence, Braven Labs Is A Dynamic Team Of Industry Experts Committed To Achieving Exceptional Great Results...
        </h2>

        {/* Button */}
        <Button
          className="bg-transparent border-none text-white px-12 py-8 rounded-2xl text-xl font-bold flex items-center gap-4 mx-auto transition-all duration-500 hover:scale-105 shadow-[0_20px_50px_rgba(6,105,249,0.3)] group overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #0669F9 0%, #359AF2 100%)",
          }}
          onClick={() => navigate("/booking")}
        >
          <span className="relative z-10">Get Started</span>
          <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight size={20} />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default AboutScrollSection;
