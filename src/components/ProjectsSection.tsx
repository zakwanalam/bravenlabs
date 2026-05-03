import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import vitcare1 from "@/assets/Vitcare/Screenshot_14-3-2026_3252_vitcare.vercel.app.jpeg";
import vitcare2 from "@/assets/Vitcare/Screenshot_14-3-2026_3319_vitcare.vercel.app.jpeg";
import vitcare3 from "@/assets/Vitcare/Screenshot_14-3-2026_3358_vitcare.vercel.app.jpeg";
import vitcare4 from "@/assets/Vitcare/Screenshot_14-3-2026_3426_vitcare.vercel.app.jpeg";
import vitcare5 from "@/assets/Vitcare/Screenshot_14-3-2026_3548_vitcare.vercel.app.jpeg";
import vitcare6 from "@/assets/Vitcare/screenshot-1773439515807.png";
import vitcareCover from "@/assets/Vitcare/vitcare_cover.jpg";
import f3Cover from "@/assets/F3/f3_cover.jpg";
import f3Image2 from "@/assets/F3/Screenshot 2026-03-12 201637.png";
import f3Image3 from "@/assets/F3/Screenshot 2026-03-12 201735.png";
import f3Image4 from "@/assets/F3/Screenshot 2026-03-12 202218.png";
import f3Image5 from "@/assets/F3/Screenshot 2026-03-12 202328.png";
import f3Mockup2 from "@/assets/F3/mockup 2.jpg"
import f3Image6 from "@/assets/F3/Screenshot_12-3-2026_202028_f3.properties.jpeg";
import f3Image7 from "@/assets/F3/Screenshot_12-3-2026_202132_f3.properties.jpeg";
import f3Image8 from "@/assets/F3/Screenshot_12-3-2026_202157_f3.properties.jpeg";
import f3Image9 from "@/assets/F3/Screenshot_12-3-2026_20216_f3.properties.jpeg";
import f3Image10 from "@/assets/F3/Screenshot_12-3-2026_203220_admin.f3.properties.jpeg";
import f3Image11 from "@/assets/F3/Screenshot_12-3-2026_203248_admin.f3.properties.jpeg";
import f3Image12 from "@/assets/F3/Screenshot_13-3-2026_201326_f3.properties.jpeg";
import f3Image13 from "@/assets/F3/Screenshot_13-3-2026_201417_f3.properties.jpeg";
import f3Image14 from "@/assets/F3/Screenshot_13-3-2026_201452_f3.properties.jpeg";
import bravoGym6 from "@/assets/Bravo Gym/Screenshot_14-3-2026_22436_fitness-53um.vercel.app copy.jpeg";
import bravoGym2 from "@/assets/Bravo Gym/Screenshot_14-3-2026_22452_fitness-53um.vercel.app.jpeg";
import bravoGym1 from "@/assets/Bravo Gym/Screenshot_14-3-2026_2248_fitness-53um.vercel.app.jpeg";
import bravoGym4 from "@/assets/Bravo Gym/Screenshot_14-3-2026_22535_fitness-53um.vercel.app.jpeg";
import bravoGym5 from "@/assets/Bravo Gym/Screenshot_14-3-2026_23055_fitness-53um.vercel.app.jpeg";
import bravoGym3 from "@/assets/Bravo Gym/Screenshot 2026-03-14 023014.png";
import bravoCover from "@/assets/Bravo Gym/bravo_cover.jpg";
import vitCareMockup from "@/assets/Vitcare/vitcare_mockup.jpg"
import bravoGymMockup from "@/assets/Bravo Gym/bravogym_mokcup2.jpg"
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    image: vitcareCover,
    gallery: [vitcareCover, vitCareMockup, vitcare3, vitcare4],
    title: "VitalCare Clinic",
    category: "Clinic Website & Booking Experience",
    description: "A premium clinic experience designed to improve trust, simplify appointment booking, and make healthcare services easier to access online.",
    results: ["Premium healthcare presentation", "Clearer booking journey", "Mobile-friendly patient experience"],
  },
  {
    image: f3Cover,
    gallery: [
      f3Cover, f3Mockup2, f3Image10,
    ],
    title: "F3 Real Estate",
    category: "Real Estate Platform",
    description: "A comprehensive real estate ecosystem with property discovery, management tools, and an admin experience built for scale.",
    results: ["Custom property workflows", "Admin-friendly management tools", "Conversion-focused browsing experience"],
  },
  {
    image: bravoCover,
    gallery: [bravoCover, bravoGymMockup, bravoGym4],
    title: "Bravo Gym",
    category: "Fitness Brand Website",
    description: "A bold, modern fitness website crafted to showcase services, strengthen brand presence, and support lead generation.",
    results: ["Stronger visual branding", "Clear service presentation", "Better mobile experience"],
  },
];

const ProjectCard = ({ project, index, onClick }: { project: any; index: number; onClick: () => void }) => (
  <AnimatedSection delay={index * 0.15} className="h-full">
    <motion.div
      className="glass-card overflow-hidden group cursor-pointer h-full relative flex flex-col !p-0"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14]/80 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[#0669F9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white text-[#0669F9] px-6 py-2.5 rounded-full text-sm font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
            View Project <ArrowRight size={16} />
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <p className="text-[12px] font-bold text-[#0669F9] uppercase tracking-[0.05em] mb-3">{project.category}</p>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-[#0669F9] transition-colors">{project.title}</h3>
        <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 md:mb-8 flex-grow line-clamp-2 md:line-clamp-none">{project.description}</p>

        <div className="hidden md:block space-y-3.5 pt-6 border-t border-white/5">
          {project.results.map((result: string) => (
            <div key={result} className="flex items-center gap-3.5">
              <div className="w-5 h-5 rounded-full bg-[#0669F9]/20 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-[#0669F9]" strokeWidth={3} />
              </div>
              <span className="text-sm font-bold text-white/70">{result}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </AnimatedSection>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="py-16 relative bg-[#0c0c14] overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-bold text-[#0669F9] uppercase tracking-widest mb-4">Proof of Work</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">Selected Projects</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Real businesses need more than pretty design. These projects show the kind of work we build when the goal is clarity,
            usability, and stronger business performance.
          </p>
        </AnimatedSection>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onClick={() => setSelectedProject(project)} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden -mx-6 px-6">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4">
              {projects.map((project, i) => (
                <CarouselItem key={project.title} className="pl-4 basis-[88%]">
                  <ProjectCard project={project} index={i} onClick={() => setSelectedProject(project)} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-5xl bg-[#0c0c14]/98 backdrop-blur-2xl border-white/10 p-0 overflow-hidden rounded-[2.5rem]">
          {selectedProject && (
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              <div className="w-full md:w-[65%] bg-black/40 flex items-center justify-center p-6 md:p-10">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject.gallery.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                          <img src={img} alt={`${selectedProject.title} ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-black/50 border-none text-white hover:bg-black/80" />
                  <CarouselNext className="right-4 bg-black/50 border-none text-white hover:bg-black/80" />
                </Carousel>
              </div>

              <div className="w-full md:w-[35%] p-10 flex flex-col justify-center bg-[#0c0c14] border-t md:border-t-0 md:border-l border-white/10">
                <DialogHeader>
                  <p className="text-[10px] font-black text-[#0669F9] uppercase tracking-[0.2em] mb-4">{selectedProject.category}</p>
                  <DialogTitle className="text-3xl font-bold text-white mb-6">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-white/60 leading-relaxed text-base italic mb-8">
                  {selectedProject.description}
                </DialogDescription>

                <div className="space-y-4 pt-8 border-t border-white/10">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Key Results</p>
                  {selectedProject.results.map((result) => (
                    <div key={result} className="flex items-center gap-4 text-sm text-white/80">
                      <div className="w-6 h-6 rounded-full bg-[#0669F9]/20 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-[#0669F9]" strokeWidth={3} />
                      </div>
                      <span className="font-bold">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
