import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, User, Briefcase, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SERVICE_OPTIONS = [
  "High-Conversion Website",
  "AI & Workflow Automation",
  "Custom SaaS / Development",
  "Not sure yet",
];

const BUDGET_OPTIONS = [
  "Under Rs. 50,000",
  "Rs. 50,000 – 150,000",
  "Rs. 150,000 – 300,000",
  "Rs. 300,000+",
];

const TIMELINE_OPTIONS = ["ASAP (1-2 weeks)", "2-4 Weeks", "1-2 Months", "Flexible / Not sure yet"];

const INDUSTRY_OPTIONS = [
  "Healthcare",
  "Real Estate",
  "E-commerce",
  "Fitness",
  "Education",
  "Food & Beverage",
  "SaaS / Technology",
  "Agency / Consulting",
  "Finance / Fintech",
  "Other",
];

interface BookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  industry: string;
  description: string;
  timeline: string;
}

const STEPS = [
  { label: "Contact", icon: User },
  { label: "Project Details", icon: Briefcase },
];

const Booking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    industry: "",
    description: "",
    timeline: "",
  });

  const update = (field: keyof BookingData, value: string) => setData((prev) => ({ ...prev, [field]: value }));

  const canNext = () => {
    if (step === 0) return data.name && data.email && data.phone;
    if (step === 1) return data.service && data.budget && data.timeline && data.industry;
    return false;
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      if (!url) {
        toast.error("Booking system is not fully configured yet.");
        return;
      }

      const entry = { ...data, id: crypto.randomUUID(), submittedAt: new Date().toISOString() };
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(entry),
      });

      toast.success("Request submitted! Our team will reach out to you shortly.");
      setStep(2);
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Failed to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c14] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#0669F9]/10 to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#0669F9]/5 rounded-full blur-[100px] sm:blur-[150px]"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-white hover:text-white transition-colors mb-8 sm:mb-12 text-sm sm:text-base font-medium group uppercase tracking-widest">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
              Get a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0669F9] to-[#359AF2]">Free Consultation</span>
            </h1>
            <p className="text-white max-w-xl mx-auto text-base sm:text-xl leading-relaxed opacity-90">
              Fill out the form below and our team will reach out to you to discuss your project and next steps.
            </p>
          </motion.div>

          {step < 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-10 sm:mb-12 text-sm sm:text-base">
              <div className="glass-card !p-4 sm:!p-5 text-center border-white/5 text-white font-medium leading-tight">Project or workflow review</div>
              <div className="glass-card !p-4 sm:!p-5 text-center border-white/5 text-white font-medium leading-tight">Practical recommendations</div>
              <div className="glass-card !p-4 sm:!p-5 text-center border-white/5 text-white font-medium leading-tight">A clear plan forward</div>
            </div>
          )}

          {step < 2 && (
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
              {STEPS.map((s, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-6">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${i < step ? "bg-[#0669F9] border-[#0669F9] text-white shadow-[0_0_30px_rgba(6,105,249,0.3)]" : i === step ? "border-[#0669F9] text-[#0669F9] bg-[#0669F9]/5 shadow-[0_0_30px_rgba(6,105,249,0.15)]" : "border-white/10 text-white bg-white/5"}`}>
                    {i < step ? <Check size={18} className="sm:w-6 sm:h-6" strokeWidth={3} /> : <s.icon size={18} className="sm:w-6 sm:h-6" />}
                  </div>
                  {i < STEPS.length - 1 && <div className={`w-12 sm:w-24 h-[2px] rounded-full transition-all duration-700 ${i < step ? "bg-[#0669F9]" : "bg-white/10"}`} />}
                </div>
              ))}
            </div>
          )}

          <motion.div layout className="glass-card !p-6 sm:!p-8 md:!p-12 border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="space-y-8 sm:space-y-10 relative z-10">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight">Contact Information</h2>
                    <p className="text-white text-base sm:text-lg opacity-80">How should we reach you?</p>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-bold text-sm uppercase tracking-wider">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="h-14 sm:h-16 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0669F9] focus:ring-[#0669F9]/20 transition-all text-lg sm:text-xl rounded-xl sm:rounded-2xl px-5 sm:px-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-bold text-sm uppercase tracking-wider">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="h-14 sm:h-16 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0669F9] focus:ring-[#0669F9]/20 transition-all text-lg sm:text-xl rounded-xl sm:rounded-2xl px-5 sm:px-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white font-bold text-sm uppercase tracking-wider">Whatsapp / Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="03001234567"
                        value={data.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="h-14 sm:h-16 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0669F9] focus:ring-[#0669F9]/20 transition-all text-lg sm:text-xl rounded-xl sm:rounded-2xl px-5 sm:px-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white font-bold text-sm uppercase tracking-wider">Company / Brand Name</Label>
                      <Input
                        id="company"
                        placeholder="Your company or brand name (optional)"
                        value={data.company}
                        onChange={(e) => update("company", e.target.value)}
                        className="h-14 sm:h-16 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0669F9] focus:ring-[#0669F9]/20 transition-all text-lg sm:text-xl rounded-xl sm:rounded-2xl px-5 sm:px-6"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="space-y-8 sm:space-y-10 relative z-10">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight">Project Details</h2>
                    <p className="text-white text-base sm:text-lg opacity-80">Tell us what you need help with.</p>
                  </div>

                  <div className="space-y-8 sm:space-y-10">
                    <div>
                      <Label className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">What do you need help with? *</Label>
                      <div className="grid grid-cols-1 gap-4 mt-5 sm:mt-6">
                        {SERVICE_OPTIONS.map((s) => (
                          <button
                            key={s}
                            onClick={() => update("service", s)}
                            className={`text-left px-6 py-5 rounded-2xl border-2 text-lg sm:text-xl font-bold transition-all duration-300 ${data.service === s ? "border-[#0669F9] bg-[#0669F9]/10 text-white shadow-[0_0_20px_rgba(6,105,249,0.1)]" : "border-white/5 bg-white/5 text-white/80 hover:border-white/20 hover:text-white"}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <Label className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">Preferred Timeline *</Label>
                      <Select onValueChange={(v) => update("timeline", v)} value={data.timeline}>
                        <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white focus:ring-[#0669F9]/20 text-base rounded-xl px-5">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0c0c14] border-white/10 text-white">
                          {TIMELINE_OPTIONS.map((t) => <SelectItem key={t} value={t} className="focus:bg-[#0669F9]/20 focus:text-white py-2 text-sm">{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">Estimated Budget *</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 sm:mt-6">
                        {BUDGET_OPTIONS.map((b) => (
                          <button
                            key={b}
                            onClick={() => update("budget", b)}
                            className={`px-6 py-5 rounded-2xl border-2 text-base sm:text-sm font-bold uppercase tracking-tight transition-all duration-300 ${data.budget === b ? "border-[#0669F9] bg-[#0669F9]/10 text-white shadow-[0_0_20px_rgba(6,105,249,0.1)]" : "border-white/5 bg-white/5 text-white/80 hover:border-white/20 hover:text-white"}`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <Label className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">Industry *</Label>
                      <Select value={data.industry} onValueChange={(v) => update("industry", v)}>
                        <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white focus:ring-[#0669F9]/20 text-base rounded-xl px-5">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0c0c14] border-white/10 text-white">
                          {INDUSTRY_OPTIONS.map((ind) => <SelectItem key={ind} value={ind} className="focus:bg-[#0669F9]/20 focus:text-white py-2 text-sm">{ind}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="desc" className="text-white font-bold text-sm sm:text-base uppercase tracking-wider ml-1">Tell us about your project <span className="font-light text-sm lowercase">(Optional)</span></Label>
                      <div className="relative">
                        <Textarea
                          id="desc"
                          placeholder="Tell us your industry, what you're building, and how we can help you..."
                          value={data.description}
                          onChange={(e) => update("description", e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[140px] sm:min-h-[180px] text-lg sm:text-2xl focus:border-[#0669F9] focus:ring-[#0669F9]/20 transition-all rounded-xl sm:rounded-2xl px-5 sm:px-8 py-4 sm:py-6 leading-relaxed"
                        />

                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center py-8 sm:py-12 relative z-10">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#0669F9]/20 flex items-center justify-center mx-auto mb-8 sm:mb-10 border border-[#0669F9]/30 shadow-[0_0_50px_rgba(6,105,249,0.3)]">
                    <Check size={32} className="text-white sm:w-11 sm:h-11" strokeWidth={4} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">Request Submitted!</h2>
                  <p className="text-white text-lg sm:text-xl mb-2 sm:mb-3 opacity-80">Thank you for your interest, {data.name.split(" ")[0]}!</p>
                  <p className="text-white text-xl sm:text-2xl font-semibold mb-8 sm:mb-10">Our team will reach out to you shortly.</p>
                  <p className="text-base sm:text-lg text-white mb-10 sm:mb-14 leading-relaxed max-w-lg mx-auto opacity-70">
                    We'll contact you at <strong className="text-white font-bold">{data.email}</strong> or <strong className="text-white font-bold">{data.phone}</strong> to discuss your project and schedule a consultation.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-[#0669F9] to-[#359AF2] text-white px-8 sm:px-12 py-7 sm:py-9 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-black uppercase tracking-widest flex items-center gap-4 sm:gap-5 mx-auto transition-all hover:scale-105 shadow-2xl shadow-[#0669F9]/30"
                    onClick={() => navigate("/")}
                  >
                    Back to Home <ArrowRight size={20} className="sm:w-6 sm:h-6" strokeWidth={3} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {step < 2 && (
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/5 relative z-10">
                <Button
                  variant="ghost"
                  onClick={() => setStep((s) => s - 1)}
                  disabled={step === 0}
                  className="text-white hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest px-6 sm:px-10 h-14 sm:h-16 rounded-xl sm:rounded-2xl disabled:opacity-0 transition-all text-xs sm:text-sm order-2 sm:order-1"
                >
                  <ArrowLeft size={18} className="mr-2 sm:mr-3" /> Back
                </Button>
                <div className="flex flex-col sm:flex-row gap-4 order-1 sm:order-2 w-full sm:w-auto">
                  {step < 1 ? (
                    <Button
                      className="bg-gradient-to-r from-[#0669F9] to-[#359AF2] text-white px-8 sm:px-12 h-14 sm:h-16 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold uppercase  flex items-center justify-center gap-3 sm:gap-4 transition-all hover:scale-[1.02] shadow-2xl shadow-[#0669F9]/30 disabled:opacity-50 w-full sm:w-auto"
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canNext()}
                    >
                      Continue <ArrowRight size={20} className="sm:w-5 sm:h-5" strokeWidth={3} />
                    </Button>
                  ) : (
                    <Button
                      className="bg-gradient-to-r from-[#0669F9] to-[#359AF2] text-white px-8 sm:px-12 h-14 sm:h-16 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold uppercase  flex items-center justify-center gap-3 sm:gap-4 transition-all hover:scale-[1.02] shadow-2xl shadow-[#0669F9]/30 disabled:opacity-50 w-full sm:w-auto"
                      onClick={handleSubmit}
                      disabled={!canNext() || isSubmitting}
                    >
                      {isSubmitting ? <Loader2 size={20} className="animate-spin mr-2 sm:mr-3" /> : null}
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                      {!isSubmitting && <Send size={20} className="sm:w-5 sm:h-5" strokeWidth={3} />}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
