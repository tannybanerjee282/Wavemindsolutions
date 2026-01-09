import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiPostgresql, 
  SiAmazonwebservices, 
  SiDocker, 
  SiTailwindcss, 
  SiTypescript 
} from "react-icons/si";
import wavemindLogo from "@assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-slate-800 shadow-sm p-1">
                <img src={wavemindLogo} alt="WaveMind Solutions Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-xl leading-tight">
                  <span className="font-extrabold">W</span>aveMind
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Solutions</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses through innovation, expertise, and digital transformation. 
              We turn visionary ideas into reality.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/wavemind-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/share/1BmFYbaUbs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/wavemindsolutions?igsh=c2ZxdWN1emduYjNm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/leadership" className="hover:text-primary transition-colors">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">AI & Data Science</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>13, Kalupara Lane, Dhakuria,<br />Kolkata - 700031</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>+91 82828 43434</span>
                  <span>+91 82828 12121</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@wavemindsolutions.in" className="hover:text-white">info@wavemindsolutions.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Technologies We Use */}
        <div className="border-t border-slate-800 mt-16 pt-12">
          <h4 className="text-white font-semibold mb-8 text-center">Technologies We Use</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-2">
              <SiReact className="w-8 h-8" title="React" />
              <span className="text-[10px] uppercase tracking-tighter">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiNodedotjs className="w-8 h-8" title="Node.js" />
              <span className="text-[10px] uppercase tracking-tighter">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiPython className="w-8 h-8" title="Python" />
              <span className="text-[10px] uppercase tracking-tighter">Python</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiPostgresql className="w-8 h-8" title="PostgreSQL" />
              <span className="text-[10px] uppercase tracking-tighter">Postgres</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiAmazonwebservices className="w-8 h-8" title="AWS" />
              <span className="text-[10px] uppercase tracking-tighter">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiDocker className="w-8 h-8" title="Docker" />
              <span className="text-[10px] uppercase tracking-tighter">Docker</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTailwindcss className="w-8 h-8" title="Tailwind CSS" />
              <span className="text-[10px] uppercase tracking-tighter">Tailwind</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTypescript className="w-8 h-8" title="TypeScript" />
              <span className="text-[10px] uppercase tracking-tighter">TypeScript</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} WaveMind Solutions. All rights reserved.</p>
          <p>Innovate . Elevate . Navigate</p>
        </div>
      </div>
    </footer>
  );
}
