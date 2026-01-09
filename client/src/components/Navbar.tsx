import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import wavemindLogo from "@assets/logo.jpg"; // Assuming generic placeholder if missing, or user provided

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Leadership", href: "/leadership" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use generic logo if import fails (or standard handling)
  // For this demo, using text fallback if image is tricky, but trying to use import
  
  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-slate-900 border-white/10 shadow-lg py-2"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
             <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                 <img src={wavemindLogo} alt="WaveMind Solutions Logo" className="w-full h-full object-contain" />
             </div>
             <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-white/90 transition-colors">
                  <span className="font-extrabold">W</span>aveMind
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/70 font-medium -mt-1">
                  Solutions
                </span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative py-1",
                  location === item.href
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
                {location === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />
                )}
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium px-4 py-2 rounded-lg transition-colors",
                  location === item.href
                    ? "bg-primary/5 text-primary"
                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
