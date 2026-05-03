import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Automation", href: "#automation" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const BravenLogo = () => (
  <div className="flex items-center group">
    <img
      src="/logos/logo-navbar.png"
      alt="Braven Labs"
      className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0c0c14]/80 backdrop-blur-2xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <a href="#" className="transition-transform duration-300">
          <BravenLogo />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="/booking"
            className="text-sm font-bold text-white hover:opacity-90 transition-all px-6 py-2.5 rounded-full shadow-[0_10px_20px_rgba(6,105,249,0.2)]"
            style={{ background: "linear-gradient(135deg, #0669F9 0%, #359AF2 100%)" }}
          >
            Get Started
          </a>
          {/* <ThemeToggle /> */}
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[#0c0c14] px-6 py-8 space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-lg font-medium text-white/60 hover:text-white transition-colors" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#cta" className="block text-lg font-bold text-[#0669F9]" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
