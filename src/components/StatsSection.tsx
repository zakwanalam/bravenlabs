import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo for premium feel
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const STATS = [
  { label: "Happy Clients", value: 50, suffix: "+" },
  { label: "Projects Delivered", value: 65, suffix: "+" },
  { label: "Average Rating", value: 5, suffix: "/5" },
  { label: "Success Rate", value: 95, suffix: "%" },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 bg-[#0c0c14] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="relative text-center group"
            >
              {/* Floating background number for depth */}
              {/* <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-black text-white/[0.02] pointer-events-none select-none group-hover:text-primary/[0.04] transition-colors duration-700">
                {stat.value}
              </div> */}

              <div className="relative z-10">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 transition-all duration-500 group-hover:text-primary group-hover:scale-105">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h2>
                <div className="flex flex-col items-center gap-4">
                  <div className="h-[2px] w-12 bg-primary/30 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-700" />
                  <p className="text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors duration-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
