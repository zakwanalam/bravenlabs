const WHATSAPP_URL = "https://wa.me/0000000000000?text=Hi%20Braven%20Labs%2C%20I%27d%20like%20to%20ask%20a%20quick%20question.";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-16 bg-[#0c0c14]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/logos/logo-navbar.png" 
              alt="Braven Labs" 
              className="h-10 w-auto object-contain mb-4" 
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs text-center md:text-left">
              Designing high-end digital identities and AI-powered systems that defy the ordinary.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/50">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#automation" className="hover:text-white transition-colors">Automation</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            <a href="#cta" className="text-[#0669F9] hover:text-[#0669F9]/80 transition-colors">Book a Free Consultation</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/20 tracking-widest uppercase">
          © {new Date().getFullYear()} Braven Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
